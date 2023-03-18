/// <reference types="cypress" />

describe('Navbar test', function() {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
    });

    it('Should display online banking content', () => {
       cy.contains('Feedback').click()
       cy.url().should('include', 'feedback.html') 
    });

    it('Should display homepage content', () => {
        cy.contains('Home').click()
        cy.url().should('include', 'index.html') 
     });
});