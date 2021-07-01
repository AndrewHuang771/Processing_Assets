LENGTH = 200;
WIDTH = 1300;
FRAMERATE = 60;
PIXELDENSITY = 1;

function setup() {
  createCanvas(WIDTH, LENGTH);
  // pixelDensity(PIXELDENSITY);
  frameRate(FRAMERATE);
  background(51);
  let config = {
    size: {
      length: 5,
      width: 5
    },
    gravity: true,
    wind: false,
    initialPosition: new Vector([0, 10]),
    initialVelocity: new Vector([1, -1]),
    mass: 10,
    color: color(255, 255, 255),
  };
  var body = new Body(config);
  bodies.push(body);
}

let bodies = [];


function draw() {
  background(51);

  for ( let i = 0; i < bodies.length; i ++ ) {
    bodies[i].render();
  }
}
