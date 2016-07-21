'use strict';

function shoeDisplay() {

	this.title = $('.title');
	this.blurb = $$('.shoe_result_value shoe_description');
	this.image = $$('.shoe_image');
	this.price = $$('.shoe_price');
}

module.exports.shoeDisplay = shoeDisplay;