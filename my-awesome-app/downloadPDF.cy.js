/// <reference types="cypress" />

import { bot } from "../pages/Bot";

describe("Download PDF test", () => {
  it("should download the PDF", () => {
    cy.downloadFile(
      "https://www.tutorialspoint.com/cypress/cypress_tutorial.pdf",
      "cypress/downloads",
      "cypress_tutorial.pdf"
    );
    //1.ruta odakle se downloaduje , 2.folder gde se downloaduje, 3.naziv koji se daje skinutom dokumentu
    cy.readFile("cypress/downloads/cypress_tutorial.pdf").should(
      "contain",
      "tutorialspoint"
    );
    //1. ruta odakle se cita skinut fajl
  });
});
