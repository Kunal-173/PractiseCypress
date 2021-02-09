import {TESTDATA} from '../Testdata/Info'


export const GRAB_PRODUCT= 'input.button-2.product-box-add-to-cart-button'
export const BAR_NOTIFICATION = '#bar-notification'
export const CLOSE_BAR_NOTIFICATION= '.close'
export const SHOPPING_CART= 'a.ico-cart'
export const INDIVIDUAL_VALUE= 'span.product-subtotal'
export const CART_TOTAL= '.value-summary> strong'
export const REMOVE_CART= '[name="removefromcart"]'
export const UPDATE_CART= '[name="updatecart"]'
export const EMPTY_MESSAGE= '.order-summary-content>div'

let sum=0
let total=0

class Cart{

    getProduct(){
        return cy.get(GRAB_PRODUCT)
    }
    getBarNotification(){
        return cy.get(BAR_NOTIFICATION)
    }
    getCloseSign(){
        return cy.get(CLOSE_BAR_NOTIFICATION)
    }
    getIndividualCartValue(){
        return cy.get(INDIVIDUAL_VALUE)
    }
    getCartTotal(){
        return cy.get(CART_TOTAL)
    }
    getShoppingCart(){
        return cy.get(SHOPPING_CART)
    }
    getEmptyCart(){
        return cy.get(REMOVE_CART)
    }
    getUpdateCart(){
        return cy.get(UPDATE_CART)
    }
    getEmptyMsg(){
        return cy.get(EMPTY_MESSAGE)
    }

    addSecondProduct(){
        cy.server()
        cy.route("POST","/addproducttocart/catalog/5/1/1").as("firstproduct")
        this.getProduct().eq(1).click()
        cy.wait("@firstproduct").then(function(response){
        
                for(var k in response.response.body){
                    cy.log(k + ":" + response.response.body[k])
                    cy.log("****************************************************************************");
                }
            
            //console.log(response)
            //cy.log(response.response.body)
        })
        this.getBarNotification().should('contain',TESTDATA.Description)
    }
    closeNotification(){
        this.getCloseSign().click()
    }
    addThirdProduct(){
        cy.server()
        cy.route("POST","/addproducttocart/catalog/8/1/1").as("secondproduct")
        this.getProduct().eq(2).click()
        cy.wait("@secondproduct").should("have.property","status",200)
        this.getBarNotification().should('contain',TESTDATA.Description)
    }
    addFourthProduct(){
        cy.server()
        cy.route("POST","/addproducttocart/catalog/7/1/1").as("thirdproduct")
        this.getProduct().eq(3).click()
        cy.wait("@thirdproduct").should("have.property","status",200)
        this.getBarNotification().should('contain',TESTDATA.Description)
    }
    addFifthProduct(){
        cy.server()
        cy.route("POST","/addproducttocart/catalog/9/1/1").as("forthproduct")
        this.getProduct().eq(4).click()
        cy.wait("@forthproduct").should("have.property","status",200)
        this.getBarNotification().should('contain',TESTDATA.Description)
    }
    addSixthProduct(){
        cy.server()
        cy.route("POST","/addproducttocart/catalog/6/1/1").as("fifthproduct")
        this.getProduct().eq(5).click()
        cy.wait("@fifthproduct").should("have.property","status",200)
        this.getBarNotification().should('contain',TESTDATA.Description)
    }
    clickOnShoppingCart(){
        cy.server()
        cy.route("POST","/shoppingcart/selectshippingoption").as("shoppingcart")
        this.getShoppingCart().click().then(function(response){
            console.log(response.status)
        })
        cy.wait("@shoppingcart")
    }
    valuesOfEachProduct(){
        this.getIndividualCartValue().each(($e1)=>{
            var res = $e1.text()
            res= res.replace(",","")
            res= res.replace("$","")
            sum=Number(sum)+Number(res)
        })
    }
    sumOfTotalCart(){
        this.getCartTotal().then((element)=>{
            var amount = element.text()
            amount= amount.replace(",","")
            amount= amount.replace("$","")
            total= Number(total)+Number(amount)
        }).then(function(){
            expect(total).to.equal(sum)
        })

    }
    emptyCart(){
        this.getEmptyCart().eq(0).click()
        this.getEmptyCart().eq(1).click()
        this.getEmptyCart().eq(2).click()
        this.getEmptyCart().eq(3).click()
        this.getEmptyCart().eq(4).click()
    }
    clickOnUpdateCart(){
        this.getUpdateCart().click()
    }
    verifyCartIsEmpty(){
        this.getEmptyMsg().should('contain', TESTDATA.EmptyMsg)
    }

}


export default Cart