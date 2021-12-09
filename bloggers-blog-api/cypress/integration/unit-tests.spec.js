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