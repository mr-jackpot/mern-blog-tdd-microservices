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

describe('Testing the blog READ operation API', () => {
  it('finds all blogs', () => {
    cy.request('/findblogs').its('body').its('0').should('include', 
      {
          "_id": "61b336a357fe44a6a5de10ff"
      }
    )
  })
})

describe('Testing the blog CREATE operation API', () => {
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


describe('Testing the blog DELETE operation api', () => {
  it('deletes a record', () => {
    cy.request('POST', '/blogs', 
      {
        "user": "DELETE_TEST_USER",
        "date": "9999-01-01T00:00:00.000Z",
        "blog": "Hello DELETE test!"
      
      }).then((blog) => {

        cy.request('DELETE', `/blogs/${blog.body._id}`)
        .then((response) => {
          expect(response.status).to.eq(200)
          expect(response.body).to.have.property('_id')
        })
      })
    })
})


describe('Testing the blog UPDATE operation API', () => {
  it('updates the specified record', () => {
    const blogContent = require("crypto").randomBytes(8).toString('hex')
    cy.request('PUT', '/blogs/61b336a357fe44a6a5de10ff',
    {
      "date": "9999-01-01T00:00:00.000Z",
      "blog": blogContent
    }).then((blog) => {
        expect(blog.status).to.eq(200)
        expect(blog.body).to.have.property('_id')
        expect(blog.body).to.have.property('blog')
        expect(blog.body.blog).to.eq(blogContent)
    })
  })
})