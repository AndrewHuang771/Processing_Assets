function PerlinField(size) {
  this.size = size;
  this.noise = noise();

  this.createNoise = () => {
    for (let x = 0; x < this.size.height; x++) {
      for (let y = 0; y < this.size.width; y++) {}
    }
  };
}
