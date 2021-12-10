describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('/')
  })
})

describe('Testing server status', () => {
  it('successfully loads', () => {
      cy.visit('/status')
  })

  it('returns back a success message', () => {
      cy.contains('Server is running!')
  })
})

describe('Testing the database status', () => {
  it('successfully connects', () => {
    cy.request('/db').its('body').should('include', {"status":1})
  })
})