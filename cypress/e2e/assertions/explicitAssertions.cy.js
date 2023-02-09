///<reference types="cypress"/>

it('Implicit assertions', () => {
  cy.visit('http://localhost:8080/commands/assertions');

  cy.get('.table.table-bordered.assertion-table tr')
  .eq(3)
  .should('have.class', 'success');

  cy.get('.table.table-bordered.assertion-table tr')
  .eq(3)
  .should('have.attr', 'class');

  cy.get('.table.table-bordered.assertion-table tr td')
  .eq(3)
  .should('have.text', 'Column content');

  cy.get('.table.table-bordered.assertion-table tr td')
  .eq(3)
  .should('contain', 'Column content');

  cy.get('.table.table-bordered.assertion-table tr td')
  .eq(3)
  .should('have.html', 'Column content');

  //частковий пошук по тексту
  cy.get('.table.table-bordered.assertion-table tr td')
  .eq(3)
  .should('include.text', 'content');

  //не містить якийсь текст
  cy.get('.table.table-bordered.assertion-table tr td')
  .eq(3)
  .should('not.contain', 'Hello');

  cy.get('.table.table-bordered.assertion-table tr th')
  .eq(5)
  .should('contain', '3');

  cy.get('.table.table-bordered.assertion-table tr th')
  .eq(5)
  .invoke('text')
  .then(parseFloat)
  .should('be.greaterThan', 2);

  cy.visit('http://localhost:8080/commands/querying');
  cy.get('#inputName')
  .type('Hello')
  .should('have.value', 'Hello');

  cy.get('#query-btn')
  .should('be.enabled');

  cy.get('[data-cy="submit"]')
  .should('be.enabled');

  cy.visit('http://localhost:8080/commands/traversal');

  cy.get('.traversal-disabled .btn.btn-default')
  .eq(0)
  .should('be.disabled');
  
  cy.visit('http://localhost:8080/commands/assertions');

  cy.get('.table.table-bordered.assertion-table th')
  .eq(5)
  .should('have.css', 'background-color')
  .and('eq', 'rgb(223, 240, 216)');

  cy.get('.navbar-brand')
  .should('have.class', 'navbar-brand')
  .and('be.visible')
  .and('have.attr', 'href')
  .and('include', '/')

  cy.get('[data-toggle="dropdown"]')
  .click();

  cy.get('.dropdown-menu li')
  .should('have.length', 17);

  /*cy.get('.table.table-bordered.assertion-table tr')
  .eq(3).then( element => {
    expect(element).to.have.class('success')
    expect(element).to.have.attr('class')
    expect(element.attr('class')).to.eq('success');
    expect(element.attr('class')).to.eql('success'); // deeply equal
    expect(element.attr('class')).to.eqls('success'); // deeply equal
    expect(element.attr('class')).to.equal('success');
    expect(element.attr('class')).to.equals('success');
  })

  // const obj = {
  //   key: 'Dima',
  //   keyObj: {
  //     key2: '1'
  //   }
  // }

  // const obj2 = {
  //   key: 'Dima',
  //   keyObj: {
  //     key2: '1'
  //   }
  // }

  // //expect(obj).to.eq(obj2);
  // expect(obj).to.eql(obj2); // deeply equal
  // expect(obj).to.eqls(obj2); // deeply equal
  // //expect(obj).to.equal(obj2);
  // //expect(obj).to.equals(obj2);

  // const obj3 = obj;

  //   expect(obj).to.eq(obj3);
  //   expect(obj).to.eql(obj3); // deeply equal
  //   expect(obj).to.eqls(obj3); // deeply equal
  //   expect(obj).to.equal(obj3);
  //   expect(obj).to.equals(obj3);

  cy.get('.table.table-bordered.assertion-table tr td')
  .eq(3)
  .then( element => {
    expect(element).to.have.text('Column content');
    expect(element).to.have.html('Column content');
    expect(element).to.contain('Column content');

    // expect(element).to.contains('Column content');
    // expect(element).to.include('Column content');

    expect(element.text()).to.contains('Column content');
    expect(element.text()).to.include('Column content');
    expect(element.text()).to.include('content');
    
    expect(element.text()).not.to.include('qweqwe');
  })

  cy.visit('http://localhost:8080/commands/querying');
  cy.get('#inputName')
  .type('Hello')
  .then( el => {
    expect(el.val()).to.be.eq('Hello');
  })

  cy.visit('http://localhost:8080/commands/traversal');

  cy.get('.traversal-disabled .btn.btn-default')
  .eq(0)
  .then( el => {
    expect(el).to.be.disabled;
  })

  cy.get('.traversal-disabled button:not([data-cypress-el="true"])')
  .eq(0)
  .then( el => {
    expect(el).to.be.disabled;
  })*/

})
