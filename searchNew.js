const {Given, When, Then} = require ('@badeball/cypress-cucumber-prepocessor');
const { default: SearchPage } = require('./search.page');

Given('I write keyword', () => {
    SearchPage.visit();
})
When('I klik search button', () => {
    SearchPage.fillSearch('bill pays');
})
Then('I should see search result', () => {
    cy.get('.top_offset').find('h2').should('be.visible')
})