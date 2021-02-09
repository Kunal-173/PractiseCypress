import {TESTDATA} from '../Testdata/Info'


export const EMAIL= '#Email'
export const EMAIL_ERROR= '#Email-error'
export const PASSWORD= '#Password'
export const REMEMBER_ME= '#RememberMe'
export const SUBMIT_BUTTON= '.login-button'
export const MY_ACCOUNT_BUTTON= 'a.ico-account'
export const LOGOUT_BUTTON= 'a.ico-logout'
export const MY_EMAIL= 'input#Email'


class Login{

    getEmail(){
        return cy.get(EMAIL)
    }
    getEmailError(){
        return cy.get(EMAIL_ERROR)
    }
    getPassword(){
        return cy.get(PASSWORD)
    }
    getRememberMe(){
        return cy.get(REMEMBER_ME)
    }
    getSubmitButton(){
        return cy.get(SUBMIT_BUTTON)
    }
    getMyaccountButton(){
        return cy.get(MY_ACCOUNT_BUTTON)
    }
    getLogoutButton(){
        return cy.get(LOGOUT_BUTTON)
    }
    getMyEmail(){
        return cy.get(MY_EMAIL)
    }

    typeEmail(){
        this.getEmail().type(TESTDATA.email)
       // this.getEmailError().should('not.be.visible')
    }
    typePassword(){
        this.getPassword().type(TESTDATA.Password)
    }
    uncheckRememberMe(){
        this.getRememberMe().uncheck()
        this.getRememberMe().should('not.be.checked')
    }
    verifyTitle(){
        cy.title().should('eq','nopCommerce demo store')
    }
    verifyLogin(){
        this.getMyaccountButton().should('have.text',TESTDATA.MyAccount)
        this.getLogoutButton().should('have.text',TESTDATA.Logout)
    }
    clickOnMyAccount(){
        this.getMyaccountButton().click()
    }
    verifyEmail(){
        this.getMyEmail().should('contain.value',TESTDATA.email)
    }
    clickOnSubmitButton(){
        this.getSubmitButton().click()
    }
}

export default Login