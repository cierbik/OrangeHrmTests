import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../../../support/pages/LoginPage";
import tiers from "../../../fixtures/tiers.json";
import user from "../../../fixtures/user.json";

Given("Visit Login Page", () => {
  LoginPage.visit(tiers["h-tier"]);
});

When("Login with correct credentials", () => {
  LoginPage.login(user.username, user.password);
});

When("Login with incorrect credentials", () => {
  LoginPage.login(user.invalidUsername, user.invalidPassword);
});
When("Login with empty credentials", () => {
  LoginPage.loginWithEmptyCredentials();
});
Then("User should be logged in", () => {
  LoginPage.verifyLoginSuccess();
});
Then("User should not be logged in", () => {
  LoginPage.verifyLoginFailure();
});
Then("User should not be logged in with empty credentials", () => {
  LoginPage.verifyLoginFailureWithEmptyCredetnials();
});
When("User process to forgot password", () => {
  LoginPage.processForgotPassword(user.username);
});
Then("User should see forgot password warning", () => {
  LoginPage.getForgotPasswordWarning();
});
