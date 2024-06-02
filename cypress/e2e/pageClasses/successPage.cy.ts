import {successPageLocators} from '../../fixtures/Locators/SuccessPage'

class SuccessPage {
    successPageLocators = successPageLocators

    getSuccessHeaderText():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.successPageLocators.success_header_text_selector).should('be.visible')
    }
    getSuccessOrderNumberContainer():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.successPageLocators.success_order_number_container_selector).should('not.be.empty')
    }
    getContinueShoppingBtn():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.successPageLocators.continue_shopping_btn_selector).should('be.visible')
    }
}

export {SuccessPage}
