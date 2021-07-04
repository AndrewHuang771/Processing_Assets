// size is an object and position is a vector
// initFunction must return a copy of a Vector representing the field strength at the given (x, y) coordinates
function VectorField(
  size,
  position,
  granularity = 10,
  initFunction = undefined
) {
  // Top left corner of the vectorField
  this.size = size;
  this.position = position.copy();
  this.grid = [];
  this.granularity = granularity;
  this.scalingFactor = 1;
  this.initFunction = initFunction;

  for (let x = 0; x < this.size.height; x++) {
    this.grid.push([]);
    for (let y = 0; y < this.size.width; y++) {
      if (this.initFunction) {
        this.grid[x].push(this.initFunction(x, y));
      } else {
        this.grid[x].push(new Vector([0, 0]));
      }
    }
  }

  // Scale all the Vectors in the VectorField
  this.scale = (scalee) => {
    this.scale *= scalee;
  };

  this.setFunction = (initFunction) => {
    this.initFunction = initFunction;
  };

  // To save performance, it's not necessary to update the field every tick
  this.update = () => {
    for (let x = 0; x < this.size.height; x++) {
      for (let y = 0; y < this.size.width; y++) {
        if (this.initFunction) {
          this.grid[x] = this.initFunction(x, y);
        } else {
          console.log("Unclear how to update field. No function provided.");
        }
      }
    }
  };

  // Returns the value of the field at position
  this.getFieldValue = (positionVector) => {
    let position = positionVector.getComponents();
    if (
      position[0] < this.position.getComponents()[0] ||
      position[0] > this.position.getComponents()[0] + this.size.width ||
      position[1] < this.position.getComponents()[1] ||
      position[1] > this.position.getComponents()[1] + this.size.height
    ) {
      return undefined;
    }
    return this.grid[position[0]][position[1]] * this.scale;
  };
}
