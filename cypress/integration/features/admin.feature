Feature: Admin Page
    Background:
    Given Visit Login Page
    When Login with correct credentials
    Given I open the admin tab
    Then I should see the admin tab


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

    Scenario: Search for a user and delete
    When I enter the username
    And I click the submit button
    Then I should see the user details  
    And I click the delete button  
    Then I confirm the delete action
    When I click the sumbit button success message should be displayed
    
    Scenario: Check if job titles list is avaialble
    When I click the job title list
    Then I choose the job title
    And Records found should be displayed

    Scenario: Create a new job title
    When I click the job title list
    Then I choose the job title
    And I click the add job title button
    Then I set the job title
    And I click the save button
    Then Success message should be displayed
@focus 
    Scenario: Delete a job title
    When I click the job title list
    Then I choose the job title
    And I select the job title
    Then I click the delete job title button
    And I confirm the delete job title action
    Then Success message should be displayedgi