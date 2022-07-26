function Droplet(config) {
  this.config = config;
  this.body = new Body(this.config);

  this.update = (dT) => {
    this.body.update(dT);
  };

  this.render = (triangleVertices, canvasDim) => {
    this.body.render(triangleVertices, canvasDim);
  };
}

function Rain(config) {
  this.config = config;
  // coords_spawn: [top_left_x, top_left_y, bottom_right_x, bottom_right_y]
  this.coordsSpawn = this.config.coordsSpawn;
  // By default, despawn when off screen
  this.coordsDespawn = this.config.coordsDespawn;
  this.color = this.config.color;
  this.direction = this.config.direction.copy();
  this.probability = Math.min(this.config.probability, MAXPROBABILITY);
  this.trailLength =
    Math.min(Math.floor(Math.abs(this.config.trailLength)), 10) || 5;
  this.accelerationScaleFactor = this.config.accelerationScaleFactor || 0.1;
  this.forces = this.config.forces;
  this.droplets = [];

  this.defaultDropletConfig = {
    pixelSize: {
      height: this.config.pixelSize.height,
      width: this.config.pixelSize.width,
    },
    forces: this.forces,
    mass: 10,
    color: this.color,
    initialVelocity: this.direction.copy(),
    template: this.config.template,
  };

  this.createDroplets = () => {
    let num = 0;
    while (Math.random() <= this.probability && num < 10) {
      num++;
      let coordX =
        this.coordsSpawn[0] +
        Math.floor(Math.random() * (this.coordsSpawn[2] - this.coordsSpawn[0]));
      let coordY =
        this.coordsSpawn[1] +
        Math.floor(Math.random() * (this.coordsSpawn[3] - this.coordsSpawn[1]));
      let config = this.defaultDropletConfig;
      config.initialPosition = new Vector([coordX, coordY]);
      let droplet = new Droplet(this.defaultDropletConfig);
      this.droplets.push(droplet);
    }
  };

  this.destroyDropletsOOS = (canvasDim) => {
    let { canvasWidth, canvasHeight } = canvasDim;
    for (let i = 0; i < this.droplets.length; i++) {
      let position = this.droplets[i].body.position.getComponents();
      if (
        position[0] > canvasWidth / 2 ||
        position[1] < canvasHeight / -2 ||
        position[0] < canvasWidth / -2 ||
        position[1] > canvasHeight / 2 + 50
      ) {
        this.droplets.splice(i, 1);
      }
    }
  };

  this.render = (triangleVertices, canvasDim) => {
    for (let i = 0; i < this.droplets.length; i++) {
      this.droplets[i].render(triangleVertices, canvasDim);
    }
  };

  this.update = (canvasDim, dT) => {
    this.createDroplets();
    this.destroyDropletsOOS(canvasDim);
    for (let i = 0; i < this.droplets.length; i++) {
      this.droplets[i].update(dT);
    }
  };
}
