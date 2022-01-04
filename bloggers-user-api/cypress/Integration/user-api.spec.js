/// <reference types="cypress" />

describe('The USER API is live on port 3010', () => {
    it('exists', () => {
      cy.request('/api/users').its('body').should('include', 'Hello from user api!')
    })
  
    it('has a db that returns a success code', () => {
      cy.request('/api/db').its('body').should('include', {"status":1})
    })
  })
  
describe('READ operations can be performed with the USER API', () => {
  
  it('finds all users', () => {
    cy.request('/api/users').its('body').its('0').should('include', 
      {
          "_id": "<TODO ID>"
      }
    )
  })

  it('finds one user', () => {
    cy.request('/api/users/<TODO ID>')
    .then((user) => {
      expect(user.status).to.eq(200)
      expect(user.body._id).to.eq('<TODO ID>')
    })
  })

})
