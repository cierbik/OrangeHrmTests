import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
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
  adminPage.geUserNameinput().type(user.username);
});
And("I click the submit button", () => {
  adminPage.getSumbitButton().click();
});
Then("I should see the user details", () => {
  adminPage.userFound().should("be.visible").and("contain.text", user.username);
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
