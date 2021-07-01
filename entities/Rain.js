function Rain(coords_spawn, coords_despawn, color, speed, direction, probability, active) {
	// coords_spawn: [top_left_x, top_left_y, bottom_right_x, bottom_right_y]
	this.coords_spawn = coords_spawn;
	// By default, despawn when off screen
	this.coords_despawn = coords_despawn;
	this.color = color;
	this.speed = speed;
	this.direction = direction;
	this.probability = probabililty;
	this.active = active;
	this.droplets = [];

	this.print = () => {
		console.log(this.coords_spawn, this.color, this.speed, this.direction);
	}

	this.render = () => {
		if (this.active) {
			// Randomly generate droplets in spawn area
			for ( let i = coords_spawn[0]; i < coords_spawn[2]; i ++ ) {
				for ( let j = coords_spawn[1]; j < coords_spawn[3]; j ++ ) {
					if ( Math.random() <= this.probability ) {
						let config = {
							
						}
						let droplet = new Body( config );
						droplets.push(droplet);
					}
				}
			}
		}
	}
}