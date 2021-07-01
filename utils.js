// Global Variables, in vector form
var PIXELDENSITY = 1;
var FRAMERATE = 10;
var GRAVITY = new Vector([0, 1]);
var WIND = new Vector([1, 0]);
var LENGTH = 0;
var WIDTH = 0;

// Accepts an array of components ex: [1, 0, 2, 3]
function Vector(components) {
	this.components = components;

	this.print = () => {
		console.log(this.components);
	}

	this.getComponents = () => {
		return this.components;
	}

	this.add = (addee) => {
		if ( this.components.length !== addee.getComponents().length ) {
			console.error("Addition requires two vectors of equal length");
			return undefined;
		}
		for ( x = 0; x < this.components.length; x ++ ) {
			this.components[x] += addee.getComponents()[x];
		}
	}

	this.scale = (scalee) => {
		for ( x = 0; x < this.components.length; x ++ ) {
			this.components[x] *= scalee;
		}
	}

	this.getMagnitude = () => {
		let sum = 0;
		for (x = 0; x < this.components.length; x ++) {
			sum += this.components[x]*this.components[x];
		}
		return Math.sqrt(sum);
	}

	this.getDotProduct = (callee) => {
		if ( this.components.length !== callee.getComponents().length ) {
			console.error("Dot product requires two vectors of equal length");
			return undefined;
		}
		let sum = 0;
		for ( x = 0; x < this.components.length; x ++ ) {
			sum += this.components[x]*callee.getComponents()[x];
		}
		return sum;
	}

}

/* Grid system

  y --> width
x * * * * *
  * * * * *
  * * *[*] *

The selected coordinate is (2, 3), or 14
Coordinates increase in the following pattern

coords: (0, 0) (0, 1) (0, 2) ... (1, 0) (1, 1) ...
index:     0      1      2   ...  width + 0, width + 1 ...

*/

// Given an index in the pixelArray, return the x and y locations on the grid
function get2DIndices(idx, width) {
	let x = Math.floor(idx / width);
	let y = idx - x*width;
	return [x, y];
}

// Given an x and y location on the grid, return the pixelArray index
function get1DIndex(x, y, width) {
	let untrimmedResult = Math.floor(x*width + y)*PIXELDENSITY*4;
	return untrimmedResult;
}

function isInBounds(x, y) {
	if (typeof y === 'undefined') {
		return x >= 0 && x < LENGTH*WIDTH*PIXELDENSITY*4;
	}
	return get1DIndex(x, y, WIDTH) >= 0 && get1DIndex(x, y, WIDTH) < LENGTH*WIDTH*PIXELDENSITY*4;
}