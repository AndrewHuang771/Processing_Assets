function Droplet(config) {
  this.config = config;
  // Used to make trail
  this.body = new Body(this.config);

  this.update = () => {
    this.body.update();
  };

  this.render = () => {
    this.body.render();
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
  this.probability = min(this.config.probability, MAXPROBABILITY);
  this.trailLength =
    min(Math.floor(Math.abs(this.config.trailLength)), 10) || 5;
  this.accelerationScaleFactor = this.config.accelerationScaleFactor || 0.1;
  this.droplets = [];

  this.defaultDropletConfig = {
    size: {
      height: this.config.size.height,
      width: this.config.size.width,
    },
    forces: [this.direction.copy()],
    mass: 10,
    color: this.color,
    initialVelocity: this.direction.copy(),
    template: [
      [color(255, 255, 255), color(255, 255, 255)],
      [color(255, 255, 255), color(255, 255, 255)],
    ],
  };

  this.defaultDropletConfig.forces[0].scale(this.accelerationScaleFactor);

  this.createDroplets = () => {
    while (Math.random() <= this.probability) {
      let coordX =
        this.coordsSpawn[0] +
        Math.floor(Math.random() * (this.coordsSpawn[2] - this.coordsSpawn[0]));
      let coordY =
        this.coordsSpawn[1] +
        Math.floor(Math.random() * (this.coordsSpawn[3] - this.coordsSpawn[1]));
      let config = this.defaultDropletConfig;
      config.initialPosition = new Vector([coordY, coordX]);
      let droplet = new Droplet(this.defaultDropletConfig);
      this.droplets.push(droplet);
    }
  };

  this.destroyDropletsOOS = () => {
    for (let i = 0; i < this.droplets.length; i++) {
      let position = this.droplets[i].body.position.getComponents();
      if (position[0] > WIDTH || position[1] > HEIGHT) {
        this.droplets.splice(i, 1);
      }
    }
  };

  this.render = () => {
    for (let i = 0; i < this.droplets.length; i++) {
      this.droplets[i].render();
    }
  };

  this.update = () => {
    this.createDroplets();
    this.destroyDropletsOOS();
    for (let i = 0; i < this.droplets.length; i++) {
      this.droplets[i].update();
    }
  };
}
