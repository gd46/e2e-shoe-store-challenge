'use strict';

function navigationPage() {

	this.homeBtn = $('.navbar-brand');

	this.navigateToMonth = function (month) {
		return element(by.linkText(month)).click();
	};

};

module.exports.navigationPage = navigationPage;