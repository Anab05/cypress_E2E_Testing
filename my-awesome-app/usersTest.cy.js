/// <reference types="cypress" />

import { bot } from "../pages/Bot";

describe("Users test", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.loginAsAdmin();
  });

  it("Adding new item", () => {
    bot.adminPage().getProfileButton().should("be.visible");
    cy.visit("/admin/users");
    bot.adminPage().getNewItemButton().click();
    bot.adminPage().getDropDownRoles().click();
    bot.adminPage().getListOfRoles().contains('Administrator').click();
    bot.adminPage().getDropDownCities().click();
    bot.adminPage().getListOfCities().contains('Cali').click();
  });
});
