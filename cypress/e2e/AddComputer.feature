Feature: Create Computer Records

    As a user, I should be able to create a computer record

    Background: Open the computer creation page
        Given I click the add computer button

    Scenario: A user should be able to add a computer successfully with all details
        When I fill in the computer name
        And I fill in the introduction year
        And I fill in the discontinued year
        And I pick the company name
        And I click the create computer button
        Then I should see the success message

    Scenario: A user should be able to add a computer successfully with only the computer name
        * I fill in the computer name
        * I click the create computer button
        * I should see the success message

    Scenario: A user should not be able to add a computer successfully without the computer name
        * I fill in the introduction year
        * I fill in the discontinued year
        * I pick the company name
        * I click the create computer button
        Then I should see and error message