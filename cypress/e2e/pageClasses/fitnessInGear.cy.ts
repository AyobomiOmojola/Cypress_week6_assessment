import {fitnessInGearLocators} from '../../fixtures/Locators/fitnessInGear'

class FitnessEquipmentInGear {
    fitnessInGearLocators = fitnessInGearLocators

    getAllFitnessEqiupments():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.fitnessInGearLocators.all_fitness_equipment).should('be.visible')
}
    getSingleFitnessEquipments():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.fitnessInGearLocators.single_fitness_equipment).eq(2)
    }
    getAddToCartButtonInItem():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.fitnessInGearLocators.addToCartButton_inSIngleItem).click({force: true})
    }
    getNameOfFitnessItem():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.fitnessInGearLocators.name_of_fitness_item).then(($name)=>{
        console.log($name.text())
    })
    }
    getPriceOfThirdFitnessItem():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.fitnessInGearLocators.price_of_harmony_lumaflex_item).then(($price)=>{
        console.log($price.text())
    })
    }
}
export {FitnessEquipmentInGear}