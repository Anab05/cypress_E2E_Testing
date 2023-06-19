/// <reference types="cypress" />

import { bot } from "../pages/Bot"


describe('Sign up test', () => {
  const anotherUser = () => cy.session("anotherUser", () => {
    cy.visit("/signup");
    cy.wait(5000)
    bot.signUpPage().getNameInput().type("Another User")
    bot.signUpPage().getEmailInput().type("admin@admin.com");
    bot.signUpPage().getPasswordInput().type("12345");
    bot.signUpPage().getConfirmPasswordInput().type("12345");
    bot.signUpPage().getSignMeUpButton().click();
    cy.wait(5000)
    cy.url().should('contains', '/signup');
    bot.signUpPage().getErrorMessageExistUser().should('be.visible')
    bot.signUpPage().getErrorMessageExistUser().should('contain.text', 'E-mail already exists')
  });

  const realUser = () => cy.session("realUser", () => {
    cy.visit('/signup');
    cy.wait(5000)
    bot.signUpPage().getNameInput().type("Ana Brankovic")
    bot.signUpPage().getEmailInput().type("ana.brankovic123@softelm.com");
    bot.signUpPage().getPasswordInput().type("12345");
    bot.signUpPage().getConfirmPasswordInput().type("12345");
    bot.signUpPage().getSignMeUpButton().click();
    cy.wait(5000)
    cy.url().should('contains', '/home');
    bot.signUpPage().getVerifyAccountMessage().should('contain.text', 'IMPORTANT: Verify your account')
    bot.signUpPage().getCloseButton().click();
    bot.loginPage().getLogoutButton().click();
  })


  beforeEach(() => {
    cy.visit('/')
  })

  it('Visits the signup page', () => {
    cy.visit('/');
    bot.navigationPage().getSignUpButton().click();
    cy.url().should('contains', '/signup');
  })

  it('Checks input types', () => {
    cy.visit('/');
    bot.navigationPage().getSignUpButton().click();
    bot.signUpPage().getEmailInput().invoke('attr', 'type').should('equal', 'email')
    bot.signUpPage().getPasswordInput().invoke('attr', 'type').should('equal', 'password')
    bot.signUpPage().getConfirmPasswordInput().invoke('attr', 'type').should('equal', 'password')
  })

  it('Displays errors when user already exists', () => {
    anotherUser();

  })

  it('Signup', () => {
    realUser();
  })


})