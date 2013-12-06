'use strict';
/* globals createjs */

function Triangle(size, color) {

	this.size = size || 10;
	this.color = color || '#fff';

	// Could we extend shape?
	var sprite = new createjs.Shape();
	sprite.graphics
		.s(this.color)
		.mt(this.size / 2 * -1, this.size / 2 * -1)
		.lt(this.size / 2 * -1, this.size / 2)
		.lt(this.size / 2, 0)
		.lt(this.size / 2 * -1, this.size / 2 * -1);

	return sprite;
}