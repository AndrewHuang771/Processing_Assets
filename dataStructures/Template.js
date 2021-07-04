function Template(template) {
  // Deep copy the template
  this.copyTemplate = (template) => {
    let newTemplate = [];
    for (let i = 0; i < template.length; i++) {
      newTemplate.push([]);
      for (let j = 0; j < template[i].length; j++) {
        newTemplate[i].push(template[i][j]);
      }
    }
    return newTemplate;
  };

  this.template = template;

  this.length = this.template.length;

  this.get = (x, y) => {
    return this.template[x][y];
  };

  this.getRow = (x) => {
    return this.template[x];
  };

  this.copy = () => {
    return new Template(this.copyTemplate(this.template));
  };

  this.getTemplate = () => {
    return this.template;
  };

  this.setTemplate = (template) => {
    this.template = this.copyTemplate(template);
  };

  // Can cache this to increase performance
  this.getLongestRow = () => {
    let maxLength = 0;
    for (let i = 0; i < this.template.length; i++) {
      maxLength = max(maxLength, this.template[i].length);
    }
    return maxLength;
  };
}
