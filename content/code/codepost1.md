Title: CSS Full Width Image
Date: 2010-06-04 11:41
Tags: CSS, full-width image, code
Slug: css-full-width-image
Authors: Leandro Lopez
  
The point of this blog is to log my developer journey - what I'm learning, 
the struggles I encounter, the surprises I encounter. It shouldn't come as 
a suprise then, that during the development of this blog I ran into a few 
frustrations.  
  
On of the things that I knew, stylistically, that I wanted was a full width image 
inside of a limited width parent. This is because I wanted nice margins for
legibility, and wide images for aesthetics.

My first instinct (and I'll admit, one reinforced by ChatGPT) was to do something 
like this:  
  
```css
header, main, footer {
    width: 100%;
    margin-left: 16px;
}

img {
    display: block;
    max-width: 100vw;
    margin-left: -8px;
}
```
  
However, that gave me less than desirable results. At the screen width I was testing 
on, which was some Android mobile device simulated by Firefox, it gave me that weird
margin at the far right edge of the screen - that extra, empty scroll area some websites
have.  
  
One I tested on other devices, especially apple devices, the results were even worse. 
To have made it work, I would have had to use a bunch of media queries. While there is 
nothing wrong with media queries, it does seem like overcomplicating what seems like a 
simple need.  
  
Frustrated that a) the solution wasn't as simple as I thought it would be and b) I had 
been mislead by ChatGPT, I did the most sensible thing - [CSS-Tricks](https://css-tricks.com/full-width-containers-limited-width-parents/)!  
  
There were two solutions from CSS-Tricks that I liked. The first indicated that I wasn't 
too far off with my initial try.
  
```css

header, main, footer {
    width: 90%;
    margin: auto;
}


img {
    margin-left: -5%;
    margin-right: 5%;
}

```
  
The image I was testing with, however, was pretty giant so that wouldn't work with mine. 
I know that it's important to upload web optimized images, and that includes resizing them 
so they're not massive. However, I do want to upload my art to this blog, and some of the 
art might be larger than 412 pixels wide. I want a nice solution, that on a larger screen 
would allow guests to see the artwork full sized.  
  
CSS-Tricks also had this great solution by [Sven Wolfermann](https://codepen.io/maddesigns/pen/rOMgpQ/):  
  
```css
.full-width {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
}
```
  
I ended up sticking with Sven's solution. It seems straightforward and flexible, as it doesn't 
require knowing and calculating the parent containers width. It does, however, require that the 
parent element is centered. Here is what Chris Coyier from CSS-Tricks had to say about it:  
  
 > The idea here is: push the container to the exact middle of the browser window with left: 50%;, then pull it back to the left edge with negative -50vw margin.

CSS-Tricks has a few more solutions, and goes more in-depth than I could so make sure to visit them 
and read their [article](https://css-tricks.com/full-width-containers-limited-width-parents/)!

