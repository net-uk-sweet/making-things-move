'use strict';
/* globals createjs */

function Circle(radius, color) {

	this.radius = radius || 10;
	this.color = color || '#fff';

	// Could we extend shape?
	var sprite = new createjs.Shape();
	sprite.graphics.s(this.color).dc(0, 0, this.radius);

	return sprite;
}