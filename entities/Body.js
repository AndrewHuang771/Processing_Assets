// A shape affected by physics

function Body(config) {
  this.config = config;
  // Array with two elements, length and width
  this.pixelSize = this.config.pixelSize;
  this.mass = this.config.mass;
  this.color = this.config.color;
  // 2D Array showing body layout and color for each rect
  this.template = this.config.template || [[color(255, 255, 255, 0)]];
  this.forces = [...this.config.forces];
  // The top-left corner of the body
  this.position = this.config.initialPosition.copy();
  this.velocity = this.config.initialVelocity.copy();
  this.acceleration = new Vector([0, 0]);

  //   this.velocity.print();

  // template, what the object looks like, color, etc
  // initial position/velocity
  // acceleration determined by forces

  this.setForces = (forces) => {
    this.forces = forces;
  };

  this.addForce = (force) => {
    this.forces.push(force);
  };

  this.updatePosition = () => {
    let netForce = new Vector([0, 0]);
    if (this.forces) {
      for (let i = 0; i < this.forces.length; i++) {
        netForce.add(this.forces[i]);
      }
    }
    this.acceleration = netForce;
    this.acceleration.scale(1 / this.mass);
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
  };

  this.updateColors = () => {
    if (this.colorFields) {
      for (let i = 0; i < this.colorFields.length; i++) {
        let cursor = new Vector([0, 0]);
        cursor = this.position;
      }
    }
  };

  this.update = () => {
    this.updatePosition();
    this.updateColors();
  };

  this.drawRect = (cursor, height, width, color) => {
    let position = cursor.getComponents();
    fill(color);
    noStroke();
    rect(position[0], position[1], height, width);
  };

  // this.checkOnscreen = () => {
  //   let upperLeftCorner = this.position.getComponents();
  //   let upperRightCorner = [...upperLeftCorner];
  //   upperRightCorner[1] += this.template.length * this.size;
  //   let lowerRightCorner = [...upperRightCorner];
  //   lowerRightCorner[0] += this.template.height

  // };

  this.render = () => {
    for (let x = 0; x < this.template.length; x++) {
      let cursor = new Vector([0, 0]);
      cursor.add(this.position);
      cursor.add(new Vector([this.pixelSize.height * x, 0]));
      for (let y = 0; y < this.template[x].length; y++) {
        this.drawRect(
          cursor,
          this.pixelSize.height,
          this.pixelSize.width,
          this.template[x][y]
        );
        cursor.add(new Vector([0, this.pixelSize.width]));
      }
    }
  };
}
