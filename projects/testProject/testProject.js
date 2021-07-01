LENGTH = 1000;
WIDTH = 1920;
FRAMERATE = 60;
PIXELDENSITY = 1;

let bodies = [];

function setup() {
  createCanvas(WIDTH, LENGTH);
  // pixelDensity(PIXELDENSITY);
  frameRate(FRAMERATE);

  for ( let x = 0; x < 1; x ++ ) {
    let config = {
      size: {
        length: 3,
        width: 3,
      },
      forces: [new Vector([1, 1])],
      initialPosition: new Vector([0, 0]),
      initialVelocity: new Vector([1, 1]),
      mass: 10,
      color: color(255, 255, 255),
      template: [
        [color(255, 255, 255, 0), color(255, 255, 255), color(255, 255, 255)], 
        [color(255, 255, 255), color(0, 0, 0, 0)]
      ],
    };
    var body = new Body(config);
    bodies.push(body);
  }

}

function draw() {
  clear();
  for ( let i = 0; i < bodies.length; i ++ ) {
    bodies[i].update();
    bodies[i].render();
  }
}
