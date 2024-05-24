import HomePage from './pageClasses/homepage.cy';
import FitnessEquipmentInGear from './pageClasses/fitnessInGear.cy';
import Cart from './pageClasses/cart.cy'
import Checkout from './pageClasses/checkout.cy';
import SuccessPage from './pageClasses/successPage.cy';

describe('Testlio', () => {
  let shippingData;
  let constantData;
  before(function () {
    cy.fixture('shippingAddress').then(($data) => {
      shippingData = $data;
    })
    cy.fixture('constants').then(($data)=>{
      constantData = $data
    })
  })

  it('eCommerce e2e testing', () => {
    // import homepageclass
    const homePage = new HomePage();
    const fitnessEquipment = new FitnessEquipmentInGear();
    const cart = new Cart();
    const checkout = new Checkout();
    const successpage = new SuccessPage();

    /////////////// STEP 1 /////////////////////
    ///////// Navigate to https://magento.softwaretestingboard.com/ url/////////////

    cy.visit(Cypress.env('url'))
    // assert on url redirection
    cy.url().should('contain', Cypress.env('urlText'))


    /////////////// STEP 2 /////////////////////
    ////////////// Validate the home page ////////////////////////

    // assert banner visibility
    homePage.getBannerElement().should('be.visible')
    // Check hot sellers visibility
    homePage.getHotSellerTitle().should('be.visible')
    homePage.getHotSellerContents().should('be.visible')
    // Check search button visibility
    homePage.getSearchBarButton().should('be.visible')
    // Check top navigation Visibility
    homePage.getNavBarElement().should('be.visible')


    /////////////// STEP 3 /////////////////////
    ///////// Navigate to Gear and select Fitness equipment on top navigation ///////////

    // hover on gear in top navbar
    homePage.getGearInNavbar().trigger('mouseover')
    // click fitness equipment in top nav bar
    homePage.getFitnessEquipmentInGear().click()
    // assert selected category of items visiibility
    fitnessEquipment.getAllFitnessEqiupments().should('be.visible').and('have.length', constantData.allFitnessEquipment)
    

    /////////////// STEP 4 /////////////////////
    /////////////// Select any random item and click on add to cart //////////////

    // Hover over the third item
    fitnessEquipment.getSingleFitnessEquipments().eq(2).trigger('mouseover')
    fitnessEquipment.getSingleFitnessEquipments().eq(2).within(()=>{
      // Click on add to cart
      fitnessEquipment.getAddToCartButtonInItem().click({force: true})
      // capture name of product
      fitnessEquipment.getNameOfFitnessItem().then(($name)=>{
        console.log($name.text())
      })
      // capture price of product
      fitnessEquipment.getPriceOfThirdFitnessItem().then(($price)=>{
        console.log($price.text())
      })
    })
    ///// check to see cart counter has increased by 1
    cart.getCartIcon().within(()=>{
      cart.getCartItemCounter().should('not.have.css', 'display', 'none')
      cart.getCartItemCounter().should('be.visible').and('have.text',constantData.cartCounterNumber)
    })
    

    /////////////// STEP 5 /////////////////////
    ///////////// Click on mini cart icon /////////////////

    // click on cart icon
    cart.getCartIcon().click()
    // Check to see within cart for further assertions
    cart.getCartContentBlock().should('not.have.css', 'display', 'none')
    cart.getCartContentBlock().within(()=>{
      // check total price is visible
      cart.getTotalPriceInCart().should('be.visible')
      // check specific product is visible
      cart.getHarmonyLumaflexItem().should('exist')
      // check edit button is visible
      cart.getEditButtonInCart().should('be.visible')
      // check delete button is visible
      cart.getDeleteButtonInCart().should('be.visible')
      // check 'checkout' button is visible
      cart.getCheckoutBtnInCart().should('be.visible')
      // click on checkout button
      cart.getCheckoutBtnInCart().click()
    })
    

    /////////////// STEP 6 /////////////////////
    ////////// Click on Proceed to checkout button ///////////

    // check order summary 
    checkout.getOrderSummaryModal().should('be.visible')
    // check order visibility
    checkout.getItemInOrderSummary().should('have.text', constantData.itemInOrderSummary)


    /////////////// STEP 7 /////////////////////
    ///////// Fill all the mandatory details and navigate to payments page ///////////

    // fill in shipping information
    checkout.getEmailAddressField().type(shippingData.EmailAddress);
    checkout.getFirstNameField().type(shippingData.FirstName);
    checkout.getLastNameField().type(shippingData.LastName);
    checkout.getCompanyField().type(shippingData.Company);
    checkout.getStreetAddressField().type(shippingData.StreetAddress);
    checkout.getCityField().type(shippingData.City);
    checkout.getPostalCodeField().type(shippingData.PostalCode);
    checkout.getCountryField().select(constantData.country)
    checkout.getStateField().type(shippingData.State)
    checkout.getPhoneNumberField().type(shippingData.PhoneNumber);
    // assert shipping method is checked
    checkout.getShippingMethodCheckBox().should('be.checked')
    // navigate to payments page
    checkout.getNextButton().click()
    // assert shipping address is visible
    checkout.getShippingAddress().should('be.visible')
    // check product summary is visible
    checkout.getOrderSummaryInPaymentPage().should('be.visible')
    // check price total is visible
    checkout.getTotalPriceInOrderSummary().should('be.visible')


    /////////////// STEP 8 /////////////////////
    ///////////// Click on Place order///////////////////

    // Click on place order
    checkout.getPlaceOrderButton().click()
    // check the success note of the order
    successpage.getSuccessHeaderText().should('be.visible')
    .and('have.text',constantData.successNote)
    // expect there to be an existence of an order number
    successpage.getSuccessOrderNumberContainer().should('not.be.empty')
    // check the visibility of the 'continue shopping button'
    successpage.getContinueShoppingBtn().should('be.visible')
  })
})