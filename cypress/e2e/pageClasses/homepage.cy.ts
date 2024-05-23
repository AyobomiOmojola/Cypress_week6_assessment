class HomePage {
    banner_selector = 'div.blocks-promo';
    hot_seller_title_selector = 'div.content-heading';
    hot_seller_content_selector = 'div.block-content';
    search_bar_button_selector = '#search';
    navbar_selector = '#ui-id-2';
    gear_selection_selector = '#ui-id-6';
    fitness_equipment_selector = '#ui-id-26';

    getBannerElement() {
        return cy.get(this.banner_selector);
    }
    getHotSellerTitle() {
        return cy.get(this.hot_seller_title_selector);
    }
    getHotSellerContents() {
        return cy.get(this.hot_seller_content_selector);
    }
    getSearchBarButton() {
        return cy.get(this.search_bar_button_selector);
    }
    getNavBarElement() {
        return cy.get(this.navbar_selector);
    }
    getGearInNavbar() {
        return cy.get(this.gear_selection_selector);
    }
    getFitnessEquipmentInGear() {
        return cy.get(this.fitness_equipment_selector);
    }
}

export default HomePage;
