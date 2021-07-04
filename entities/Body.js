// A shape affected by physics

function Body(config) {
  this.config = config;
  // Array with two elements, height and width
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

  this.update = () => {
    this.updatePosition();
  };

  this.drawRect = (cursor, height, width, color) => {
    let position = cursor.getComponents();
    fill(color);
    noStroke();
    rect(position[0], position[1], height, width);
  };

  this.checkPointOnScreen = (position) => {
    return !(
      position[0] < 0 ||
      position[0] > HEIGHT ||
      position[1] < 0 ||
      position[1] > WIDTH
    );
  };

  this.checkTemplateOnscreen = () => {
    let upperLeftCorner = this.position.getComponents();
    let upperRightCorner = [...upperLeftCorner];
    upperRightCorner[1] += this.template.getLongestRow() * this.size;
    let lowerRightCorner = [...upperRightCorner];
    lowerRightCorner[0] += this.template.height * this.size;
    let lowerLeftCorner = [...upperLeftCorner];
    lowerLeftCorner[0] += this.template.height * this.size;

    return (
      this.checkPointOnScreen(upperLeftCorner) ||
      this.checkPointOnScreen(upperRightCorner) ||
      this.checkPointOnScreen(lowerLeftCorner) ||
      this.checkPointOnScreen(lowerRightCorner)
    );
  };

  this.render = () => {
    if (this.checkTemplateOnscreen()) {
      for (let x = 0; x < this.template.length; x++) {
        let cursor = new Vector([0, 0]);
        cursor.add(this.position);
        cursor.add(new Vector([this.pixelSize.height * x, 0]));
        for (let y = 0; y < this.template.getRow(x).length; y++) {
          let color = this.template.get(x, y);
          this.drawRect(
            cursor,
            this.pixelSize.height,
            this.pixelSize.width,
            isFunction(color)
              ? color(
                  this.position.getComponents()[0] + x * this.pixelSize.height,
                  this.position.getComponents()[1] + y * this.pixelSize.width
                )
              : color
          );
          cursor.add(new Vector([0, this.pixelSize.width]));
        }
      }
    }
  };
}
