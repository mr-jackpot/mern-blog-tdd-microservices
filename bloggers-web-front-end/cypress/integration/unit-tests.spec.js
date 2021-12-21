describe('home page exists', () => {
    beforeEach(() => {
      // Cypress starts out with a blank slate for each test
      // so we must tell it to visit our website with the `cy.visit()` command.
      // Since we want to visit the same URL at the start of all our tests,
      // we include it in our beforeEach function so that it runs before each test
      cy.visit('http://localhost:3000')
    })

    it('home page blog button is displayed', () => {
      cy.get('[data-cy=home-page-blog-button]')
      .should('be.visible')
    })

    it('home page user button is displayed', () => {
      cy.get('[data-cy=home-page-user-button]')
      .should('be.visible')
    })
});


describe('blogs page exists', () => {
  
  beforeEach(() => {
    cy.visit('http://localhost:3000/blog')
  })
  
  it('loads the page', () => {
    cy.contains('Hello blog page!')
  })
})

