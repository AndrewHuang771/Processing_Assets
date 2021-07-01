LENGTH = 200;
WIDTH = 1300;
FRAMERATE = 60;
PIXELDENSITY = 1;

let bodies = [];

function setup() {
  createCanvas(WIDTH, LENGTH);
  // pixelDensity(PIXELDENSITY);
  frameRate(FRAMERATE);
  bg = loadImage('bkgd.jpg');
  background(bg);

  for ( let x = 0; x < 1; x ++ ) {
    let config = {
      size: {
        length: 15,
        width: 15
      },
      forces: [GRAVITY],
      initialPosition: new Vector([0, 10*x]),
      initialVelocity: new Vector([1, -1]),
      mass: 10,
      color: color(255, 255, 255),
      template: [
        [color(255, 255, 255), color(255, 1, 255), color(255, 255, 255)], 
        [color(0, 255, 255), color(0, 0, 0)]
      ],
    };
    var body = new Body(config);
    bodies.push(body);
  }

}

function draw() {
  background(bg);
  for ( let i = 0; i < bodies.length; i ++ ) {
    bodies[i].update();
    bodies[i].render();
  }
}
