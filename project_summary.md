# schneeige_bote

"schneeige bote" is german and means something like "the snow-like one who brings the news".

## Authors

- Alexander Wunschik - [mojoaxel](https://github.com/mojoaxel "GitHub Account")

## Description

News are unique like snow-flaks in there content, the sender and the time they were posted. By creating an installation that prints real-time "tweet-flakes" from all over the world on small thermo-paper snippets and let them "rain" down on the visitors. 
The small and lightweight printouts "live" only a few seconds while the fly through the air before the are walked apon and forgotten. I want the visitors to realize that these *transience* and *worthlessness* mass of tweets under there shoose can also be picked up read, kept of thrown away.
By combining a real-time node.js-backend with a lightway RaspberryPi module with an attached kiosk printer I want to show an alternative and haptic way to experience the tweets of the world.


## Link to Prototype

The first prototype was shown as part of the "art & beauty" exibition at the [Chaos-Communication-Camp 2007](http://events.ccc.de/camp/2007/Intro/):

[The First Prototype from 2007](https://github.com/mojoaxel/twinter)

There are also details on these prototype [in the posts](project_posts/2014-03-25-The-First-Prototype.md)

## Example Code

```perl
$tcp2k->set_text_size(3);
$tcp2k->set_style( $STYLE_BOLD );
$tcp2k->print_text( $hash );	

$tcp2k->set_text_size(0);
$tcp2k->set_char_width(0);
$tcp2k->set_style( $STYLE_NONE );
$tcp2k->print_text( "hacked together in perl by" );
$tcp2k->set_style( $STYLE_BOLD );
$tcp2k->print_text( 'mojoaxel, @wunschik, http://delphiN.soup.io' ); 
```
## Images & Videos

![First Prototype 2007](project_images/BarbicanFoyerPrinter-CCSABY-Jknight1603.jpg)

