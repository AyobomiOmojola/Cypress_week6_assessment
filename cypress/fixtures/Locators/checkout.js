export const checkoutLocators = {
    "order_summary_modal_selector":'aside.modal-custom[data-role="modal"]',
    "item_in_order_summary_selector":'aside.modal-custom[data-role="modal"] .product-item-name',
    "email_address_field_selector":"#customer-email-fieldset #customer-email",
    "first_name_field_selector":'[name="firstname"]',
    "last_name_field_selector":'[name="lastname"]',
    "company_field_selector":'[name="company"]',
    "street_address_field_selector":'[name="street[0]"]',
    "city_field_selector":'[name="city"]',
    "postal_code_field_selector":'[name="postcode"]',
    "country_field_selector":'select[name="country_id"]',
    "state_field_selector":'[name="region"]',
    "phonenumber_field_selector":'[name="telephone"]',
    "shipping_method_checkbox_selector":'#checkout-shipping-method-load [value="flatrate_flatrate"]',
    "next_button_selector":'.button',
    "shipping_address_selector":'.billing-address-details',
    "order_summary_in_payment_page_selector":'.opc-block-summary',
    "totalprice_in_order_summary_selector":'.totals',
    "place_order_button_selector":'.primary[title="Place Order"]'
}