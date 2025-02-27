Feature: Login varaints
Scenario: Login with correct credentials
  Given Visit Login Page
  When Login with correct credentials
  Then User should be logged in

Scenario: Login with incorrect credentials
  Given Visit Login Page
  When Login with incorrect credentials
  Then User should not be logged in

Scenario: Login with empty credentials
  Given Visit Login Page
  When Login with empty credentials
  Then User should not be logged in with empty credentials