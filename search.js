const {Given, When, Then} = require ('@badeball/cypress-cucumber-prepocessor');

Given('I write keyword', () => {
    cy.visit('http://zero.websecurity.com/index.html')
})
When('I klik search button', () => {
    cy.get('#searchTerm').type('some text {enter}')
})
Then('I should see search result', () => {
    cy.get('.top_offset').find('h2').should('be.visible')
})