'use strict';

var shoeDisplayStepsDefinitionWrapper = function () {

	var nav = pages.pageFactory(pages.navigationPage),
		shoeDisplay = pages.pageFactory(pages.shoeDisplay);

	this.When(/^I visit the shoe store website$/, function () {
		browser.get(browser.baseUrl);
		return browser.wait(EC.visibilityOf(nav.homeBtn), 
			30000, 'Failed to load the show store website');
	});

	this.When(/^I navigate to "([^*]*)"$/, function (month) {
		nav.navigateToMonth(month);
		return browser.wait(EC.visibilityOf(shoeDisplay.title), 
			8000, 'Month title is not displayed');
	});

	this.Then(/^I should see a small blurb of each shoe$/, function () {
		return expect(shoeDisplay.blurb.isDisplayed(), 
			'Each of the shoes did not have a blurb').to.eventually.not.contain(false);
	});

	this.Then(/^I should see a product image of each shoe$/, function () {
		return expect(shoeDisplay.image.isDisplayed(), 
			'Each of the shoes did not have a product image').to.eventually.not.contain(false);
	});

	this.Then(/^I should see a product price of each shoe$/, function () {
		return expect(shoeDisplay.price.isDisplayed(), 
			'Each of the shoes did not have a produce price').to.eventually.not.contain(false);
	});

}

module.exports = shoeDisplayStepsDefinitionWrapper;