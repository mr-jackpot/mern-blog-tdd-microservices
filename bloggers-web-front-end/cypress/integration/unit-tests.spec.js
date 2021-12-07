/// <reference types="cypress" />

describe('frontend exists', () => {
    beforeEach(() => {
      // Cypress starts out with a blank slate for each test
      // so we must tell it to visit our website with the `cy.visit()` command.
      // Since we want to visit the same URL at the start of all our tests,
      // we include it in our beforeEach function so that it runs before each test
      cy.visit('http://localhost:3000')
    })

    it('exists', () => {
      cy.get('.App-logo').should('exist')
    })
});

describe('landing page tests', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000')
    })

    // are those users displayed?
    it('checks top 5 contributors exist', () => {
      cy.get('.topContributors li')
        .should('have.length', 5)
    })

    it('has a login input box', () => {
      cy.get('.loginBox')
        .should('exist')
    })

    it('has a password input box', () => {
      cy.get('.passwordBox')
        .should('exist')
    })
})

