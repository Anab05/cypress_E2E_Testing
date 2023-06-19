/// <reference types="cypress" />

import { bot } from "../pages/Bot";

describe("Link tests", () => {
  it("check all links on page", () => {
    cy.visit("/");
    cy.get("a").each((page) => {
      cy.request(page.prop("href")).then((response) => {
        expect(response.status)
          .to.be.oneOf([200, 201, 202, 203, 204, 205, 206, 207, 208, 226])
          });
      });
    });
  });

