// Accepts an array of components ex: [1, 0, 2, 3]
function Vector(components) {
  this.components = [...components];

  this.print = () => {
    console.log(this.components);
  };

  this.copy = () => {
    return new Vector(this.components);
  };

  this.getComponents = () => {
    return this.components;
  };

  this.setComponents = (components) => {
    this.components = [...components];
  };

  this.add = (addee) => {
    if (this.components.length !== addee.getComponents().length) {
      console.error("Addition requires two vectors of equal length");
      return undefined;
    }
    for (x = 0; x < this.components.length; x++) {
      this.components[x] += addee.getComponents()[x];
    }
  };

  this.scale = (scalee) => {
    for (x = 0; x < this.components.length; x++) {
      this.components[x] *= scalee;
    }
  };

  this.getMagnitude = () => {
    let sum = 0;
    for (x = 0; x < this.components.length; x++) {
      sum += this.components[x] * this.components[x];
    }
    return Math.sqrt(sum);
  };

  this.getDotProduct = (callee) => {
    if (this.components.length !== callee.getComponents().length) {
      console.error("Dot product requires two vectors of equal length");
      return undefined;
    }
    let sum = 0;
    for (x = 0; x < this.components.length; x++) {
      sum += this.components[x] * callee.getComponents()[x];
    }
    return sum;
  };
}
