'use strict';

function homePage() {

	this.$remindMeEmailForm = $('#remind_email_form');

	this.remindMeEmailForm = {
		label: this.$remindMeEmailForm.$('label'),
		input: this.$remindMeEmailForm.$('#remind_email_input'),
		submit: this.$remindMeEmailForm.$('#remind_email_submit')
	}

}

module.exports.homePage = homePage;