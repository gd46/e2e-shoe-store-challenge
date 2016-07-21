'use strict';

var homeStepsDefinitionsWrapper = function () {

	var homePage = pages.pageFactory(pages.homePage);

	this.Then(/^I should be able to see the remind me email form$/, function () {
		return browser.wait(EC.visibilityOf(homePage.$remindMeEmailForm),
			8000, 'Remind me email form is not displayed');
	});

}

module.exports = homeStepsDefinitionsWrapper;