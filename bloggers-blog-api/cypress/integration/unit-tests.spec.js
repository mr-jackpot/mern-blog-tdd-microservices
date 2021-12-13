describe('Testing server status', () => {
  it('returns a success code', () => {
    cy.request('/').its('body').should('include', {"status":1})
  })
})

describe('Testing the database status', () => {
  it('returns a success code', () => {
    cy.request('/db').its('body').should('include', {"status":1})
  })
})

describe('Testing the database READ operation', () => {
  it('returns the expected records', () => {
    cy.request('/findblogs').its('body').its('0').should('include', 
      {
          "_id": "61b336a357fe44a6a5de10ff"
      }
    )
  })
})