import successPageLocators from '../../fixtures/Locators/SuccessPage'

class SuccessPage {
    // // Define selectors as attributes
    // success_header_text_selector:string = '[data-ui-id="page-title-wrapper"]';
    // success_order_number_container_selector:string = '.columns .checkout-success > p > span';
    // continue_shopping_btn_selector:string = '.checkout-success .action';

    getSuccessHeaderText():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(successPageLocators.success_header_text_selector).should('be.visible')
    }
    getSuccessOrderNumberContainer():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(successPageLocators.success_order_number_container_selector).should('not.be.empty')
    }
    getContinueShoppingBtn():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(successPageLocators.continue_shopping_btn_selector).should('be.visible')
    }
}

export {SuccessPage}
