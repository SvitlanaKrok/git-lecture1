///<reference types="cypress"/>

it('Quering elements', () => {
  cy.visit('http://localhost:8080/commands/querying');
  
  cy.get('#query-btn').should('contain', 'Button');
  
 //ctrl
  cy.get('li:contains("bananas")').should('contain', 'bananas');
  cy.contains('bananas').should('contain', 'bananas');
  cy.contains('li.third', 'bananas').should('contain', 'bananas');
  cy.get('#querying').contains('bananas').should('have.class', 'third');

  cy.get('.query-form').within( () => {
    cy.get('#inputEmail').should('have.attr', 'placeholder', 'Email');
    cy.get('#inputPassword').should('have.attr', 'placeholder', 'Password');

    // should be unreachable
    // cy.get('#inputName').should('have.attr', 'placeholder', 'Password');
  })

  cy.root().should('contain', 'bananas');

  cy.get('div.col-xs-5 form').within( () => {
    cy.root().should('have.class', 'query-form');
  })
})
