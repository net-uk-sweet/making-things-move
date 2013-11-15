'use strict';
/* globals createjs */

function SpaceShip(color, size) {

	this.color = color || '#fff';
	this.size = size || 10;

	// Could we extend shape?
	this.sprite = new createjs.Shape();
	this.sprite.graphics
		.s(this.color)
		.mt(this.size / 2 * -1, this.size / 2 * -1)
		.lt(this.size / 2 * -1, this.size / 2)
		.lt(this.size / 2, 0)
		.lt(this.size / 2 * -1, this.size / 2 * -1);

	return this.sprite;
}