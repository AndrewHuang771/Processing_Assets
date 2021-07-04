p5.disableFriendlyErrors = true; // disables FES
HEIGHT = 900;
WIDTH = 1700;
FRAMERATE = 60;
PIXELDENSITY = 1;
MAXPROBABILITY = 0.99;
UPDATEDELAY = 1;

let bodies = [];
let fields = [];
// Counts the number of ticks passed
let t = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  HEIGHT = windowHeight;
  WIDTH = windowWidth;
  // pixelDensity(PIXELDENSITY);
  frameRate(FRAMERATE);

  let config = {
    pixelSize: {
      height: 4,
      width: 4,
    },
    forces: [
      (body) => {
        let x = body.position.getComponents()[0];
        let y = body.position.getComponents()[1];
        let force = new Vector([Math.abs(x) / HEIGHT, Math.abs(y) / WIDTH]);
        return force;
      },
    ],
    initialPosition: new Vector([0, 0]),
    mass: 10,
    color: color(255, 255, 255),
    template: new Template(
      make2DLineTemplate(new Vector([2, 3]), (body) => {
        let x = body.position.getComponents()[0];
        let y = body.position.getComponents()[1];
        let red = min(x, 255);
        // console.log(x, y);
        return color(red, 255, 255);
      })
    ),
    probability: 0.65,
    direction: new Vector([2, 3]),
    coordsSpawn: [-4, -WIDTH, -3, WIDTH],
  };
  var body = new Rain(config);
  bodies.push(body);
}

function draw() {
  for (let i = 0; i < bodies.length; i++) {
    bodies[i].update();
    if (t % UPDATEDELAY == 0) {
      clear();
      bodies[i].render();
    }
  }
  t++;

  drawFPS();
}
