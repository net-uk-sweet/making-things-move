'use strict';
/* globals createjs */

function Circle(radius, color) {

	radius = radius || 10;
	color = color || '#fff';

	// Could we extend shape?
	var sprite = new createjs.Shape();
	sprite.graphics.s(color).dc(0, 0, radius);

	// This seems a pretty unsatisfactory way of doing this
	// Easel has a getBounds method which doesn't seem to work
	sprite.radius = radius;

	return sprite;
}