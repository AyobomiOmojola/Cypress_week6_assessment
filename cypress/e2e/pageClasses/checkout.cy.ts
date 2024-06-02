import checkoutLocators from '../../fixtures/Locators/checkout'

class Checkout {
    // order_summary_modal_selector:string = 'aside.modal-custom[data-role="modal"]';
    // item_in_order_summary_selector:string = 'aside.modal-custom[data-role="modal"] .product-item-name';
    // email_address_field_selector:string = '#customer-email-fieldset #customer-email';
    // first_name_field_selector:string = '[name="firstname"]';
    // last_name_field_selector:string = '[name="lastname"]';
    // company_field_selector:string = '[name="company"]';
    // street_address_field_selector:string = '[name="street[0]"]';
    // city_field_selector:string = '[name="city"]';
    // postal_code_field_selector:string = '[name="postcode"]';
    // country_field_selector:string = 'select[name="country_id"]';
    // state_field_selector:string = '[name="region"]';
    // phonenumber_field_selector:string = '[name="telephone"]';
    // shipping_method_checkbox_selector:string = '#checkout-shipping-method-load [value="flatrate_flatrate"]';
    // next_button_selector:string = '.button';
    // shipping_address_selector:string = '.billing-address-details';
    // order_summary_in_payment_page_selector:string = '.opc-block-summary';
    // totalprice_in_order_summary_selector:string = '.totals';
    // place_order_button_selector:string = '.primary[title="Place Order"]';

    // Shipping section 
    getOrderSummaryModal():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(checkoutLocators.order_summary_modal_selector, { timeout: 40000 }).should('be.visible')
    }
    getItemInOrderSummary():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(checkoutLocators.item_in_order_summary_selector);
    }
    getEmailAddressField():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(checkoutLocators.email_address_field_selector);
    }
    getFirstNameField():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(checkoutLocators.first_name_field_selector);
    }
    getLastNameField():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(checkoutLocators.last_name_field_selector);
    }
    getCompanyField():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(checkoutLocators.company_field_selector);
    } 
    getStreetAddressField():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(checkoutLocators.street_address_field_selector);
    }
    getCityField():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(checkoutLocators.city_field_selector);
    }
    getPostalCodeField():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(checkoutLocators.postal_code_field_selector);
    }
    getCountryField():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(checkoutLocators.country_field_selector);
    }
    getStateField():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(checkoutLocators.state_field_selector);
    }
    getPhoneNumberField():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(checkoutLocators.phonenumber_field_selector);
    }
    getShippingMethodCheckBox():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(checkoutLocators.shipping_method_checkbox_selector).should('be.checked')
    }
    getNextButton():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(checkoutLocators.next_button_selector).click()
    }

    // Payment section
    getShippingAddress():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(checkoutLocators.shipping_address_selector, { timeout: 40000 }).should('be.visible')
    }
    getOrderSummaryInPaymentPage():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(checkoutLocators.order_summary_in_payment_page_selector).should('be.visible')
    }
    getTotalPriceInOrderSummary():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(checkoutLocators.totalprice_in_order_summary_selector).should('be.visible')
    }
    getPlaceOrderButton():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(checkoutLocators.place_order_button_selector).click()
    }
}

export {Checkout}
