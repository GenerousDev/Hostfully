/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
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
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

Cypress.Commands.add('insertAText', (field, text)=>{
    cy.get(field).should('be.visible').type(text)
})

Cypress.Commands.add('clickAnElement', (element)=>{
    cy.get(element).should('be.visible').click()
})

Cypress.Commands.add('elementIsPresent', (element)=>{
    cy.get(element).should('be.visible').and('exist')
})

Cypress.Commands.add('elementTextIsPresent', (element, text)=>{
    cy.get(element).should('be.visible').and('exist').invoke('text').then((val)=>{
        expect(val).to.include(text)
    })
})

Cypress.Commands.add('selectValue', (element, value)=>{
    cy.get(element).should('be.visible').select(value)
})

declare namespace Cypress
{
    interface Chainable {
        insertAText(field, text: string): void
        clickAnElement(element: string): void
        elementIsPresent(element: string): void
        selectValue(element, value: string): void
        elementTextIsPresent(element, text: string): void
    }
}