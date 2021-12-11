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