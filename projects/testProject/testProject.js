p5.disableFriendlyErrors = true; // disables FES
HEIGHT = 900;
WIDTH = 1700;
FRAMERATE = 60;
PIXELDENSITY = 1;
MAXPROBABILITY = 0.99;
UPDATEDELAY = 1;

let bodies = [];
let bodies2 = [];
let fields = [];
// Counts the number of ticks passed
let t = 0;
setInterval(() => {
  t += 1;
}, 1000 / FRAMERATE);

function createBodies(p) {
  let config = {
    p: p,
    pixelSize: {
      height: 4,
      width: 4,
    },
    forces: [
      (body) => {
        let x = body.position.getComponents()[0];
        let y = body.position.getComponents()[1];
        let force = new Vector([p.noise(t / 60 + x), p.noise(t / 60 + y)]);
        return force;
      },
    ],
    mass: 10,
    template: (body) => {
      return new Template(
        make2DLineTemplate(p, body.velocity.copy(), p.color(255, 255, 255))
      );
    },
    probability: 0.35,
    direction: new Vector([2, 3]),
    coordsSpawn: [(-1 * HEIGHT) / 2 - 4, -WIDTH, (-1 * HEIGHT) / 2 - 3, WIDTH],
  };
  var body = new Rain(p, config);
  bodies.push(body);
}

let s = (p) => {
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    HEIGHT = p.windowHeight;
    WIDTH = p.windowWidth;
    // pixelDensity(PIXELDENSITY);
    p.frameRate(FRAMERATE);

    createBodies(p);
  };

  p.draw = () => {
    if (Math.round(t) % UPDATEDELAY == 0) {
      p.clear();
    }
    for (let i = 0; i < bodies.length; i++) {
      bodies[i].update();
      if (Math.round(t) % UPDATEDELAY == 0) {
        bodies[i].render();
      }
    }

    drawFPS(p);
  };
};

// function createBodies2(p) {
//   let config = {
//     p: p,
//     pixelSize: {
//       height: 4,
//       width: 4,
//     },
//     forces: [
//       (body) => {
//         let x = body.position.getComponents()[0];
//         let y = body.position.getComponents()[1];
//         let force = new Vector([p.noise(t / 60 + x), p.noise(t / 60 + y)]);
//         return force;
//       },
//     ],
//     mass: 10,
//     template: (body) => {
//       return new Template(
//         make2DLineTemplate(p, body.velocity.copy(), p.color(0, 255, 255))
//       );
//     },
//     probability: 0.35,
//     direction: new Vector([2, 3]),
//     coordsSpawn: [-4, -WIDTH, -3, WIDTH],
//   };
//   var body = new Rain(p, config);
//   bodies2.push(body);
// }

var myp5 = new p5(s, "c1");

// let s2 = (p) => {
//   p.setup = () => {
//     p.createCanvas(p.windowWidth, p.windowHeight);
//     HEIGHT = p.windowHeight;
//     WIDTH = p.windowWidth;
//     // pixelDensity(PIXELDENSITY);
//     p.frameRate(FRAMERATE);

//     createBodies2(p);
//   };

//   p.draw = () => {
//     if (Math.round(t) % UPDATEDELAY == 0) {
//       p.clear();
//     }
//     for (let i = 0; i < bodies2.length; i++) {
//       bodies2[i].update();
//       if (Math.round(t) % UPDATEDELAY == 0) {
//         bodies2[i].render();
//       }
//     }

//     drawFPS(p);
//   };
// };

// var myp52 = new p5(s2, "c2");
