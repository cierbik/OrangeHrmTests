class adminPage {
  static getAdmintab() {
    return cy.get(":nth-child(1) > .oxd-main-menu-item");
  }
  static geUserNameinput() {
    return cy.get(":nth-child(2) > .oxd-input");
  }
  static getSumbitButton() {
    return cy.get(".oxd-form-actions > .oxd-button--secondary");
  }
  static adminTabVisible() {
    return cy.get(".oxd-topbar-header-title").should("be.visible");
  }
  static userFound() {
    return cy.get(".oxd-table-card > .oxd-table-row > :nth-child(2) > div");
  }
  static addUserButton() {
    return cy.get(".orangehrm-header-container > .oxd-button");
  }
  static userRole() {
    return cy.get(
      ":nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text"
    );
  }
  static chooseUserRoleAdmin() {
    return cy.get(".oxd-select-dropdown > :nth-child(2)");
  }
  static userStatus() {
    return cy.get(
      ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text"
    );
  }
  static chooseUserStatus() {
    return cy.get(".oxd-select-dropdown > :nth-child(3)");
  }
  static setEmployeeName() {
    return cy.get(".oxd-autocomplete-text-input > input");
  }
  static chooseEmployeeName() {
    cy.wait(2000);
    return cy.get(".oxd-autocomplete-dropdown > :nth-child(1)");
  }
  static setUsername() {
    return cy.get(
      ":nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input"
    );
  }
  static setPassword() {
    return cy.get(
      ".user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input"
    );
  }
  static confirmPassword() {
    return cy.get(
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    );
  }
  static saveButton() {
    return cy.get(".oxd-button--secondary");
  }
  static userCreated() {
    return cy.get(".oxd-text--toast-title");
  }
}
export default adminPage;
