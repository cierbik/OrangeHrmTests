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
}
export default adminPage;
