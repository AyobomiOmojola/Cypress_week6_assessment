class Cart {
    cart_icon_selector = '.showcart';
    cart_counter_wrapper_selector = '.counter';
    cart_item_counter_selector = '.counter-number';
    cart_content_block_selector = '#ui-id-1';
    total_price_in_cart_selector = '#minicart-content-wrapper .subtotal';
    harmony_lumaflex_item_selector = '[href$="lumaflex-trade-strength-band-kit.html"]';
    edit_button_in_cart_selector = '.edit';
    delete_button_in_cart_selector = '.delete';
    checkout_btn_in_cart_selector = '#top-cart-btn-checkout';

    getCartIcon() {
        return cy.get(this.cart_icon_selector);
    }
    getCartCounterWrapper() {
        return cy.get(this.cart_counter_wrapper_selector, { timeout: 40000 });
    }
    getCartItemCounter() {
        return cy.get(this.cart_item_counter_selector);
    }
    getCartContentBlock() {
        return cy.get(this.cart_content_block_selector);
    }
    getTotalPriceInCart() {
        return cy.get(this.total_price_in_cart_selector);
    }
    getHarmonyLumaflexItem() {
        return cy.get(this.harmony_lumaflex_item_selector);
    }
    getEditButtonInCart() {
        return cy.get(this.edit_button_in_cart_selector);
    }
    getDeleteButtonInCart() {
        return cy.get(this.delete_button_in_cart_selector);
    }
    getCheckoutBtnInCart() {
        return cy.get(this.checkout_btn_in_cart_selector);
    }
}

export default Cart;
