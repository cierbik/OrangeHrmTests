import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../../../support/pages/LoginPage";
import tiers from "../../../fixtures/tiers.json";
import user from "../../../fixtures/user.json";
import adminPage from "../../../support/pages/adminPage";
Given("Visit Login Page", () => {
  LoginPage.visit(tiers["h-tier"]);
});

When("Login with correct credentials", () => {
  LoginPage.login(user.username, user.password);
});
Given("I open the admin tab", () => {
  adminPage.getAdmintab().click();
});
Then("I should see the admin tab", () => {
  adminPage.adminTabVisible();
});
When("I enter the username", () => {
  adminPage.geUserNameinput().type(user.testUsername);
});
And("I click the submit button", () => {
  adminPage.getSumbitButton().click();
});
Then("I should see the user details", () => {
  adminPage
    .userFound()
    .should("be.visible")
    .and("contain.text", user.testUsername);
});
Then("I should see the add user button", () => {
  adminPage.addUserButton().should("be.visible");
});
When("I click the add user button", () => {
  adminPage.addUserButton().click();
});
Then("I choose the user role", () => {
  adminPage.userRole().click();
  adminPage.chooseUserRoleAdmin().click();
});
And("I choose the user status", () => {
  adminPage.userStatus().click();
  adminPage.chooseUserStatus().click();
});
Then("I set the employee name", () => {
  adminPage.setEmployeeName().type(user.employeeName);
});
And("I choose the employee name", () => {
  adminPage.chooseEmployeeName().click();
});
Then("I set the username", () => {
  adminPage.setUsername().type(user.testUsername);
});
Then("I set the password", () => {
  adminPage.setPassword().type(user.password);
});
And("I confirm the password", () => {
  adminPage.confirmPassword().type(user.password);
});
When("I click the sumbit button success message should be displayed", () => {
  adminPage.getSumbitButton().click();
  adminPage.userCreated().should("be.visible").and("contain.text", "Success");
});
And("I click the delete button", () => {
  adminPage.userDeleteButton().click();
});
Then("I confirm the delete action", () => {
  adminPage.userDeleteConfirmationButton().click();
});
When("I click the job title list", () => {
  adminPage.jobButton().click();
});
Then("I choose the job title", () => {
  adminPage.selectJobTitle().click();
});
And("Records found should be displayed", () => {
  adminPage.recordFound().should("be.visible");
});
And("I click the add job title button", () => {
  adminPage.jobTitleButton().click();
});
Then("I set the job title", () => {
  adminPage.jobTitleInput().type(user.jobTitle);
});
And("I click the save button", () => {
  adminPage.jobTitleSaveButton().click();
});
Then("Success message should be displayed", () => {
  adminPage.userCreated().should("be.visible").and("contain.text", "Success");
});
