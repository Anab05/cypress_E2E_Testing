import { AdminPage } from "./AdminPage"
import { HomePage } from "./HomePage"
import { LoginPage } from "./LoginPage"
import { NavigationPage } from "./NavigationPage"
import { SignUpPage } from "./SignUpPage"

export class Bot {
    constructor() { }

    loginPage() {
        return new LoginPage()
    }

    registrationPage() {
        return new RegistrationPage()
    }

    homePage() {
        return new HomePage()
    }

    navigationPage() {
        return new NavigationPage()
    }

    adminPage() {
        return new AdminPage()
    }

    signUpPage() {
        return new SignUpPage()
    }
};

export let bot = new Bot()

