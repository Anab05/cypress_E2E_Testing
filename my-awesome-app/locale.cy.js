/// <reference types="cypress" />

import { bot } from "../pages/Bot"

describe('Locale tests', () => {

    beforeEach(() => {
        cy.visit('/')
    });

    it('Set locale to ES', () => {
        cy.visit('/')
        bot.homePage().getLanguageButton().click();
        bot.homePage().getLanguageButton().should('be.visible');
        bot.homePage().getESButton().click();
        bot.homePage().getHeadlineSection().should('contain.text','Página de aterrizaje')
    });

    it('Set locale to EN', () => {
        cy.visit('/');
        bot.homePage().getLanguageButton().click();
        bot.homePage().getLanguageButton().should('be.visible');
        bot.homePage().getEngButton().click();
        bot.homePage().getHeadlineSection().should('contain.text','Landing')
    });

    it('Set locale to CN', () => {
        cy.visit('/');
        bot.homePage().getLanguageButton().click();
        bot.homePage().getLanguageButton().should('be.visible');
        bot.homePage().getCNButton().click();
        bot.homePage().getHeadlineSection().should('contain.text','首页')
    });

    it('Set locale to FR', () => {
        cy.visit('/');
        bot.homePage().getLanguageButton().click();
        bot.homePage().getLanguageButton().should('be.visible');
        bot.homePage().getFRButton().click();
        bot.homePage().getHeadlineSection().should('contain.text','Page d\'atterrissage')
    });

})