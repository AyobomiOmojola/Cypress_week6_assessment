describe('Testlio', () => {

  let data;
  before(function () {
    cy.fixture('shippingAddress').then(function ($data) {
      data = $data;
    })
  })

  it('eCommerce e2e testing', () => {
    /////////////// STEP 1 /////////////////////
    ///////// Navigate to https://magento.softwaretestingboard.com/ url/////////////

    cy.visit('https://magento.softwaretestingboard.com/')
    // assert on url redirection
    cy.url().should('contain','softwaretestingboard')


    /////////////// STEP 2 /////////////////////
    ////////////// Validate the home page ////////////////////////

    // assert banner visibility
    cy.get('div.blocks-promo').should('be.visible')
    // Check hot sellers visibility
    cy.get('div.content-heading').should('be.visible')
    cy.get('div.block-content').should('be.visible')
    // Check search button visibility
    cy.get('#search').should('be.visible')
    // Check top navigation Visibility
    cy.get('#ui-id-2').should('be.visible')


    /////////////// STEP 3 /////////////////////
    ///////// Navigate to Gear and select Fitness equipment on top navigation ///////////

    // hover on gear in top navbar
    cy.get('#ui-id-6').trigger('mouseover')
    // click fitness equipment in top nav bar
    cy.get('#ui-id-26').click()
    // assert selected category of items visiibility
    cy.get('div.product-item-info').should('be.visible').and('have.length', 11)
    

    /////////////// STEP 4 /////////////////////
    /////////////// Select any random item and click on add to cart //////////////

    // Hover over the third item
    cy.get('li.product-item').eq(2).trigger('mouseover')
    cy.get('li.product-item').eq(2).within(()=>{
      // Click on add to cart
      cy.get('button.tocart[type="submit"]').click({force: true})
      // capture name of product
      cy.get('.product-item-link').then(($name)=>{
        console.log($name.text())
      })
      // capture price of product
      cy.get('#product-price-23').then(($price)=>{
        console.log($price.text())
      })
    })
    ///// check to see cart counter has increased by 1
    cy.get('.showcart').within(()=>{
      cy.get('.counter', { timeout: 40000 }).should('not.have.css', 'display', 'none')
      cy.get('.counter-number').should('be.visible').and('have.text','1')
    })
    

    /////////////// STEP 5 /////////////////////
    ///////////// Click on mini cart icon /////////////////

    // click on cart icon
    cy.get('.showcart').click()
    // Check to see within cart for further assertions
    cy.get('#ui-id-1').should('not.have.css', 'display', 'none')
    cy.get('#ui-id-1').within(()=>{
      // check total price is visible
      cy.get('#minicart-content-wrapper').find('.subtotal').should('be.visible')
      // check specific product is visible
      cy.get('[href$="lumaflex-trade-strength-band-kit.html"]').should('exist')
      // check edit button is visible
      cy.get('.edit').should('be.visible')
      // check delete button is visible
      cy.get('.delete').should('be.visible')
      // check 'checkout' button is visible
      cy.get('#top-cart-btn-checkout').should('be.visible')
      // click on checkout button
      cy.get('#top-cart-btn-checkout').click()
    })
    

    /////////////// STEP 6 /////////////////////
    ////////// Click on Proceed to checkout button ///////////

    // check order summary 
    cy.get('aside.modal-custom[data-role="modal"]', { timeout: 40000 }).should('be.visible')
    // check order visibility
    cy.get('aside.modal-custom[data-role="modal"]').find('.product-item-name').should('have.text','Harmony Lumaflex™ Strength Band Kit ')


    /////////////// STEP 7 /////////////////////
    ///////// Fill all the mandatory details and navigate to payments page ///////////

    // fill in shipping information
    cy.get('#customer-email-fieldset').find('#customer-email').type(data.EmailAddress);
    cy.get('[name="firstname"]').type(data.FirstName);
    cy.get('[name="lastname"]').type(data.LastName);
    cy.get('[name="company"]').type(data.Company);
    cy.get('[name="street[0]"]').type(data.StreetAddress);
    cy.get('[name="city"]').type(data.City);
    cy.get('[name="postcode"]').type(data.PostalCode);
    cy.get('select[name="country_id"]').select('Nigeria')
    cy.get('[name="region"]').type(data.State)
    cy.get('[name="telephone"]').type(data.PhoneNumber);
    // assert shipping method is checked
    cy.get('#checkout-shipping-method-load').find('[value="flatrate_flatrate"]').should('be.checked')
    // navigate to payments page
    cy.get('.button').click()
    // assert shipping address is visible
    cy.get('.billing-address-details', { timeout: 40000 }).should('be.visible')
    // check product summary is visible
    cy.get('.opc-block-summary').should('be.visible')
    // check product summary is visible
    cy.get('.totals').should('be.visible')


    /////////////// STEP 8 /////////////////////
    ///////////// Click on Place order///////////////////

    // Click on place order
    cy.get('.primary[title="Place Order"]').click()
    // check the success note of the order
    cy.get('[data-ui-id="page-title-wrapper"]').should('be.visible')
    .and('have.text','Thank you for your purchase!')
    // expect there to be an existence of an order number
    cy.get('.columns').find('.checkout-success > p > span').should('not.be.empty')
    // check the visibility of the 'continue shopping button'
    cy.get('.checkout-success').find('.action').should('be.visible')
  })
})