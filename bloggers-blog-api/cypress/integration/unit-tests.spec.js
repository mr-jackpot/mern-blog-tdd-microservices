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

describe('Testing the database CREATE operation', () => {
  it('creates a new record'), () => {
    const username = require("crypto").randomBytes(8).toString('hex')
    cy.request('POST', '/blogs', 
      {
        "username": username,
        "date": "9999-01-01T00:00:00.000Z",
        "blog": "Hello CREATE test!"
      
      }).its('body').should('include', {"status":404})
      
  }
})