// seedable random number generator supporting many common distributions;
// an excellent library for working with random numbers
import random from "https://cdn.skypack.dev/random";
// https://www.skypack.dev/view/random

// seeded random number generator for Javascript;
// a pseudo-random number generator to use as the base algorithm
import seedrandom from "https://cdn.skypack.dev/seedrandom";
// https://www.skypack.dev/view/seedrandom

class GenerativePattern {
  static get inputProperties() {
    return [
      "--pattern-seed",
      // a seed value for the pseudo-random number generator

      "--pattern-colors",
      // the available colors for each speck

      "--pattern-speck-count",
      // how many individual specks the worklet should render

      "--pattern-speck-min-size",
      // the minimum size for each speck

      "--pattern-speck-max-size",
      // the maximum size for each speck
    ];
  }

  // given the same input properties and dimensions, a worklet’s paint() function should always render the same thing
  paint(ctx, geometry, props) {
    const { width, height } = geometry;

    const seed = props.get("--pattern-seed").value;
    const colors = props
      .getAll("--pattern-colors")
      .map((color) => color.toString());
    const count = props.get("--pattern-speck-count").value;

    // const minSize = props.get("--pattern-speck-min-size").value;
    // const maxSize = props.get("--pattern-speck-max-size").value;

    random.use(seedrandom(seed));

    for (let i = 0; i < count; i++) {
      // in every iteration of this loop, we are creating one individual speck

      const xPosition = random.float(0, width);
      // define an X position for the speck

      const yPosition = random.float(0, height);
      // define a Y position for the speck

      const radius = 5;
      // const radius = random.float(minSize, maxSize);

      ctx.fillStyle = colors[random.int(0, colors.length - 1)];

      // save the state of the drawing context
      // want to rotate each speck, but cannot rotate individual items
      ctx.save();

      // translate to the speck's center point
      ctx.translate(xPosition, yPosition);
      // apply a rotation
      ctx.rotate(((random.float(0, 360) * 180) / Math.PI) * 2);
      // translate back to the top-left corner of the drawing space
      ctx.translate(-xPosition, -yPosition);

      // render the path for speck
      ctx.beginPath();

      // create the shape - circle
      ctx.arc(xPosition, yPosition, radius * 5, 0, 2 * Math.PI);
      ctx.shadowColor = "white";
      ctx.shadowBlur = 10;

      // outline the shape
      // ctx.stroke();

      // fill the shape
      ctx.fill();

      // restore the drawing context
      ctx.restore();
    }
  }
}

if (typeof registerPaint !== "undefined") {
  registerPaint("generativePattern", GenerativePattern);
}
