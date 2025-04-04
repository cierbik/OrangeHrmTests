class LoginPage {
  static visit(page) {
    return cy.visit(page);
  }

  static getUsernameField() {
    return cy.get('input[name="username"]');
  }

  static getPasswordField() {
    return cy.get('input[name="password"]');
  }

  static getLoginButton() {
    return cy.get('button[type="submit"]');
  }
  static getForgotPasswordButton() {
    return cy.get(".orangehrm-login-forgot > .oxd-text");
  }
  static getForgotPasswordWarning() {
    return cy
      .get(".oxd-text--h6")
      .should("contain.text", "Reset Password link sent successfully");
  }
  static verifyLoginSuccess() {
    return cy
      .url()
      .should(
        "eq",
        "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"
      );
  }
  static verifyLoginFailure() {
    return cy.get(".oxd-alert").should("contain.text", "Invalid credentials");
  }
  static getPasswordRequiredError() {
    cy.get(
      ":nth-child(2) > .oxd-input-group > .oxd-text, :nth-child(3) > .oxd-input-group > .oxd-text"
    ).should("contain.text", "Required");
  }

  static login(username, password) {
    this.getUsernameField().type(username);
    this.getPasswordField().type(password);
    this.getLoginButton().click();
  }
  static loginWithEmptyCredentials() {
    this.getUsernameField().clear();
    this.getPasswordField().clear();
    this.getLoginButton().click();
  }
  static verifyLoginFailureWithEmptyCredetnials() {
    this.getPasswordRequiredError();
  }
  static processForgotPassword(username) {
    this.getForgotPasswordButton().click();
    this.getUsernameField().type(username);
    this.getLoginButton().click();
  }
}

export default LoginPage; // Eksportujemy klasę, a nie jej instancję
