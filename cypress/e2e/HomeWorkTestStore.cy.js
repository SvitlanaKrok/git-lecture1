///<reference types="cypress"/>

describe('Registration and Login', () => {

    beforeEach(() => {
        cy.visit('https://automationteststore.com/');
    })

    it.skip('Registration', () => {
        cy.get('#customer_menu_top')
        .click();

        cy.get('.fa.fa-check.fa')
        .scrollIntoView()
        .should('be.visible');

        cy.get('.btn.btn-orange.pull-right')
        .first()
        .click();

        cy.get('#AccountFrm_firstname')
        .type('Svitlana')
        .should('contain.value', 'Svitlana');
        
        cy.get('#AccountFrm_lastname')
        .type('Krokhmalna')
        .should('contain.value', 'Krokhmalna');
        
        cy.get('#AccountFrm_email')
        .type('sveta.fetsyk@gmail.com')
        .should('contain.value', 'sveta.fetsyk@gmail.com');

        cy.get('#AccountFrm_telephone')
        .type('8095234468')
        .should('contain.value', '8095234468');  

        cy.get('#AccountFrm_fax')
        .type('8095145468')
        .should('contain.value', '8095145468');

        cy.get('#AccountFrm_company')
        .type('Koral')
        .should('contain.value', 'Koral');

        cy.get('#AccountFrm_address_1')
        .type('Naykova')
        .should('contain.value', 'Naykova');
        
        cy.get('#AccountFrm_city')
        .type('Lviv')
        .should('contain.value', 'Lviv');

        cy.get('#AccountFrm_country_id')
        .select('Ukraine')
        .should('have.value', '220');   
        
        cy.get('#AccountFrm_postcode')
        .type('52346')
        .should('contain.value', '52346');

        cy.get('#AccountFrm_zone_id')
        .select('Kyiv')
        .should('have.value', '3490');

        cy.get('#AccountFrm_loginname')
        .type('SvKrokh')
        .should('contain.value', 'SvKrokh');
        
        cy.get('#AccountFrm_password')
        .type('nina')
        .should('contain.value', 'nina');

        cy.get('#AccountFrm_confirm')
        .type('nina')
        .should('contain.value', 'nina');
        
        cy.get('#AccountFrm_newsletter0')
        .click();

        cy.get('#AccountFrm_agree')
        .click();

        cy.get('.btn.btn-orange.pull-right.lock-on-click')
        .click();
    })

    it('Login', () => {
    cy.get('#customer_menu_top')
    .click();

    cy.get('#loginFrm_loginname')
    .type('SvKrokh')
    .should('contain.value', 'SvKrokh');

    cy.get('#loginFrm_password')
    .type('nina')
    .should('contain.value', 'nina');

    cy.get('[title="Login"]')
    .click();
    })
})



