/// <reference types="cypress" />

import { bot } from "../pages/Bot";

describe("Debugging Tests", () => {
  it("Test 1", () => {
    cy.visit("/login");
    bot.loginPage().getEmailInput().debug();
  });

  it('loads a fixture', () => {
    cy.fixture('cities').then((city) => {
      cy.debug();
      console.log(city);
    });
  });
});
