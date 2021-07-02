HEIGHT = 1000;
WIDTH = 1920;
FRAMERATE = 60;
PIXELDENSITY = 1;
MAXPROBABILITY = 0.99;

let bodies = [];

function setup() {
  createCanvas(WIDTH, HEIGHT);
  // pixelDensity(PIXELDENSITY);
  frameRate(FRAMERATE);

  for (let x = 0; x < 1; x++) {
    let config = {
      pixelSize: {
        height: 4,
        width: 4,
      },
      forces: [new Vector([1, 1])],
      initialPosition: new Vector([0, 0]),
      mass: 10,
      color: color(255, 255, 255),
      template: make2DLineTemplate(new Vector([2, 3]), color(255, 255, 255)),
      probability: 0.65,
      direction: new Vector([2, 3]),
      coordsSpawn: [0, -WIDTH, 1, WIDTH],
    };
    var body = new Rain(config);
    bodies.push(body);
  }
  for (let x = 0; x < 1; x++) {
    let config = {
      pixelSize: {
        height: 2,
        width: 2,
      },
      forces: [new Vector([1, 1])],
      initialPosition: new Vector([0, 0]),
      mass: 10,
      color: color(255, 255, 255),
      template: [
        [color(255, 255, 255), color(255, 255, 255)],
        [color(255, 255, 255), color(255, 255, 255)],
      ],
      probability: 0.65,
      direction: new Vector([5, 3]),
      coordsSpawn: [0, -WIDTH, 1, WIDTH],
    };
    var body = new Rain(config);
    bodies.push(body);
  }
}

function draw() {
  clear();
  for (let i = 0; i < bodies.length; i++) {
    bodies[i].update();
    bodies[i].render();
  }
}
