class FitnessEquipmentInGear {
    all_fitness_equipment = 'div.product-item-info'
    single_fitness_equipment = 'li.product-item'
    addToCartButton_inSIngleItem = 'button.tocart[type="submit"]'
    name_of_fitness_item = '.product-item-link'
    price_of_harmony_lumaflex_item = '#product-price-23'

    getAllFitnessEqiupments() {
        return cy.get(this.all_fitness_equipment)
}
    getSingleFitnessEquipments(){
        return cy.get(this.single_fitness_equipment)
    }
    getAddToCartButtonInItem(){
        return cy.get(this.addToCartButton_inSIngleItem)
    }
    getNameOfFitnessItem(){
        return cy.get(this.name_of_fitness_item)
    }
    getPriceOfThirdFitnessItem(){
        return cy.get(this.price_of_harmony_lumaflex_item)
    }
}
export default FitnessEquipmentInGear