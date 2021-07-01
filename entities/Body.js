function Body( config ) {
	this.config = config;
	// Array 2-D
	this.size = this.config.size;
	this.mass = this.config.mass;
	this.color = this.config.color;
	this.position = this.config.initialPosition;
	this.velocity = this.config.initialVelocity;
	this.acceleration = new Vector([0, 0]);

	// template, what the object looks like, color, etc
	// initial position/velocity
	// acceleration determined by forces

	this.update = () => {
		let netForce = new Vector([0, 0]);
		if (this.config.gravity) {
			netForce.add(GRAVITY);
		}
		if (this.config.wind) {
			netForce.add(WIND);
		}
		this.acceleration = netForce;
		this.acceleration.scale(1 / this.mass);
		this.velocity.add(this.acceleration);
		this.position.add(this.velocity);
	}

	this.render = () => {
		this.update();
		let position = this.position.getComponents();
		let index = get1DIndex(position[0], position[1], WIDTH);

		fill(this.color);
		noStroke();
		rect(position[0], position[1], this.size.length, this.size.width);
	}

}