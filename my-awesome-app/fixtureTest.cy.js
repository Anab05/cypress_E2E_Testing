/// <reference types="cypress" />

import { bot } from "../pages/Bot";
//import city from "../fixtures/cities.json";

describe("Fixture tests", function () {
  before(function () {
    cy.fixture("cities").then(function (city) {
      this.city = city;
    });
  });

  it("Create city using fixtures", function () {
    cy.visit("/");
    //bot.adminPage().getProfileButton().should("be.visible");
    bot.homePage().getLoginButton().click();
    cy.loginAsAdmin();
    bot.navigationPage().getAdminButton().click();
    bot.adminPage().getCitiesButton().click();
    cy.url().should("contain", "/admin/cities");

    this.city.forEach((city) => {
      bot.adminPage().getNewItemButton().click();
      bot.adminPage().getPopUpNewItem().should("be.visible");
      bot.adminPage().getInputNameCity().type(city.name);
      bot.adminPage().getSaveButton().click();
      bot.adminPage().getMessageSavedCity().should("be.visible");
      bot
        .adminPage()
        .getMessageSavedCity()
        .should("contain.text", "Saved successfully");
    });
  });
});
