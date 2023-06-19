export class NavigationPage {

    constructor() { }

    getAdminButton() {
        return cy.get('.btnAdmin')
    }

    getSignUpButton() {
        return cy.xpath("//*[text()=' Sign Up ']")
    }

    getMyAwesomeAppBtn() {
        return cy.xpath("//*[contains(@class, 'headline')]")
    }

}