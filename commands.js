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

Cypress.Commands.add('billpay', (payee, account, amount, date, description) =>{
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.get('#sp_payee').clear()
    cy.get('#sp_payee').type('select')

    cy.get('#sp_account').clear()
    cy.get('#sp_account').type('select')

    cy.get('input[name="amount"]').clear()
    cy.get('input[name="amount"]').type('number')

    cy.get('input[name="date"]').clear()
    cy.get('input[name="date"]').type('date')

    cy.get('input[name="description"]').clear()
    cy.get('input[name="description"]').type('text')

    cy.get('input[name="submit"]').click()


})