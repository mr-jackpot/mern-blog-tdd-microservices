/// <reference types="cypress" />

describe('The USER API is live on port 3010', () => {
    it('exists', () => {
      cy.request('/api/user').its('body').should('include', 'Hello from user api!')
    })
});
