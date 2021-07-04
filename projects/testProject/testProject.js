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

function createBodies() {
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
    mass: 10,
    template: (body) => {
      return new Template(
        make2DLineTemplate(new Vector([2, 3]), (body) => {
          let x = body.position.getComponents()[0];
          let y = body.position.getComponents()[1];
          let red = min(x, 255);
          return color(red, 255, 255);
        })
      );
    },
    probability: 0.65,
    direction: new Vector([2, 3]),
    coordsSpawn: [-4, -WIDTH, -3, WIDTH],
  };
  var body = new Rain(config);
  bodies.push(body);

  let config2 = {
    pixelSize: {
      height: 2,
      width: 2,
    },
    initialPosition: new Vector([0, 0]),
    initialVelocity: new Vector([0, 0]),
    forces: [],
    mass: 10,
  };
  let body2 = new Body(config2);
  bodies.push(body2);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  HEIGHT = windowHeight;
  WIDTH = windowWidth;
  // pixelDensity(PIXELDENSITY);
  frameRate(FRAMERATE);

  createBodies();
}

function draw() {
  if (t % UPDATEDELAY == 0) {
    clear();
  }
  for (let i = 0; i < bodies.length; i++) {
    bodies[i].update();
    if (t % UPDATEDELAY == 0) {
      bodies[i].render();
    }
  }
  t++;

  drawFPS();
}
