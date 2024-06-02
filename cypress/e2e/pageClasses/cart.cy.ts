import {cartLocators} from '../../fixtures/Locators/cart'

class Cart {
    cartLocators = cartLocators

    getCartIcon():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.cartLocators.cart_icon_selector);
    }
    getCartCounterWrapper():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.cartLocators.cart_counter_wrapper_selector, { timeout: 40000 })
    }
    getCartItemCounter():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.cartLocators.cart_item_counter_selector).should('not.have.css', 'display', 'none').and('be.visible')
    }
    getCartContentBlock():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.cartLocators.cart_content_block_selector).should('not.have.css', 'display', 'none')
    }
    getTotalPriceInCart():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.cartLocators.total_price_in_cart_selector).should('be.visible')
    }
    getHarmonyLumaflexItem():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.cartLocators.harmony_lumaflex_item_selector).should('exist')
    }
    getEditButtonInCart():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.cartLocators.edit_button_in_cart_selector).should('be.visible')
    }
    getDeleteButtonInCart():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.cartLocators.delete_button_in_cart_selector).should('be.visible')
    }
    getCheckoutBtnInCart():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.cartLocators.checkout_btn_in_cart_selector).should('be.visible').click()
    }
}

export {Cart}
