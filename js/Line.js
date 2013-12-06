'use strict';
/* globals createjs */

function Line(length, vertical, color) {

	this.length = length || 400;
	this.vertical = vertical || false;
	this.color = color || '#fff';

	// Could we extend shape?
	var sprite = new createjs.Shape();
	sprite.graphics
		.mt(0, 0)
		.s(this.color)
		.lt(this.length * !this.vertical, this.length * this.vertical);

	return sprite;
}