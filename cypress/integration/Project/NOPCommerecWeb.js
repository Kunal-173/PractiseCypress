///          <reference types="cypress" />

import Signup from '../../Page/signup'
import Login from '../../Page/login'
import Cart from '../../Page/cart'
import Build from '../../Page/BuildComputer'

const SignupPage = new Signup
const LoginPage = new Login
const CartPage = new Cart
const BuildPage = new Build

describe("practise test", function(){

    it.skip("practise test1", function(){

        

        cy.visit(Cypress.env('register_url'))

        SignupPage.clickOnRadioButton()
        SignupPage.enterFirstandLastName()
        SignupPage.selectDateOfBirth()
        SignupPage.typeEmail()
        SignupPage.typeCompanyName()
        SignupPage.uncheckNewsletter()
        SignupPage.typePassword()
        SignupPage.clickOnRegister()
        SignupPage.verifySucess()

        
    })

    it.skip("practise test2", function(){

        cy.visit(Cypress.env('login_url'))

        LoginPage.typeEmail()
        LoginPage.typePassword()
        LoginPage.uncheckRememberMe()
        LoginPage.clickOnSubmitButton()
        LoginPage.verifyTitle()
        LoginPage.verifyLogin()
        LoginPage.clickOnMyAccount()
        LoginPage.verifyLogin()


    })

    it('practise test3', function(){

        cy.visit(Cypress.env('notebooks_url'))

        CartPage.addSecondProduct()
        CartPage.closeNotification()
        CartPage.addThirdProduct()
        CartPage.closeNotification()
        CartPage.addFourthProduct()
        CartPage.closeNotification()
        CartPage.addFifthProduct()
        CartPage.closeNotification()
        CartPage.addSixthProduct()
        CartPage.closeNotification()
        CartPage.clickOnShoppingCart()
        CartPage.valuesOfEachProduct()
        CartPage.sumOfTotalCart()
        CartPage.emptyCart()
        CartPage.clickOnUpdateCart()
        CartPage.verifyCartIsEmpty()

    })

    it.skip("practise test4", function(){

        cy.visit(Cypress.env('build'))

        BuildPage.processorSelection()
        BuildPage.ramSelection()
        BuildPage.harddiskSelection()
        BuildPage.operatingSystem()
        BuildPage.softwareSelection()
        BuildPage.clickOnAddToCart()
    })
})