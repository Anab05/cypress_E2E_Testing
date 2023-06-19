/// <reference types="cypress" />

import { bot } from "../pages/Bot"

describe('Login Tests', () => {
  const logout = () => cy.session("login with logout action", () => {
    cy.loginAsAdmin();
    bot.loginPage().getLogoutButton().click();
    cy.visit("/");
  });

  beforeEach(() => {
    cy.visit('/')

  });


  it('Visits the login page', () => {
    cy.visit('/')
    bot.homePage().getLanguageButton().click();
    bot.homePage().getEngButton().click();
    bot.homePage().getLoginButton().click();
    cy.url().should('contains', '/login');

  });

  it('Check input types', () => {
    cy.visit('/')
    bot.homePage().getLoginButton().click();
    bot.loginPage().getEmailInput().invoke('attr', 'type',).should('equal', 'email');
    bot.loginPage().getPasswordInput().invoke('attr', 'type',).should('equal', 'password');
  });

  it('Displays errors when user does not exist', () => {
    cy.visit('/');
    bot.homePage().getLoginButton().click();
    bot.loginPage().getEmailInput().type("non-existing-user@gmal.com");
    bot.loginPage().getPasswordInput().type("password123");
    bot.loginPage().getSubmitButton().click();
    bot.loginPage().getErrorMessage().should('be.visible');
    bot.loginPage().getErrorMessage().should('contain.text', 'User does not exists')
    cy.url().should('contains', '/login');
  });


  it('Login', () => {
    cy.url().should('contains', '/');
    cy.loginAsAdmin();
    cy.visit("/profile");
  });

  it('Logout', () => {
    logout();

  });

});



