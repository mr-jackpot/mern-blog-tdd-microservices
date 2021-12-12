/// <reference types="cypress" />

describe('The USER API is live on port 3010', () => {
    it('exists', () => {
      cy.request('/api/user').its('body').should('include', 'Hello from user api!')
    })
  
    it('has a db that returns a success code', () => {
      cy.request('/api/db').its('body').should('include', {"status":1})
    })

});
