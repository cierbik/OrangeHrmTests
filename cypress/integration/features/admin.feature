Feature: Admin Page
    Background:
    Given Visit Login Page
    When Login with correct credentials
    Given I open the admin tab
    Then I should see the admin tab

    Scenario: Search for a user
    When I enter the username
    And I click the submit button
    Then I should see the user details
@focus 
    Scenario: Add a new user
    Then I should see the add user button
    When I click the add user button
    Then I choose the user role
    And I choose the user status
    Then I set the employee name
    And I choose the employee name
    Then I set the username
    Then I set the password
    And I confirm the password
    When I click the sumbit button success message should be displayed
    
    
        