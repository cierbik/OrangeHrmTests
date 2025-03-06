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
      ":nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon"
    );
  }
  static chooseUserRoleAdmin() {
    return cy.get(".oxd-select-dropdown > :nth-child(2)");
  }
}
export default adminPage;
