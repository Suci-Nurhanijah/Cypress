/// <reference types="cypress" />

describe('Searchbox Test', function() {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
    });
    
    it('Should type into searchbox and submit', () => {
        cy.get('#searchTerm').type('some text {enter}')
    });
    
    it('Should show search result page', () => {
        cy.get('.top_offset').find('h2').contains('Search Results:')
    });
})
