-///<reference types="cypress"/>

it('Implicit assertions', () => {
    cy.visit('http://localhost:8080/commands/assertions');

    cy.location().should(location => {
        expect(location.href).to.eq('http://localhost:8080/commands/assertions');
        expect(location.host).to.eq('localhost:8080');
        expect(location.hostname).to.eq('localhost');
        expect(location.hash).to.be.empty;
        expect(location.origin).to.eq('http://localhost:8080');
        expect(location.pathname).to.eq('/commands/assertions');
        expect(location.port).to.eq('8080');
       // expect(location.search).to.eq('id=123'); //id=123qwe=123qwe=123
    })
  cy.url().should('eq', 'http://localhost:8080/commands/assertions' )
    
  })

