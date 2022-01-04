/// <reference types="cypress" />

describe('The USER API is live on port 3010', () => {
    it('exists', () => {
      cy.request('/').its('body').should('include', {"status":1})
    })
  
    it('has a db that returns a success code', () => {
      cy.request('/api/db').its('body').should('include', {"status":1})
    })
  })
  
describe('READ operations can be performed with the USER API', () => {
  
  it('finds all users', () => {
    cy.request('/api/users').its('body').its('0').should('include', 
      {
          "_id": "61d472c25492180b79f93ff6"
      }
    )
  })

  it('finds one user', () => {
    cy.request('/api/users/61d472c25492180b79f93ff6')
    .then((user) => {
      expect(user.status).to.eq(200)
      expect(user.body._id).to.eq('61d472c25492180b79f93ff6')
    })
  })

})
