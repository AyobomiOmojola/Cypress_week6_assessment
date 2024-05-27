class HomePage {
    banner_selector:string = 'div.blocks-promo';
    hot_seller_title_selector:string = 'div.content-heading';
    hot_seller_content_selector:string = 'div.block-content';
    search_bar_button_selector:string = '#search';
    navbar_selector:string = '#ui-id-2';
    gear_selection_selector:string = '#ui-id-6';
    fitness_equipment_selector:string = '#ui-id-26';

    getBannerElement():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.banner_selector).should('be.visible')
    }
    getHotSellerTitle():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.hot_seller_title_selector).should('be.visible')
    }
    getHotSellerContents():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.hot_seller_content_selector).should('be.visible')
    }
    getSearchBarButton():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.search_bar_button_selector).should('be.visible')
    }
    getNavBarElement():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.navbar_selector).should('be.visible')
    }
    getGearInNavbar():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.gear_selection_selector).trigger('mouseover')
    }
    getFitnessEquipmentInGear():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.fitness_equipment_selector).click()
    }
}

export {HomePage};
