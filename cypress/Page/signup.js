
import {TESTDATA} from '../Testdata/Info'

export const RADIO_BUTTON_MALE= "#gender-male"
export const FIRST_NAME= "#FirstName"
export const LAST_NAME= "#LastName"
export const DAY_BIRTH= '[name="DateOfBirthDay"]'
export const MONTH_BIRTH= '[name="DateOfBirthMonth"]'
export const YEAR_BIRTH= '[name="DateOfBirthYear"]'
export const REGISTRATION_PAGE= '.registration-page'
export const EMAIL= '#Email'
export const EMAIL_ERROR= '#Email-error'
export const COMPANY_NAME='#Company'
export const NEWSLETTER= 'input#Newsletter'
export const PASSWORD= '[name="Password"]'
export const CONFIRM_PASSWORD= '[name="ConfirmPassword"]'
export const REGISTER= '#register-button' 
export const ALERT= '.result'

class Signup{

getRadioButton(){
    return cy.get(RADIO_BUTTON_MALE)
}
getFirstName(){
    return cy.get(FIRST_NAME)
}    
getLastName(){
    return cy.get(LAST_NAME)
}
getDayBirth(){
    return cy.get(DAY_BIRTH)
}
getMonthBirth(){
    return cy.get(MONTH_BIRTH)
}
getYearBirth(){
    return cy.get(YEAR_BIRTH)
}
getEmail(){
    return cy.get(EMAIL)
}

getEmailError() {
    return cy.get(EMAIL_ERROR)
}
getCompanyName(){
    return cy.get(COMPANY_NAME)
}
getNewsletter(){
    return cy.get(NEWSLETTER)
}
getPassword(){
    return cy.get(PASSWORD)
}
getConfirmPassword() {
    return cy.get(CONFIRM_PASSWORD)
}
getRegister(){
    return cy.get(REGISTER)
}
getAlert(){
    return cy.get(ALERT)
}

verifyEmailError()
    {
        this.getEmailError().should('not.be.visible')
    }

clickOnRadioButton(){
    this.getRadioButton().click()
}
enterFirstandLastName(){
    this.getFirstName().should('be.visible')
    this.getFirstName().type(TESTDATA.firstName)
    this.getFirstName().should('have.attr','data-val','true')
    this.getLastName().should('be.visible')
    this.getLastName().type(TESTDATA.lastName)
    this.getLastName().should('have.attr','data-val','true')
}
selectDateOfBirth(){
    this.getDayBirth().select(TESTDATA.day)
    this.getMonthBirth().select(TESTDATA.month)
    this.getYearBirth().select(TESTDATA.year)
}
typeEmail(){
    this.getEmail().type(TESTDATA.email)
}
typeCompanyName(){
    this.getCompanyName().type(TESTDATA.companyName)
}
uncheckNewsletter(){
    this.getNewsletter().uncheck().should('not.be.checked')
}
typePassword(){
    this.getPassword().type(TESTDATA.Password)
    this.getConfirmPassword().type(TESTDATA.Password)

}
clickOnRegister(){
    this.getRegister().click()
}
verifySucess(){
    this.getAlert().should('be.visible')
    this.getAlert().should('have.text',TESTDATA.alert)
}
}

export default Signup