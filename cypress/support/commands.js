// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('clickElement',(element) => {
        return cy.get(element).click()
    })


Cypress.Commands.add('clickAnyElement', (text, elementType) => {
    switch (elementType){
        case 'link':
            cy.get('a').contains(text).should('exist').click({force:true})
            break
        case 'button':
            cy.get('button').contains(text).should('exist').click({force:true})
   }
})     

Cypress.Commands.add('SelectAnyElement',(element, option) => {
     cy.get(element).should('be.visible')
     .contains(option)
     
     .click()
    })

Cypress.Commands.add('insertAnyText',(element, product) => {
        return cy.get(element).type(product)
    })

 Cypress.Commands.add('verifyAnyElement',(element)=>{
        return cy.get(element).should('be.visible')
    })

Cypress.Commands.add('verifyElementText',(element, text)=>{
        return cy.get(element).should('be.visible').and('contain.text', text)
    })

    