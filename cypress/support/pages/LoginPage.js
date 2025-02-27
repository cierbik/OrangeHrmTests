class LoginPage {
  static visit(page) {
    return cy.visit(page);
  }

  static getUsernameField() {
    return cy.get('input[name="username"]'); // Dodałem `return`, aby uzyskać obiekt z `cy.get`
  }

  static getPasswordField() {
    return cy.get('input[name="password"]');
  }

  static getLoginButton() {
    return cy.get('button[type="submit"]');
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
    cy.get(":nth-child(2) > .oxd-input-group > .oxd-text").should(
      "contain.text",
      "Required"
    );
    cy.get(":nth-child(3) > .oxd-input-group > .oxd-text").should(
      "contain.text",
      "Required"
    );
  }
}

export default LoginPage; // Eksportujemy klasę, a nie jej instancję
