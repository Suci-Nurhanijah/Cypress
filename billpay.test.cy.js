/// <reference types="cypress" />

describe('Working with inputs', () => {
    it('Visit the website', () => {
        cy.visit('http://zero.webappsecurity.com')
        cy.url().should('include', '/bank/pay-bills.html')
    });
    cy.billpay(payee, account, amount, date, description)
});