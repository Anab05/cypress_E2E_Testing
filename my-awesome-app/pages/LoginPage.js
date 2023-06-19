export class LoginPage {

    constructor() {}


    getEmailInput() {
        return cy.xpath("//input[@id='email']")
    }
  
    getPasswordInput() {
        return cy.xpath("//input[@id='password']")
    }

    getSubmitButton(){
        return cy.xpath("//*[@type='submit']")
    }

    getErrorMessage(){
        return cy.xpath("//*[contains(@class, 'v-snack__content')]")
    }

    getErrorMessagePassword(){
        return cy.xpath("//*[contains(@class, 'v-snack__content')]")
    }
    
    getLogoutButton(){
        return cy.xpath("//*[contains(@class, 'btnLogout')]")
    }


}