# schneeiger_bote

"schneeiger bote" is artificial German and means something like "the snow-like bringer of the news".

## Authors

- Alexander Wunschik - [mojoaxel](https://github.com/mojoaxel "GitHub Account")

## Description

News are unique like snow-flakes in their content, the sender and the time they were posted. I want to create an installation that prints real-time "tweet-flakes" from all over the world on small thermal-paper snippets and lets them "rain" down on the visitors. 
The small and lightweight printouts "live" for only a few seconds while the fly through the air before they are walked upon and forgotten. 
I want the visitors to realize that the *transient* and *worthless* mass of *creaking* tweets under their shoes can also be picked up again, read, kept, or thrown away. 
By combining a real-time node.js-backend with multiple RaspberryPi modules with attached kiosk printers I want to show an alternative and haptic way to experience some random tweets from around the world.

![concept sketch](project_images/BarbicanFoyerPrinter-CCSABY-Jknight1603.jpg)

## Link to Prototype

The [first prototype](project_posts/2014-03-24-The-First-Prototype.md) was shown as part of the "art & beauty" exhibition at the Chaos-Communication-Camp 2007. There, long ribbons with the conference hashtag were created and hung up to create a curtain to walk through:

![artistik shot](project_images/2014-03-25-CCCCamp07-CCSABY-mlcastle_1000x500.jpg "CC-BY-SA by mlcastle")

## Example Code

Here are some snippets of the old Perl prototype (2007):

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
