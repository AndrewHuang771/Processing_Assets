function Layer(id, main) {
  this.id = id;
  this.main = main;

  this.instance = new p5(this.main, this.id);
}
