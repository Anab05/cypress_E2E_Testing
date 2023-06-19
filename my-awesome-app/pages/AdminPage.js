export class AdminPage {
  constructor() {}

  getCitiesButton() {
    return cy.xpath("//*[contains(@class, 'btnAdminCities')]");
  }

  getUsersButton() {
    return cy.xpath("//*[contains(@class, 'btnAdminUsers')]");
  }

  getNewItemButton() {
    return cy.xpath("//*[contains(@class, 'btnNewItem')]");
  }

  getPopUpNewItem() {
    return cy.xpath("//input[@name='name']");
  }

  getProfileButton() {
    return cy.xpath("//*[contains(@class, 'btnProfile')]");
  }

  getInputNameCity() {
    return cy.xpath("//input[@name='name']");
  }

  getSaveButton() {
    return cy.xpath("//*[contains(@class, 'btnSave')]");
  }

  getMessageSavedCity() {
    return cy.xpath("//*[contains(@class, 'success')]");
  }

  getSearchCityInput() {
    return cy.xpath("//input[@id='search']");
  }

  getPagination() {
    return cy.xpath("//*[contains(@class, 'v-data-footer__pagination')]");
  }

  getEditButton() {
    return cy.xpath("//button[@id='edit']");
  }

  getTable() {
    return cy.xpath("//tbody/tr");
  }

  getTableColumnName() {
    return cy.xpath("//tbody/tr[1]/td[2]");
  }

  getDeleteBtnFirstRow() {
    return cy.xpath("//tbody/tr[1]/td[1]/div/button[2]");
  }

  getDeleteMessage() {
    return cy.get(".v-card > .v-sheet > .v-toolbar__content");
  }

  getDeleteButton() {
    return cy.get(".red--text > .v-btn__content");
  }

  getMessageSuccessful() {
    return cy.get(
      ":nth-child(3) > .layout > .flex > .v-snack > .v-snack__wrapper"
    );
  }

  getDropDownRoles() {
    return cy.get(".layout > :nth-child(5)");
  }

  getDropDownCities() {
    return cy.get(".layout > :nth-child(6)");
  }

  getListOfRoles() {
    return cy.get(".v-select-list");
  }

  getListOfCities() {
    return cy.xpath("//*[contains(@class, 'menuable__content__active')]");
  }
}
