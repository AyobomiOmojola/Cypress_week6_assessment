import {checkoutLocators} from '../../fixtures/Locators/checkout'

class Checkout {
    checkoutLocators = checkoutLocators

    // Shipping section 
    getOrderSummaryModal():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.checkoutLocators.order_summary_modal_selector, { timeout: 40000 }).should('be.visible')
    }
    getItemInOrderSummary():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.checkoutLocators.item_in_order_summary_selector);
    }
    getEmailAddressField():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.checkoutLocators.email_address_field_selector);
    }
    getFirstNameField():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.checkoutLocators.first_name_field_selector);
    }
    getLastNameField():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.checkoutLocators.last_name_field_selector);
    }
    getCompanyField():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.checkoutLocators.company_field_selector);
    } 
    getStreetAddressField():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.checkoutLocators.street_address_field_selector);
    }
    getCityField():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.checkoutLocators.city_field_selector);
    }
    getPostalCodeField():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.checkoutLocators.postal_code_field_selector);
    }
    getCountryField():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.checkoutLocators.country_field_selector);
    }
    getStateField():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.checkoutLocators.state_field_selector);
    }
    getPhoneNumberField():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.checkoutLocators.phonenumber_field_selector);
    }
    getShippingMethodCheckBox():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.checkoutLocators.shipping_method_checkbox_selector).should('be.checked')
    }
    getNextButton():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.checkoutLocators.next_button_selector).click()
    }

    // Payment section
    getShippingAddress():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.checkoutLocators.shipping_address_selector, { timeout: 40000 }).should('be.visible')
    }
    getOrderSummaryInPaymentPage():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.checkoutLocators.order_summary_in_payment_page_selector).should('be.visible')
    }
    getTotalPriceInOrderSummary():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.checkoutLocators.totalprice_in_order_summary_selector).should('be.visible')
    }
    getPlaceOrderButton():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.checkoutLocators.place_order_button_selector).click()
    }
}

export {Checkout}
