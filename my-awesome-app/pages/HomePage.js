export class HomePage {

    constructor() { }

    getLanguageButton() {
        return cy.xpath("//*[contains(@class, 'btnLocaleActivation')]")
    }

    getEngButton() {
        return cy.xpath("//*[contains(@class, 'btnEN')]")
    }

    getLoginButton() {
        return cy.xpath("//a[contains(@class, 'btnLogin')][1]")
    }

    getESButton() {
        return cy.xpath("//*[contains(@class, 'btnES')]")
    }

    getCNButton() {
        return cy.xpath("//*[contains(@class, 'btnCN')]")
    }

    getFRButton() {
        return cy.xpath("//*[contains(@class, 'btnFR')]")
    }

    getHeadlineSection() {
        return cy.get('.display-2')
    }
}
