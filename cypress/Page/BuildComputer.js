

export const PROCESSOR_SELECTION = 'select#product_attribute_1'
export const RAM_SELECTION= 'select#product_attribute_2'
export const HDD_RADIO_BUTTON_2= 'input#product_attribute_3_7'
export const HDD_RADIO_BUTTON_1= 'input#product_attribute_3_6'
export const OS_RADIO_BUTTON_1= 'input#product_attribute_4_8'
export const OS_RADIO_BUTTON_2= 'input#product_attribute_4_9'
export const MICROSOFT_OFFICE= 'input#product_attribute_5_10'
export const ACROBAT_READER= 'input#product_attribute_5_11'
export const TOTAL_COMMANDER= 'input#product_attribute_5_12'
export const ADD_TO_CART= 'input#add-to-cart-button-1'

class Build{
getProcessorSelection(){
    return cy.get(PROCESSOR_SELECTION)
}
getRamSelection(){
    return cy.get(RAM_SELECTION)
}
getHardDriveSelectionfor320(){
    return cy.get(HDD_RADIO_BUTTON_1)
}
getHardDriveSelectionfor400(){
    return cy.get(HDD_RADIO_BUTTON_2)
}
getOsSelectionforHome(){
    return cy.get(OS_RADIO_BUTTON_1)
}
getOsSelectionforPremium(){
    return cy.get(OS_RADIO_BUTTON_2)
}
getMicrosoftOffice(){
    return cy.get(MICROSOFT_OFFICE)
}
getAcrobatReader(){
    return cy.get(ACROBAT_READER)
}
getTotalCommander(){
    return cy.get(TOTAL_COMMANDER)
}
getAddtoCartButton(){
    return cy.get(ADD_TO_CART)
}

processorSelection(){
    this.getProcessorSelection().select('2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]')
}
ramSelection(){
    this.getRamSelection().select('8GB [+$60.00]')
}
harddiskSelection(){
    this.getHardDriveSelectionfor400().click()
}
operatingSystem(){
    this.getOsSelectionforPremium().click()
}
softwareSelection(){
    this.getMicrosoftOffice().check()
    this.getAcrobatReader().check()
    this.getTotalCommander().check()
}
clickOnAddToCart(){
    this.getAddtoCartButton().click()
}


}

export default Build