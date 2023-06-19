/// <reference types="cypress" />

import { bot } from "../pages/Bot";

describe("Auth routes tests", () => {
  before(() => {
    cy.fixture("forbidenUrls").then(function (url) {
      this.url = url;
    });
  });

  it("Forbids visits to urls if not authenticated", function () {
    this.url.forEach(function (element) {
      cy.visit(element.route);
      cy.url().should("contains", "/login");
    });
  });
});