'use strict';

var hooks = function () {

	this.Before(function(scenario) {
		browser.ignoreSynchronization = true;
	});

}

module.exports = hooks;