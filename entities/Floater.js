// Floaters are not affected by physics, instead accepting a position function/constant, template function/constant and pixelsize
function Floater(config) {
  this.config = config;
  this.position = this.config.position;
  this.pixelSize = this.config.pixelSize;
  this.template =
    this.config.template || new Template([[color(255, 255, 255, 0)]]);

  this.render = () => {
    let template = isFunction(this.template)
      ? this.template(this)
      : this.template;
    if (this.checkTemplateOnscreen(template)) {
      for (let x = 0; x < template.length; x++) {
        let cursor = new Vector([0, 0]);
        cursor.add(
          isFunction(this.position) ? this.position(this) : this.position
        );
        cursor.add(new Vector([this.pixelSize.height * x, 0]));
        for (let y = 0; y < template.getRow(x).length; y++) {
          let color = template.get(x, y);
          this.drawRect(
            cursor,
            this.pixelSize.height,
            this.pixelSize.width,
            isFunction(color) ? color(this) : color
          );
          cursor.add(new Vector([0, this.pixelSize.width]));
        }
      }
    }
  };
}
