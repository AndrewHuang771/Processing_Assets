function Star(config) {
    this.config = config;

    this.frames = config.frames ? config.frames : starFrames;
    // How long to wait between animation frames
    this.delay = this.config.delay || 150;
    this.state = 0;
    this.lastChange = Date.now();
    this.active = false;
    this.sparkleChance = 0.05;

    this.config.pixelSize = {
        height: 5,
        width: 5,
    };

    // Change state once every n miliseconds
    this.config.template = () => {
        if (this.state % starFrames.length == 0) {
            if ( !this.active && Math.random() > 1 - this.sparkleChance ) {
                this.active = true;
            } else {
                this.active = false;
            }
        }

        let elapsedTime = Date.now() - this.lastChange;
        if (elapsedTime > this.delay && this.active) {
            this.state += 1;
            this.lastChange = Date.now();
        }
        return this.frames[this.state % starFrames.length];
    };

    this.body = new Body(this.config);

    this.render = (triangleVertices, canvasDim) => {
        this.body.render(triangleVertices, canvasDim);
    };

    this.update = () => {
        this.body.update();
    };
}
