Feature: CURA Healthcare Multiple Tests

Scenario: Launch application
Given the user launches the CURA web app

Scenario: Click Make Appointment
Given the user launches the CURA web app
When the user clicks on Make Appointment button

Scenario: Verify login page
Given the user launches the CURA web app
When the user clicks on Make Appointment button
Then the login page should be displayed

Scenario: Verify title
Given the user launches the CURA web app
Then the title should be CURA Healthcare Service

Scenario: Verify Make Appointment visible
Given the user launches the CURA web app
Then Make Appointment button should be visible

Scenario: Verify login URL
Given the user launches the CURA web app
When the user clicks on Make Appointment button
Then the URL should contain login

Scenario: Verify username field
Given the user launches the CURA web app
When the user clicks on Make Appointment button
Then username field should be visible

Scenario: Verify password field
Given the user launches the CURA web app
When the user clicks on Make Appointment button
Then password field should be visible

Scenario: Verify login button
Given the user launches the CURA web app
When the user clicks on Make Appointment button
Then login button should be visible

Scenario: Verify login heading
Given the user launches the CURA web app
When the user clicks on Make Appointment button
Then login page heading should be displayed