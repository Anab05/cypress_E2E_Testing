/// <reference types="cypress" />

import { bot } from "../pages/Bot";

describe("Auth routes tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Forbids visits to home url if not authenticated", () => {
    cy.visit("/home");
    cy.url().should("contains", "/login");
  });

  it("Forbids visits to profile url if not authenticated", () => {
    cy.visit("/profile");
    cy.url().should("contains", "/login");
  });

  it("Forbids visits to admin cities url if not authenticated", () => {
    cy.visit("/admin/cities");
    cy.url().should("contains", "/login");
  });

  it("Forbids visits to admin users url if not authenticated", () => {
    cy.visit("/admin/users");
    cy.url().should("contains", "/login");
  });
});
