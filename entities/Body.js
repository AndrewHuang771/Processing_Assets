// A shape affected by physics

function Body( config ) {
	this.config = config;
	// Array with two elements, length and width
	this.size = this.config.size;
	this.mass = this.config.mass;
	this.color = this.config.color;
	// 2D Array showing body layout and color for each rect
	this.template = this.config.template;
	// The top-left corner of the body
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

	this.drawRect = ( cursor, length, width, color ) => {
		let position = cursor.getComponents();
		fill(color);
		noStroke();
		rect(position[0], position[1], length, width);
	}

	this.renderTemplate = () => {
		for ( let x = 0; x < this.template.length; x ++ ) {
			let cursor = new Vector([0, 0]);
			cursor.add(this.position);
			cursor.add(new Vector([this.size.length * x, 0]));
			for ( let y = 0; y < this.template[x].length; y ++ ) {
				this.drawRect(cursor, this.size.length, this.size.width, this.template[x][y]);
				cursor.add(new Vector([0, this.size.width]));
			}
		}
	}

	this.render = () => {
		if ( this.template ) {
			this.renderTemplate();
		} else {
			this.drawRect(this.position, this.size.length, this.size.width, this.color);
		}
	}

}