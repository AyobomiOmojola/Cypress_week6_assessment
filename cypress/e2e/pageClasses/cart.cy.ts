class Cart {
    cart_icon_selector:string = '.showcart';
    cart_counter_wrapper_selector:string = '.counter';
    cart_item_counter_selector:string = '.counter-number';
    cart_content_block_selector:string = '#ui-id-1';
    total_price_in_cart_selector:string = '#minicart-content-wrapper .subtotal';
    harmony_lumaflex_item_selector:string = '[href$="lumaflex-trade-strength-band-kit.html"]';
    edit_button_in_cart_selector:string = '.edit';
    delete_button_in_cart_selector:string = '.delete';
    checkout_btn_in_cart_selector:string = '#top-cart-btn-checkout';

    getCartIcon():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.cart_icon_selector);
    }
    getCartCounterWrapper():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.cart_counter_wrapper_selector, { timeout: 40000 })
    }
    getCartItemCounter():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.cart_item_counter_selector).should('not.have.css', 'display', 'none').and('be.visible')
    }
    getCartContentBlock():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.cart_content_block_selector).should('not.have.css', 'display', 'none')
    }
    getTotalPriceInCart():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.total_price_in_cart_selector).should('be.visible')
    }
    getHarmonyLumaflexItem():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.harmony_lumaflex_item_selector).should('exist')
    }
    getEditButtonInCart():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.edit_button_in_cart_selector).should('be.visible')
    }
    getDeleteButtonInCart():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.delete_button_in_cart_selector).should('be.visible')
    }
    getCheckoutBtnInCart():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.checkout_btn_in_cart_selector).should('be.visible').click()
    }
}

export {Cart}
