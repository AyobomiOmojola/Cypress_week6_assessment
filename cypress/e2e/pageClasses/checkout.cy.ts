class Checkout {
    order_summary_modal_selector:string = 'aside.modal-custom[data-role="modal"]';
    item_in_order_summary_selector:string = 'aside.modal-custom[data-role="modal"] .product-item-name';
    email_address_field_selector:string = '#customer-email-fieldset #customer-email';
    first_name_field_selector:string = '[name="firstname"]';
    last_name_field_selector:string = '[name="lastname"]';
    company_field_selector:string = '[name="company"]';
    street_address_field_selector:string = '[name="street[0]"]';
    city_field_selector:string = '[name="city"]';
    postal_code_field_selector:string = '[name="postcode"]';
    country_field_selector:string = 'select[name="country_id"]';
    state_field_selector:string = '[name="region"]';
    phonenumber_field_selector:string = '[name="telephone"]';
    shipping_method_checkbox_selector:string = '#checkout-shipping-method-load [value="flatrate_flatrate"]';
    next_button_selector:string = '.button';
    shipping_address_selector:string = '.billing-address-details';
    order_summary_in_payment_page_selector:string = '.opc-block-summary';
    totalprice_in_order_summary_selector:string = '.totals';
    place_order_button_selector:string = '.primary[title="Place Order"]';

    // Shipping section 
    getOrderSummaryModal():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.order_summary_modal_selector, { timeout: 40000 });
    }
    getItemInOrderSummary():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.item_in_order_summary_selector);
    }
    getEmailAddressField():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.email_address_field_selector);
    }
    getFirstNameField():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.first_name_field_selector);
    }
    getLastNameField():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.last_name_field_selector);
    }
    getCompanyField():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.company_field_selector);
    } 
    getStreetAddressField():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.street_address_field_selector);
    }
    getCityField():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.city_field_selector);
    }
    getPostalCodeField():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.postal_code_field_selector);
    }
    getCountryField():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.country_field_selector);
    }
    getStateField():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.state_field_selector);
    }
    getPhoneNumberField():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.phonenumber_field_selector);
    }
    getShippingMethodCheckBox():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.shipping_method_checkbox_selector);
    }
    getNextButton():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.next_button_selector);
    }

    // Payment section
    getShippingAddress():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.shipping_address_selector, { timeout: 40000 });
    }
    getOrderSummaryInPaymentPage():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.order_summary_in_payment_page_selector);
    }
    getTotalPriceInOrderSummary():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.totalprice_in_order_summary_selector);
    }
    getPlaceOrderButton():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.place_order_button_selector);
    }
}

export default Checkout;
