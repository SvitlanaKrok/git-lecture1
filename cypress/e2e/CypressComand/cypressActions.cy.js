///<reference types="cypress"/>

it('Quering elements', () => {
  cy.visit('http://localhost:8080/commands/actions');
  
  // .type вводить текст в поле (дозволяє вводити текст у disabled поля)
  cy.get('#email1')
  .type('test@')
  .should('have.value', 'test@')
  .clear()
  .type('${leftArrow}E{leftArrow}T{rightArrow}{rightArrow}{rightArrow}T')//*, {delay: 500})
  .type('{selectAll}{backspace}')
  .should('have.value', '')

  //{force: true} коли лейаут перекриває поле і ми не можемо до нього добратися
  cy.get('textarea.action-disabled')
  .type('Hello', {force: true})

  //.focus() для елементів, які поза видимою частиною(сайпрес або 
  //про скролить до того елемета або переведе фокус на нього)
  cy.get('#password1')
  .focus()
  .should('have.class', 'focus')
  .prev()
  .should('have.attr', 'style', 'color: orange;')

  //.blur() прибирає фокус з елемента і встановлюється бордер
  cy.get('#fullName1')
  .focus()
  .should('not.have.class', 'error')
  .blur()
  .should('have.class', 'error')
  .prev()
  .should('have.attr', 'style', 'color: red;')

  //.submit()
  cy.get('#couponCode1')
  .type('Text')
  .closest('form')
  .submit()
  .siblings()
  .should('contain', 'Your form has been submitted!')

  cy.get('#couponCode1')
  .type('Text')
  .closest('form')
  .submit()
  .next()
  .should('contain', 'Your form has been submitted!');

  //.click()
  /*cy.get('#action-canvas')
  .click('')
  .click('topLeft')
  .click('top')
  .click('topRight')
  .click('left')
  .click('bottomLeft')
  .click('bottom')
  .click('bottomRight')
  .click('right');*/

  cy.get('#action-canvas')
  .click(10, 0)

  cy.get('.btn.btn-lg.btn-primary')
  .click({force:true})

  //.dblclick()
  cy.get('.action-div')
  .dblclick()
  .next()
  .should('not.have.class', 'hidden');

  //{ multiple: true } клікає на всіх елементах (щою не прописувати багато коду)
  cy.get('[data-placement="bottom"]')
  .click({ multiple: true });

  //.check()
  cy.get('.action-multiple-checkboxes [type="checkbox"]')
  .check();

  cy.get('.action-radios [type="radio"]')
  .check({force: true});

  cy.get('.form-control.action-select')
  .select('oranges')
  .should('have.value', 'fr-oranges');


  //..scrollIntoView() скролить до якось елемента який вказали
  cy.get('#scroll-horizontal button')
  .should('not.be.visible')
  .scrollIntoView()
  .should('be.visible');


  //.scrollTo() скролить у вказаному напрямку
  cy.get('#scroll-horizontal')
  .scrollTo('right');

  //.trigger() викликає (імітує) івент
  cy.get('.trigger-input-range')
  .invoke('val', 100) // викликає проперті елемента
  .trigger('change')
  .next()
  .should('have.text', '100');
})