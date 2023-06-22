/// <reference types="cypress" />

// import OnetPage from '../PageObjects/onet'
// const onet = new OnetPage();



Cypress.Commands.add('akceptujCiasteczka', () => {
    cy.get('.cmp-intro_acceptAll').click();
  });

  Cypress.Commands.add('odrzucCisteczka', () => {
    cy.get('.cmp-intro_rejectAll').click();
  });

  beforeEach(() => {
      
    // cy.visit.OnetPage

    cy.visit('https://www.onet.pl')
    cy.get('.Menu_navMoreDots__hGd4n').as('programTV')
    // cy.get('.sc-a7eb406c-10 > .sc-ca90c2ac-0').as('zaloguj')
    cy.get('.Shortcuts_shortcutsJakDojade__xXI8e').as('jakDojade')
    cy.get('.MenuIcon_highlighted__X7zNd > .MenuIcon_labelText__0n1xb').as('poczta')
    cy.get('.CollapsedItems_collapsedMenu__l_XFH > :nth-child(2) > [href="https://programtv.onet.pl/"]').as('seriale')
    cy.get('[href="http://gameplanet.onet.pl/?utm_source=m.onet.pl&utm_medium=banner&utm_campaign=ikona"] > .MenuIcon_labelText__0n1xb').as('gry')
    
    cy.fixture('zal.fixtures').then(function(zawartosc_pliku){
        this.logowanie=zawartosc_pliku
     })
     
    //  cy.get('.cmp-intro_intro').as('oknoCiasteczek')
    //  cy.get('.button').as('kliknij')
     

     

})
describe('test strony onet', () => {


    it('zaakceptuj cookies', function ()  {
        cy.get('.cmp-intro_intro').should('be.visible')
        cy.akceptujCiasteczka();
        // cy.get('@CloseCookies').click()
        cy.get('.cmp-intro_intro').should('not.be.visible')
             
    })

    it('ustawienia zaawansowane cookies - odrzucenie ciasteczek', () => {
        cy.get('.cmp-intro_intro').should('be.visible')
        cy.odrzucCisteczka()
        cy.get('.cmp-intro_rejectAll > span').click()
    })

    

    it('sprawdzenie wyświetlanych seriali w TV', () => {
        // cy.get('.cmp-intro_intro').should('be.visible')
        cy.akceptujCiasteczka();
        cy.get('@programTV').click()
        cy.get('@seriale').click()
        cy.get('.catsLnk').click()
        cy.get('.cat3 > a').click()
     

        })
    it('sprawdź pociągi z Białegostoku do Warszawy', ()=> {
        cy.get('.cmp-intro_intro').should('be.visible')
        cy.akceptujCiasteczka();
        cy.get('@jakDojade').click()
        // cy.get('.cmp-intro_intro').should('be.visible')
        cy.akceptujCiasteczka();
        cy.get('.button').click()
        // cy.get('@kliknij').click()
        cy.get('[data-cy="city-list-input"]').clear().type('Białystok')
        cy.get('[data-cy="city-list-item-city"]').click()
        cy.get('[data-cy="search-engine-intercity-button"] > .tab-button > .tab-button__title').click()
        // cy.get('@kliknij').click()
        cy.get('.button').click()
        cy.get('[data-cy="planner-start-point-input"] > .point-form-field > [data-cy="planner-editable-input"] > .editable-input > .editable-input__content-container > .editable-input__content').clear().type('Białystok').wait(1000)
        cy.get('[data-cy="planner-search-suggestions"] > :nth-child(1) > .container').click()
        cy.get('[data-cy="planner-end-point-input"] > .point-form-field > [data-cy="planner-editable-input"] > .editable-input > .editable-input__content-container > .editable-input__content').clear().type('Warszawa Centralna').wait(1000)
        cy.get('[data-cy="planner-search-suggestion-element"] > .container').click()
        cy.get('[data-cy="planner-search-route-button"] > .search-button').click()
        })

        it('logowanie do poczty', function() {
        
                cy.get('.cmp-intro_intro').should('be.visible')
                cy.akceptujCiasteczka();
                cy.get('@poczta').click();
                
                cy.get('#email').clear().type(this.logowanie.poprawneDane.email);
                cy.get('#password').clear().type(this.logowanie.poprawneDane.password);
                cy.get('.sc-a7eb406c-10 > .sc-ca90c2ac-0').click()
                cy.url().should('eq', 'https://poczta.onet.pl/');
        
                })
            it('nieudane logowanie do poczty - niepoprawny adres mailowy', function() {
                    cy.get('.cmp-intro_intro').should('be.visible')
                    cy.akceptujCiasteczka();
                    cy.get('@poczta').click();
                    
                    cy.get('#email').clear().type(this.logowanie.niepoprawnyMail.email);
                    cy.get('#password').clear().type(this.logowanie.niepoprawnyMail.password);
                    cy.get('.sc-a7eb406c-10 > .sc-ca90c2ac-0').click()
                    cy.get('.sc-c4c71639-3').should('be.visible').contains('Nieprawidłowy email lub hasło')
                    })
        
          
            it('nieudane logowanie do poczty - niepoprawne hasło', function() {
                cy.get('.cmp-intro_intro').should('be.visible')
                cy.akceptujCiasteczka();
                cy.get('@poczta').click();
                cy.get('#email').clear().type(this.logowanie.niepoprawneHaslo.email);
                cy.get('#password').clear().type(this.logowanie.niepoprawneHaslo.password);
                cy.get('.sc-a7eb406c-10 > .sc-ca90c2ac-0').click()
                cy.get('.sc-c4c71639-3').should('be.visible').contains('Nieprawidłowy email lub hasło')

                    })


            it('sprawdzenie pogody w Białymstoku', () =>  {
                cy.get('.cmp-intro_intro').should('be.visible')
                cy.akceptujCiasteczka();
                cy.get('.Weather_weatherInfo__hwdBM').click().wait(1000);
                cy.get('#locationSearch').clear().type('Białystok').wait(1000);
                cy.get('#autocomplete-suggestions > [tabindex="0"]').click().wait(1000)    
            })
            it('wyszukiwanie najnowszego ogłoszenia mieszkania', function() {
                cy.get('.cmp-intro_intro').should('be.visible')
                cy.akceptujCiasteczka();
                cy.get(':nth-child(9) > .Menu_navMenuLink__Qde0X > .Menu_moreArrow__VYHyj').click().wait(3000)
                cy.akceptujCiasteczka();
                cy.get('.transaction-dropdown > .dropdown > .dropdown__button > .dropdown__icon').click()
                cy.get('.button-list > :nth-child(2)').click().wait
                cy.get('[data-test="text-field-with-chips"]').clear().type('Białystok').wait(1000);
                cy.get(':nth-child(1) > [data-test="suggestion-list-item"] > .suggestion-item__text').click()
                cy.get('.more-filters > .dropdown > .dropdown__button > .dropdown__title').click()
                cy.get('.number-of-rooms > .checkbox__group > .checkbox__group-inner > :nth-child(1) > .checkbox > .checkbox__custom > span').click()
                cy.get('.number-of-rooms > .checkbox__group > .checkbox__group-inner > :nth-child(2) > .checkbox > .checkbox__custom > span').click()
                cy.get(':nth-child(11) > .checkbox__group-inner > :nth-child(1) > .checkbox > .checkbox__custom > span').click()
                cy.get('.more-filters__search-button > .button > .button__content').click().wait(1000)
                cy.get('.sort-button__wrapper').click()
                cy.get('.sort-button__wrapper').should('be.visible')
                cy.get(':nth-child(1) > .sort-group__list > :nth-child(1) > [data-test="sort-button"] > .sort-group__button-inner > .sort-group__button-title').click()
                cy.get(':nth-child(3) > .offer__outer').click()
        
                })
                it('wyszukanie gry', () => {
                    // cy.get('.cmp-intro_intro').should('be.visible')
                    cy.akceptujCiasteczka();
                    cy.get('@gry').click()
                    cy.get('.search__input').clear().type('mahjong').type('{enter}')
                    cy.get('.list > :nth-child(8) > .tile > .js-gtm-click > .tile__wrapper').click()
                    })
})
