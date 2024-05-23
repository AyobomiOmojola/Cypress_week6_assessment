class Checkout {
    order_summary_modal_selector = 'aside.modal-custom[data-role="modal"]';
    item_in_order_summary_selector = 'aside.modal-custom[data-role="modal"] .product-item-name';
    email_address_field_selector = '#customer-email-fieldset #customer-email';
    first_name_field_selector = '[name="firstname"]';
    last_name_field_selector = '[name="lastname"]';
    company_field_selector = '[name="company"]';
    street_address_field_selector = '[name="street[0]"]';
    city_field_selector = '[name="city"]';
    postal_code_field_selector = '[name="postcode"]';
    country_field_selector = 'select[name="country_id"]';
    state_field_selector = '[name="region"]';
    phonenumber_field_selector = '[name="telephone"]';
    shipping_method_checkbox_selector = '#checkout-shipping-method-load [value="flatrate_flatrate"]';
    next_button_selector = '.button';
    shipping_address_selector = '.billing-address-details';
    order_summary_in_payment_page_selector = '.opc-block-summary';
    totalprice_in_order_summary_selector = '.totals';
    place_order_button_selector = '.primary[title="Place Order"]';

    // Shipping section 
    getOrderSummaryModal() {
        return cy.get(this.order_summary_modal_selector, { timeout: 40000 });
    }
    getItemInOrderSummary() {
        return cy.get(this.item_in_order_summary_selector);
    }
    getEmailAddressField() {
        return cy.get(this.email_address_field_selector);
    }
    getFirstNameField() {
        return cy.get(this.first_name_field_selector);
    }
    getLastNameField() {
        return cy.get(this.last_name_field_selector);
    }
    getCompanyField() {
        return cy.get(this.company_field_selector);
    } 
    getStreetAddressField() {
        return cy.get(this.street_address_field_selector);
    }
    getCityField() {
        return cy.get(this.city_field_selector);
    }
    getPostalCodeField() {
        return cy.get(this.postal_code_field_selector);
    }
    getCountryField() {
        return cy.get(this.country_field_selector);
    }
    getStateField() {
        return cy.get(this.state_field_selector);
    }
    getPhoneNumberField() {
        return cy.get(this.phonenumber_field_selector);
    }
    getShippingMethodCheckBox() {
        return cy.get(this.shipping_method_checkbox_selector);
    }
    getNextButton() {
        return cy.get(this.next_button_selector);
    }

    // Payment section
    getShippingAddress() {
        return cy.get(this.shipping_address_selector, { timeout: 40000 });
    }
    getOrderSummaryInPaymentPage() {
        return cy.get(this.order_summary_in_payment_page_selector);
    }
    getTotalPriceInOrderSummary() {
        return cy.get(this.totalprice_in_order_summary_selector);
    }
    getPlaceOrderButton() {
        return cy.get(this.place_order_button_selector);
    }
}

export default Checkout;
