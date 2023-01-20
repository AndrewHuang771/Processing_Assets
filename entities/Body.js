// A shape affected by physics

function Body(config) {
	this.config = config;
	// Array with two elements, height and width
	this.pixelSize = this.config.pixelSize || 15;
	this.mass = this.config.mass || 1;
	// 2D Array showing body layout and color for each rect
	this.template = this.config.template || new Template([
		[[1, 1, 1, 1]]
	]);
	this.rotation = 0;
	this.forces = this.config.forces ? [...this.config.forces] : [];
	// The top-left corner of the body
	this.position = this.config.initialPosition ? this.config.initialPosition.copy() : new Vector([0, 0]);
	this.velocity = this.config.initialVelocity ? this.config.initialVelocity.copy() : new Vector([0, 0]);
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
				let force = this.forces[i];
				netForce.add(isFunction(force) ? force(this) : force);
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

	this.render = (triangleVertices, canvasDim) => {
		let template = isFunction(this.template)
			? this.template(this)
			: this.template;

		for (let x = 0; x < template.length; x++) {
			for (let y = 0; y < template.getRow(x).length; y++) {
				let color = template.get(x, y);
				let cursor = new Vector([0, 0]);
				cursor.add(this.position);
				cursor.add(new Vector([this.pixelSize.height * y / 2, 0]));
				cursor.add(new Vector([0, this.pixelSize.width * x * -1 / 2]));
				drawRect(
					cursor,
					{ height: this.pixelSize.height, width: this.pixelSize.width },
					isFunction(color) ? color(this) : color,
					triangleVertices,
					canvasDim
				);
			}
		}
	};
}
