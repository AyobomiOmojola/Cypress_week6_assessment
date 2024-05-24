class SuccessPage {
    // Define selectors as attributes
    success_header_text_selector:string = '[data-ui-id="page-title-wrapper"]';
    success_order_number_container_selector:string = '.columns .checkout-success > p > span';
    continue_shopping_btn_selector:string = '.checkout-success .action';

    getSuccessHeaderText():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.success_header_text_selector);
    }
    getSuccessOrderNumberContainer():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.success_order_number_container_selector);
    }
    getContinueShoppingBtn():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.continue_shopping_btn_selector);
    }
}

export default SuccessPage;
