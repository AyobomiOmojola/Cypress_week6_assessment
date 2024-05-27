import { HomePage } from './pageClasses/homepage.cy';
import { FitnessEquipmentInGear } from './pageClasses/fitnessInGear.cy';
import { Cart } from './pageClasses/cart.cy'
import { Checkout } from './pageClasses/checkout.cy';
import { SuccessPage } from './pageClasses/successPage.cy';
import { fitnessEquipmentData, OrderSummary, successPage } from '../fixtures/constants'

interface ShippingData {
  EmailAddress: string;
  FirstName: string;
  LastName: string;
  Company: string;
  StreetAddress: string;
  City: string;
  PostalCode: string;
  Country: string;
  State: string;
  PhoneNumber: string;
}

interface ConstantData {
  allFitnessEquipment: number;
  cartCounterNumber: string;
  itemInOrderSummary: string;
  country: string;
  successNote: string;
}


describe('Testlio', () => {
  let shippingData: ShippingData;
  let constantData: ConstantData;
  before(function () {
    cy.fixture('shippingAddress').then(($data) => {
      shippingData = $data;
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
    homePage.getBannerElement()
    // Check hot sellers visibility
    homePage.getHotSellerTitle()
    homePage.getHotSellerContents()
    // Check search button visibility
    homePage.getSearchBarButton()
    // Check top navigation Visibility
    homePage.getNavBarElement()


    /////////////// STEP 3 /////////////////////
    ///////// Navigate to Gear and select Fitness equipment on top navigation ///////////

    // hover on gear in top navbar
    homePage.getGearInNavbar()
    // click fitness equipment in top nav bar
    homePage.getFitnessEquipmentInGear()
    // assert selected category of items visiibility
    fitnessEquipment.getAllFitnessEqiupments().and('have.length', fitnessEquipmentData.allFitnessEquipment)
    

    /////////////// STEP 4 /////////////////////
    /////////////// Select any random item and click on add to cart //////////////

    // Hover over the third item
    fitnessEquipment.getSingleFitnessEquipments().trigger('mouseover')
    fitnessEquipment.getSingleFitnessEquipments().within(()=>{
      // Click on add to cart
      fitnessEquipment.getAddToCartButtonInItem()
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
      cart.getCartItemCounter().and('have.text',fitnessEquipmentData.cartCounterNumber)
    })
    

    /////////////// STEP 5 /////////////////////
    ///////////// Click on mini cart icon /////////////////

    // click on cart icon
    cart.getCartIcon().click()
    // Check to see within cart for further assertions
    cart.getCartContentBlock().within(()=>{
      // check total price is visible
      cart.getTotalPriceInCart()
      // check specific product is visible
      cart.getHarmonyLumaflexItem()
      // check edit button is visible
      cart.getEditButtonInCart()
      // check delete button is visible
      cart.getDeleteButtonInCart()
      // check 'checkout' button is visible and click on it
      cart.getCheckoutBtnInCart()

    })
    

    /////////////// STEP 6 /////////////////////
    ////////// Click on Proceed to checkout button ///////////

    // check order summary 
    checkout.getOrderSummaryModal()
    // check order visibility
    checkout.getItemInOrderSummary().should('have.text', OrderSummary.itemInOrderSummary)


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
    checkout.getCountryField().select(shippingData.Country)
    checkout.getStateField().type(shippingData.State)
    checkout.getPhoneNumberField().type(shippingData.PhoneNumber);
    // assert shipping method is checked
    checkout.getShippingMethodCheckBox()
    // navigate to payments page
    checkout.getNextButton()
    // assert shipping address is visible
    checkout.getShippingAddress()
    // check product summary is visible
    checkout.getOrderSummaryInPaymentPage()
    // check price total is visible
    checkout.getTotalPriceInOrderSummary()


    /////////////// STEP 8 /////////////////////
    ///////////// Click on Place order///////////////////

    // Click on place order
    checkout.getPlaceOrderButton()
    // check the success note of the order
    successpage.getSuccessHeaderText()
    .and('have.text',successPage.successNote)
    // expect there to be an existence of an order number
    successpage.getSuccessOrderNumberContainer()
    // check the visibility of the 'continue shopping button'
    successpage.getContinueShoppingBtn()
  })
})