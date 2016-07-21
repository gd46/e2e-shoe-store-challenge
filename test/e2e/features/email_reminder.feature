Feature: email_reminder.feaure

	Scenario: There should be an area to submit email address from the home page
		When I visit the shoe store website
		Then I should be able to see the remind me email form


	Scenario: There should be an area to submit email address from a month display
		When I visit the shoe store website
		When I navigate to "January"
		Then I should be able to see the remind me email form
