Feature: Admin Page
    Background:
    Given Visit Login Page
    When Login with correct credentials

    Scenario: Open Admin Page
    Given I open the admin tab
    Then I should see the admin tab
    When I enter the username
    And I click the submit button

        