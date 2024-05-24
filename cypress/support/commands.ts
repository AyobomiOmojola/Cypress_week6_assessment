// import Checkout from '../e2e/pageClasses/checkout.cy';
// /// <reference types="cypress" />
// declare namespace Cypress {
//     interface Chainable<Subject = any> {
//     fillShippingForm(): Chainable<any>;
//     }
// }

// // ***********************************************
// // This example commands.ts shows you how to
// // create various custom commands and overwrite
// // existing commands.
// //
// // For more comprehensive examples of custom
// // commands please read more here:
// // https://on.cypress.io/custom-commands
// // ***********************************************
// //
// //
// //-- This is a parent command --
// Cypress.Commands.add('fillShippingForm', () => { 
//     const checkout = new Checkout;
//     cy.fixture('shippingAddress').then((shippingData)=>{
//         cy.fixture('constants').then((constantData)=>{
//             checkout.getEmailAddressField().type(shippingData.EmailAddress);
//     checkout.getFirstNameField().type(shippingData.FirstName);
//     checkout.getLastNameField().type(shippingData.LastName);
//     checkout.getCompanyField().type(shippingData.Company);
//     checkout.getStreetAddressField().type(shippingData.StreetAddress);
//     checkout.getCityField().type(shippingData.City);
//     checkout.getPostalCodeField().type(shippingData.PostalCode);
//     checkout.getCountryField().select(constantData.country)
//     checkout.getStateField().type(shippingData.State)
//     checkout.getPhoneNumberField().type(shippingData.PhoneNumber);
//         })
    
//     }) 
//     })
// //
// //
// // -- This is a child command --
// // Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
// //
// //
// // -- This is a dual command --
// // Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
// //
// //
// // -- This will overwrite an existing command --
// // Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// //
// // declare global {
// //   namespace Cypress {
// //     interface Chainable {
// //       login(email: string, password: string): Chainable<void>
// //       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
// //       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
// //       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
// //     }
// //   }
// // }