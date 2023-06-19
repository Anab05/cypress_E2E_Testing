export class SignUpPage {

    constructor() { }

    getNameInput() {
        return cy.xpath("//input[@id='name']")
    }

    getEmailInput() {
        return cy.xpath("//input[@id='email']")
    }

    getPasswordInput() {
        return cy.xpath("//input[@id='password']")
    }

    getConfirmPasswordInput() {
        return cy.xpath("//input[@id='confirmPassword']")
    }

    getSignMeUpButton() {
        return cy.xpath("//button[@type='submit']")
    }

    getErrorMessageExistUser() {
        return cy.xpath("//*[contains(@class, 'v-snack__content')]")
    }

    getVerifyAccountMessage() {
        return cy.xpath("//*[contains(@class, 'v-card__title')]")
    }

    getCloseButton() {
        return cy.xpath("//*[contains(@class, 'btnClose')]")
    }
}