describe('Testing server status API', () => {
  it('returns a success code', () => {
    cy.request('/').its('body').should('include', {"status":1})
  })
})

describe('Testing the database status API', () => {
  it('returns a success code', () => {
    cy.request('/db').its('body').should('include', {"status":1})
  })
})

describe('Testing the database READ operation API', () => {
  it('returns the expected records', () => {
    cy.request('/findblogs').its('body').its('0').should('include', 
      {
          "_id": "61b336a357fe44a6a5de10ff"
      }
    )
  })
})

describe('Testing the database CREATE operation API', () => {
  it('creates a new record', () => {
    const user = require("crypto").randomBytes(8).toString('hex')
    cy.request('POST', '/blogs', 
      {
        "user": user,
        "date": "9999-01-01T00:00:00.000Z",
        "blog": "Hello CREATE test!"
      
      }).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('_id')
      })
  })
})


describe('Testing the database DELETE operation', () => {
  it('deletes a record', () => {
    const id = cy.request('POST', '/blogs', 
      {
        "user": "DELETE_TEST_USER",
        "date": "9999-01-01T00:00:00.000Z",
        "blog": "Hello DELETE test!"
      
      }).then((response) => {return response.body._id})
    
    cy.wait(2000)

    cy.request('DELETE', '/blogs', {"id": id})
    .then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('_id')
    })
  })
})