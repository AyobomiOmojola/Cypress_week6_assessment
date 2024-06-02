import {homePageLocators} from '../../fixtures/Locators/homepage'

class HomePage {
    homepageLocators =  homePageLocators


    getBannerElement():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.homepageLocators.banner_selector).should('be.visible')
    }
    getHotSellerTitle():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.homepageLocators.hot_seller_title_selector).should('be.visible')
    }
    getHotSellerContents():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.homepageLocators.hot_seller_content_selector).should('be.visible')
    }
    getSearchBarButton():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.homepageLocators.search_bar_button_selector).should('be.visible')
    }
    getNavBarElement():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.homepageLocators.navbar_selector).should('be.visible')
    }
    getGearInNavbar():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.homepageLocators.gear_selection_selector).trigger('mouseover')
    }
    getFitnessEquipmentInGear():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.homepageLocators.fitness_equipment_selector).click()
    }
}

export {HomePage};
