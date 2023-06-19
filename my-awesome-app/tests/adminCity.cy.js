/// <reference types="cypress" />

import { bot } from "../pages/Bot";

describe("Admin cities test", () => {
  beforeEach(() => {
    cy.loginAsAdmin();
    bot.adminPage().getProfileButton().should("be.visible");
  });

  it("Visits the admin cities page and list cities", () => {
    cy.visit("/profile");
    bot.navigationPage().getAdminButton().click();
    bot.adminPage().getCitiesButton().click();
    cy.url().should("contains", "/admin/cities");
  });

  it("Checks input types for create/edit new city", () => {
    cy.visit("/admin/cities");
    bot.navigationPage().getAdminButton().click();
    bot.adminPage().getCitiesButton().click();
    bot.adminPage().getNewItemButton().click();
    bot.adminPage().getPopUpNewItem().should("be.visible");
    bot
      .adminPage()
      .getPopUpNewItem()
      .invoke("attr", "type")
      .should("equal", "text");
  });

  it("Create new city", () => {
    cy.visit("/admin/cities");
    bot.navigationPage().getAdminButton().click();
    bot.adminPage().getCitiesButton().click();
    bot.adminPage().getNewItemButton().click();
    bot.adminPage().getPopUpNewItem().should("be.visible");
    bot.adminPage().getInputNameCity().type("Ana Brankovic's city");
    bot.adminPage().getSaveButton().click();
    bot.adminPage().getMessageSavedCity().should("be.visible");
    bot
      .adminPage()
      .getMessageSavedCity()
      .should("contain.text", "Saved successfully");
  });

  it("Edit city", () => {
    cy.visit("/admin/cities");
    bot.navigationPage().getAdminButton().click();
    bot.adminPage().getCitiesButton().click();
    bot.adminPage().getSearchCityInput().type("Ana Brankovic's city");
    bot.adminPage().getTable().should("have.length", 1);
    bot.adminPage().getEditButton().click();
    bot
      .adminPage()
      .getInputNameCity()
      .clear()
      .type("Ana Brankovic's city Edited");
    bot.adminPage().getSaveButton().click();
    bot.adminPage().getMessageSavedCity().should("be.visible");
    bot
      .adminPage()
      .getMessageSavedCity()
      .should("contain.text", "Saved successfully");
  });

  it("Search city", () => {
    cy.visit("/admin/cities");
    bot.navigationPage().getAdminButton().click();
    bot.adminPage().getCitiesButton().click();
    bot.adminPage().getSearchCityInput().type("Ana Brankovic's city Edited");
    bot.adminPage().getTable().should("have.length", 1);
    bot
      .adminPage()
      .getTableColumnName()
      .should("contain.text", "Ana Brankovic's city Edited");
  });

  it("Delete city", () => {
    cy.visit("/admin/cities");
    bot.navigationPage().getAdminButton().click();
    bot.adminPage().getCitiesButton().click();
    bot.adminPage().getSearchCityInput().type("Ana Brankovic's city Edited");
    bot.adminPage().getTable().should("have.length", 1);
    bot
      .adminPage()
      .getTableColumnName()
      .should("contain.text", "Ana Brankovic's city Edited");
    bot.adminPage().getDeleteBtnFirstRow().click();
    bot.adminPage().getDeleteMessage().should('be.visible');
    bot.adminPage().getDeleteButton().click();
    bot.adminPage().getMessageSuccessful().should('be.visible');
    bot
     .adminPage()
     .getMessageSuccessful().should('contain.text', "Deleted successfully")
  });
});
