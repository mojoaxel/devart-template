
## The First Prototype ##

In 2007 I was an active member at a [hackerspace](http://k4cg.org/) located in nuernberg. Around this time i had the idea to reuse an old thermo-printer from ebay to printout news from an rss feed. The first idea was to print important system messages and status updates but after drinking quite some of the good dark german Kellerbier i must have desided to go a more artistic approuch with this:

The printer should print snipplets of digital human communication and pass this printout on to an small shredder that destroys the recently printed messages. This should visualize the **transience** of our **fast** and somethimes **meaningless** way to communicate in these days.

I wanted the installation to be "plugg and play" and something to be easily carry around. So I desided to implement an linux application and run it on some "embedded" device. Because the **Raspberry Pi** was still in early development at this time and years away from the market I brought an uATX Atom board and installed an ubuntu.
Not long after starting I realized that there was only a windows driver for my printer, so i started [porting](https://github.com/mojoaxel/twinter) a free java example application into perl. After that I now was ready to print text and lines with basic formating.  

With the help of some colleges at the hackerspace I even [got the line printer driver from linux to work](http://k4cg.org/k4cg:projekte:rss-drucker) and we could start printing. At this time twitter still has a free RSS-feed Api so I started printing out Tweets with specific tags.
I had some problems with my perl scripts and the printer-cutter and so I desided to not connect a shredder and instead print long ribbons of tweets to create a curtain to walk through:

Despite the problems I was part of an "art & beauty" exhibition at the [Chaos-Communication-Camp 2007](http://events.ccc.de/camp/2007/Intro/).

![artistik shot](../project_images/2014-03-25-CCCCamp07-CCSABY-mlcastle.jpg "CC-BY-SA by mlcastle")

### Links ###

* [The perl prototype from 2007](https://github.com/mojoaxel/twinter)
* [How to set up the printer](http://k4cg.org/k4cg:projekte:rss-drucker) on ubuntu
