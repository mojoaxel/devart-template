var _client = new (function() {
    this.init = init;

    var _socket = null;
    var _numTweets = 0;

    function init() {
        if(io !== undefined) {
        	try {
            _socket = io.connect("http://localhost:2000/");
            _socket.on("new tweet", function(tweet) {
                newTweet(tweet);
            });
            _socket.on("connected", function(r) {
                $("head").find("title").html("Tracking now: " + r.tracking);
                $(".tracking").html(r.tracking);
                emitMsj("start stream");
            });
        	} catch(err) {
        		console.error("SOCKET-IO ERROR: ", err);
        	}
        }
    }

    function newTweet(tweet) {
        if(_numTweets === 0) {
            $(".datetime").html(new Date().toLocaleString());
        }
        
        //console.log(tweet);
        
        $tweetItem = $('<li>')
        $tweetItem.addClass('tweetitem');        
        $tweetItem.append('<h2>'+tweet.user.name+'</h2>');
        $tweetItem.append('<h3>'+tweet.created_at+'</h3>');
        $tweetItem.append('<p>'+tweet.text+'</p>');
        
        if (tweet.entities.urls.length > 0){
	        var $qrs = $('<ul class="qr_codes"></ul>');
	        $tweetItem.append($qrs).appendTo($tweetItem);
	        				
	        $.each(tweet.entities.urls, function(i, url) {
	        	var $qr = $('<li id="qrcode_'+i+'"></li>');
	        	var $qrlink = $('<a href="'+url.url+'"></a>').appendTo($qr);
	        	$qrlink.qrcode({width: 64, height: 64, text: url.display_url});
	        	$qrs.append($qr);
	        });
        }
        
        var left1 = ($('ul.paperstrip').width()-300)*Math.random();
        $tweetItem.css({ top: -300, left: left1});
        
        $tweetList = $('ul.paperstrip');
        $tweetList.append($tweetItem);
      
        var left2 = left1+400-800*Math.random();
        var top = $('ul.paperstrip').height()+300
        var delay = 5000+15000*Math.random();
        $tweetItem
        	.hover(function() {
        		$(this).pause();
        	}, function() {
        		$(this).resume();
        	})
        	.animate({
        		top: top,
        		left: left2
        	}, delay, function() {
        		$(this).remove();
        	});

        _numTweets++;
        $(".numTweets").html(_numTweets);
    }

    function emitMsj(signal, o) {
        if(_socket) {
            _socket.emit(signal, o);
        }
        else {
            alert("Shit! Socket.io didn't start!");
        }
    }

});