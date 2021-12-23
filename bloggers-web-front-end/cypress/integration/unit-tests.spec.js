describe('home page exists', () => {
    beforeEach(() => {
      // Cypress starts out with a blank slate for each test
      // so we must tell it to visit our website with the `cy.visit()` command.
      // Since we want to visit the same URL at the start of all our tests,
      // we include it in our beforeEach function so that it runs before each test
      cy.visit('http://localhost:3000')
    })

    it('header is displayed', () => {
      cy.get('[data-cy=home-page-header]')
      .should('be.visible')
    })

    it('home page blog button is displayed', () => {
      cy.get('[data-cy=home-page-blog-button]')
      .should('be.visible')
    })

    it('blog button navigates to the blog page', () => {
      cy.get('[data-cy=home-page-blog-button]').click()
      cy.location('pathname').should('eq', '/blog')
      cy.go('back')
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
  
  it('header is displayed', () => {
    cy.get('[data-cy=blog-page-header]')
    .should('be.visible')
  })

  it('body container is displayed', () => {
    cy.get('[data-cy=blog-page-body]')
    .should('be.visible')
  })

  it('should display a blog post', () => {
    cy.get('[data-cy=blog-container]')
    .should('be.visible')
  })

  it('should have input area for a new blog', () => {
    cy.get('[data-cy=submit-blog-form]')
    .should('be.visible')
  })
})

