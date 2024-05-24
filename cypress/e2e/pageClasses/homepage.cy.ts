class HomePage {
    banner_selector:string = 'div.blocks-promo';
    hot_seller_title_selector:string = 'div.content-heading';
    hot_seller_content_selector:string = 'div.block-content';
    search_bar_button_selector:string = '#search';
    navbar_selector:string = '#ui-id-2';
    gear_selection_selector:string = '#ui-id-6';
    fitness_equipment_selector:string = '#ui-id-26';

    getBannerElement():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.banner_selector);
    }
    getHotSellerTitle():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.hot_seller_title_selector);
    }
    getHotSellerContents():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.hot_seller_content_selector);
    }
    getSearchBarButton():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.search_bar_button_selector);
    }
    getNavBarElement():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.navbar_selector);
    }
    getGearInNavbar():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.gear_selection_selector);
    }
    getFitnessEquipmentInGear():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.fitness_equipment_selector);
    }
}

export default HomePage;
