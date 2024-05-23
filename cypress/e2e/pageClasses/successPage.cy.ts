class SuccessPage {
    // Define selectors as attributes
    success_header_text_selector = '[data-ui-id="page-title-wrapper"]';
    success_order_number_container_selector = '.columns .checkout-success > p > span';
    continue_shopping_btn_selector = '.checkout-success .action';

    getSuccessHeaderText() {
        return cy.get(this.success_header_text_selector);
    }
    getSuccessOrderNumberContainer() {
        return cy.get(this.success_order_number_container_selector);
    }
    getContinueShoppingBtn() {
        return cy.get(this.continue_shopping_btn_selector);
    }
}

export default SuccessPage;
