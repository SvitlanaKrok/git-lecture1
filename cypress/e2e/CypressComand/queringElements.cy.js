///<reference types="cypress"/>

it.skip('Quering elements', () => {
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
 
it('Допоміжні команди для пошуку елементів', () => {
  cy.visit('http://localhost:8080/commands/traversal');

  // пошук дочірніх елементів
  cy.get('.traversal-breadcrumb.breadcrumb')
  .children('li')
  .eq(0)
  .should('contain', 'Home');

  cy.get('.traversal-breadcrumb.breadcrumb')
  .children('.active')
  .eq(0)
  .should('contain', 'Data');

  // пошук елемента у батьківському  від дочірнього більше ніж через один
  cy.get('.badge.traversal-badge')
  .closest('ul')
  .should('have.class', 'list-group');

  cy.contains('John')
  .closest('table')
  .should('have.class', 'traversal-table')
  .and('contain', 'Doe');

  // first(), last() може заміняти eq, якщо не знаходить по індексу
  cy.get('.traversal-table td')
  .first()
  .should('contain', '1');

  cy.get('.traversal-disabled button')
  .first()
  .should('have.attr', 'disabled')
  .and('eq', 'disabled');

  //next() знаходить сестринські або братерські (на одному рівні)
  cy.get('.traversal-ul')
  .contains('li', 'apples')
  .next()
  .should('contain', 'oranges')
  .next()
  .should('contain', 'bananas');

  cy.get('.traversal-table td')
  .first()
  .should('contain', '1')
  .next()
  .should('contain', 'Jane')
  .next()
  .should('contain', 'Lane')
  
  //nextAll() знаходить всі сестринські або братерські (на одному рівні)
  cy.get('.traversal-next-all')
  .contains('bananas')
  .nextAll()
  .should('have.length', '2');

  //nextUntill() знаходить в з якогось по якийсь елемент в межах братерських
  cy.get('#veggies')
  .nextUntil('#nuts')
  .should('have.length', '3')
  .and('contain', 'corn')
  .and('contain', 'carrots')
  .and('contain', 'cucumbers');

  // not беремо протилежний локатор до того який вказали (виключення)
  cy.get('.traversal-disabled .btn.btn-default')
  .not('disabled')
  .should('be.enabled')

  //parent дістає на рівень вище перентів
  cy.get('.traversal-mark')
  .parent()
  .should('contain', 'Morbi leo risus, porta ac consectetur ac, ')

  cy.contains('.active', 'About')
  .parent()
  .should('contain', 'Services')

  //parents дістає не не рівень вище, а абсолютно усіх перентів
  cy.get('.traversal-cite')
  .parents()
  .should('contain', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.')

  cy.get('.traversal-cite')
  .parents('blockquote')
  .should('contain', 'Lorem ipsum dolor sit ame')

  //find знаходить в середині одного елементу будь-який інший (дивиться у 
  //всю структру DOM але тільки елемента, який вказаний)
  cy.get('.pagination.traversal-pagination')
  .find('span')
  .last()
  .should('contain', '»')

  cy.get('.foods-list')
  .find('#nuts')
  .should('contain', 'Nuts')

})