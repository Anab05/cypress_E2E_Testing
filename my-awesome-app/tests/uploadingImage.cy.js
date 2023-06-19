/// <reference types="cypress" />


import { bot } from "../pages/Bot";

describe("Uploading Image", () => {
  beforeEach(() => {
    cy.visit("https://the-internet.herokuapp.com/upload");
  })

  it("should upload the image", () => {
    cy.get("#file-upload").attachFile("images/picture.webp");
    cy.get('#file-submit').click();
  });

});