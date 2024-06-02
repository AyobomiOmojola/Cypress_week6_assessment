import fitnessInGearLocators from '../../fixtures/Locators/fitnessInGear'

class FitnessEquipmentInGear {
    // all_fitness_equipment:string = 'div.product-item-info'
    // single_fitness_equipment:string = 'li.product-item'
    // addToCartButton_inSIngleItem:string = 'button.tocart[type="submit"]'
    // name_of_fitness_item:string = '.product-item-link'
    // price_of_harmony_lumaflex_item:string = '#product-price-23'

    getAllFitnessEqiupments():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(fitnessInGearLocators.all_fitness_equipment).should('be.visible')
}
    getSingleFitnessEquipments():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(fitnessInGearLocators.single_fitness_equipment).eq(2)
    }
    getAddToCartButtonInItem():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(fitnessInGearLocators.addToCartButton_inSIngleItem).click({force: true})
    }
    getNameOfFitnessItem():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(fitnessInGearLocators.name_of_fitness_item).then(($name)=>{
        console.log($name.text())
    })
    }
    getPriceOfThirdFitnessItem():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(fitnessInGearLocators.price_of_harmony_lumaflex_item).then(($price)=>{
        console.log($price.text())
    })
    }
}
export {FitnessEquipmentInGear}