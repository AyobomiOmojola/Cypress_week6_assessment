class FitnessEquipmentInGear {
    all_fitness_equipment:string = 'div.product-item-info'
    single_fitness_equipment:string = 'li.product-item'
    addToCartButton_inSIngleItem:string = 'button.tocart[type="submit"]'
    name_of_fitness_item:string = '.product-item-link'
    price_of_harmony_lumaflex_item:string = '#product-price-23'

    getAllFitnessEqiupments():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.all_fitness_equipment).should('be.visible')
}
    getSingleFitnessEquipments():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.single_fitness_equipment).eq(2)
    }
    getAddToCartButtonInItem():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.addToCartButton_inSIngleItem).click({force: true})
    }
    getNameOfFitnessItem():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.name_of_fitness_item)
    }
    getPriceOfThirdFitnessItem():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.price_of_harmony_lumaflex_item)
    }
}
export {FitnessEquipmentInGear}