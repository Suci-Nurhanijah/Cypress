/// <reference types="cypress" />

describe('Working with inputs', () => {
    it('Visit the website', () => {
        cy.visit('https://www.saucedemo.com')
        cy.url().should('include', 'saucedemo.com')
    });
    it('Should fill username', () => {
        cy.get('input[name="user_name]').clear()
        cy.get('input[name="user_name]').type('username')
    });

    it('Should fill password', () => {
        cy.get('input[name="password"]').clear()
        cy.get('input[name="password"]').type('password')
    });

    it('Should try to login', () => {
        cy.fixture("user").then(user => {
            const username = user.username
            const password = user.password

            cy.get('input[name="user_name]').clear()
            cy.get('input[name="user_name]').type('text')

            cy.get('input[name="password"]').clear()
            cy.get('input[name="password"]').type('password')

            cy.get('input[name="submit"]').click()

            cy.get('.error-message-container error').should('have.text', 'Epic sadface: Username is required')
        })
    });
})