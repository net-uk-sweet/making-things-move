'use strict';
/* globals createjs */

var Scene = function() {

	function handleTick() {
		this.update();
	}

	return {

		init: function(callback) {
			this.stage = new createjs.Stage('easel-canvas');
			createjs.Ticker.addEventListener('tick',
				(callback || handleTick).bind(this));
		},

		update: function() {
			this.stage.update();
		},

		addChild: function(child) {
			this.stage.addChild(child);
			return this;
		}
	};

};