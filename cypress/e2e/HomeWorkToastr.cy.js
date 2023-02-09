///<reference types="cypress"/>

describe(' Modal & Overlays form', () => {

    beforeEach(() => {
    cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com', { timeout: 250000 });
    cy.get('img.theme-preview[alt="Corporate Theme"]').click();
    cy.get('a.ng-tns-c141-9.ng-star-inserted').click();
    cy.get('.menu-title.ng-tns-c141-19').click();
    cy.get('.menu-title.ng-tns-c141-23').click();
    cy.get('g[data-name="menu-2"]').click();
    cy.get('ngx-header button.select-button').click();
    cy.get('[ng-reflect-value="dark"]').click();
    cy.get('[ng-reflect-name="title"]').clear();
    cy.get('[ng-reflect-name="content"]').clear();    
    })

describe('Toastr', () => {
        const testParams = [
            {
                toastrPageData: {
                    nameTest: 'Test case_1',
                    position: '#nb-option-25',
                    title:'Example_1 for top position',
                    content:'Content for top-right position',
                    timeToHide: 1000,
                    toastType: '#nb-option-34',
                    popUp:'.ng-tns-c209-54.ng-trigger.ng-trigger-fadeIn.status-info',
                    icon: 'g[data-name="question-mark"]'
                },
                toastrExpectedResult: {
                    icon: 'question mark',
                    title: 'Example_1 for top position',
                    content: 'Content for top-right position',
                    position: {
                        top: {
                            operator: 'eq',
                            value: 0
                        },
                        left: {
                            operator: 'eq',
                            value: 0
                        }
                    },
                    color: 'rgb(0, 149, 255)'
                }
            },
            {
                toastrPageData: {
                    nameTest: 'Test case_2',
                    position: '#nb-option-24', 
                    title:'Example_2 for top position',
                    content:'Content for top-left position',
                    timeToHide: 1000,
                    toastType: '#nb-option-33',
                    popUp:'.ng-tns-c209-54.ng-trigger.ng-trigger-fadeIn.status-success',
                    icon: 'g[data-name="checkmark"]'
                },
                toastrExpectedResult: {
                    icon: 'email',
                    title: 'Example_2 for top position',
                    content: 'Content for top-left position',
                    position: {
                        top: {
                            operator: 'eq',
                            value: 0
                        },
                        left: {
                            operator: 'neq',
                            value: 0
                        }
                    },
                    color: 'rgb(0, 214, 143)'
                }
            },
            {
                toastrPageData: {
                    nameTest: 'Test case_3',
                    position: '#nb-option-26', 
                    title:'Example_3 for bottom position',
                    content:'Content for bottom-right position',
                    timeToHide: 1000,
                    toastType: '#nb-option-35',
                    popUp:'.ng-tns-c209-54.ng-trigger.ng-trigger-fadeIn.status-warning',
                    icon: 'g[data-name="alert-triangle"]'
                },
                toastrExpectedResult: {
                    icon: 'alert-triangle',
                    title: 'Example_3 for bottom position',
                    content: 'Content for bottom-right position',
                    position: {
                        top: {
                            operator: 'neq',
                            value: 0
                        },
                        left: {
                            operator: 'eq',
                            value: 0
                        }
                    },
                    color: 'rgb(255, 170, 0)'
                }
            },
            {
                toastrPageData: {
                    nameTest: 'Test case_4',
                    position: '#nb-option-27', 
                    title:'Example_4 for bottom position',
                    content:'Content for bottom-left position',
                    timeToHide: 1000,
                    toastType: '#nb-option-36',
                    popUp:'.ng-tns-c209-54.ng-trigger.ng-trigger-fadeIn.status-danger',
                    icon: 'g[data-name="flash"]'
                },
                toastrExpectedResult: {
                    icon: 'flash',
                    title: 'Example_4 for bottom position',
                    content: 'Content for bottom-left position',
                    position: {
                        top: {
                            operator: 'neq',
                            value: 0
                        },
                        left: {
                            operator: 'neq',
                            value: 0
                        }
                    },
                    color: 'rgb(255, 61, 113)'
                }
            }
            
        ]                                                                                                                                                                                                                                                                                                                                                      

        testParams.forEach(({toastrPageData, toastrExpectedResult}) => {
            it(`${toastrPageData.nameTest}`, () => 
            
            {
            cy.get('[name="timeout"]')
            .clear()
            .type(`${toastrPageData.timeToHide}`);

            cy.get('[ng-reflect-name="title"]')
            .type(`${toastrPageData.title}`)
            .then( el => {
            expect(el.val()).to.be.eq(`${toastrExpectedResult.title}`);
            })

            cy.get('[ng-reflect-name="content"]')
            .type(`${toastrPageData.content}`)
            .then( el => {
            expect(el.val()).to.be.eq(`${toastrExpectedResult.content}`);
            })

            cy.get('[icon="chevron-down-outline"]').eq(1).click();
            cy.get(`${toastrPageData.position}`).click();

            cy.get('[icon="chevron-down-outline"]').eq(2).click();
            cy.get(`${toastrPageData.toastType}`).click();
            
            cy.get('.mat-ripple.appearance-filled.size-medium.shape-rectangle.status-basic.nb-transition').click();
            cy.get(toastrPageData.popUp).then( element => {
                expect(element).to.have.css('background-color', `${toastrExpectedResult.color}`);
                expect(element).to.contain(`${toastrExpectedResult.content}`);
                expect(element.find(toastrPageData.icon), 'A popup window with' +' '+ `${toastrExpectedResult.icon}` +' '+ 'should appear').to.exist;
                 
                console.log(element.position());

                if (toastrExpectedResult.position.top.operator === 'eq') {
                    expect(element.position().top).eq(toastrExpectedResult.position.top.value)
                } else if (toastrExpectedResult.position.top.operator === 'neq') {
                    expect(element.position().top).not.eq(toastrExpectedResult.position.top.value);
                }

                if (toastrExpectedResult.position.left.operator === 'eq') {
                    expect(element.position().left).eq(toastrExpectedResult.position.left.value)
                } else if (toastrExpectedResult.position.left.operator === 'neq') {
                    expect(element.position().left).not.eq(toastrExpectedResult.position.left.value);
                }
            })
        })
    })
})
})

