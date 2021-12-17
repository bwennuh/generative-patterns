# Making a Christmas Tree with Generative Patterns!

## Intro

Starter code and resources are taken from [CSS Tricks - Creating Generative Patterns with the CSS Paint API](https://css-tricks.com/creating-generative-patterns-with-the-css-paint-api/).

## About the Lights

Using the CSS Paint API to create generative patterns for make "twinkling" lights on a Christmas tree!

The light locations are randomly seeded every time the page is loaded, and the page is set to reload every second (to give the "twinkle" effect). The seed locations are by randomized X and Y locations on the browser.

The light shapes are all set as circles, whose sizes are all predetermined. However, the circle radii can also be set to be randomized every time as well, creating lights of different sizes.

Lastly, the colors of the lights are all preset, but the colors are randomly assigned to each light seed location, so the colors will appear to be changing over and over (or rather, ✨ twinkling ✨)

Also please note that currently, paint worklets (as used here for the Christmas lights) are only compatible with Chrome and Edge browsers for Desktop, and Android Chrome and Android for Mobile / Tablet.

## About the Tree

The tree shapes (including the tree body, the tree trunk, and the tree star topper) are all generated using a `clip-path` generator. I used Clippy (which is linked below in the Resources section). I'm not at a place where I know the math behind making clip paths for myself, so I used a generator to create the shapes I wanted, which also output the CSS code to use!

## Resources

1. [CSS Tricks - Creating Generative Patterns with the CSS Paint API](https://css-tricks.com/creating-generative-patterns-with-the-css-paint-api/)

2. [CSS clip-path maker](https://bennettfeely.com/clippy/)

3. [CSS Properties and Values API Documentation](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Properties_and_Values_API)

4. [CSS Painting API Documentation](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Painting_API)
