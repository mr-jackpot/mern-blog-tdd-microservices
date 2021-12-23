describe('Testing server status API', () => {
  it('returns a success code', () => {
    cy.request('/').its('body').should('include', {"status":1})
  })
})

describe('Testing the database status API', () => {
  it('returns a success code', () => {
    cy.request('/api/db').its('body').should('include', {"status":1})
  })
})

describe('Testing the blog READ operation API', () => {
  it('finds all blogs', () => {
    cy.request('/api/blogs').its('body').its('0').should('include', 
      {
          "_id": "61c454b45b18ce2867a05adf"
      }
    )
  })

  it('finds one blog', () => {
    cy.request('/api/blogs/61c454b45b18ce2867a05adf')
    .then((blog) => {
      expect(blog.status).to.eq(200)
      expect(blog.body._id).to.eq('61c454b45b18ce2867a05adf')
    })
  })
})

describe('Testing the blog CREATE operation API', () => {
  it('creates a new record', () => {
    const user = require("crypto").randomBytes(8).toString('hex')
    cy.request('POST', '/api/blogs', 
      {
        "user": user,
        "date": "9999-01-01T00:00:00.000Z",
        "blog": "Hello CREATE test!"
      
      }).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('_id')
        cy.request('DELETE', `/api/blogs/${response.body._id}`)
      })
  })
})


describe('Testing the blog DELETE operation api', () => {
  it('deletes a record', () => {
    cy.request('POST', '/api/blogs', 
      {
        "user": "DELETE_TEST_USER",
        "date": "9999-01-01T00:00:00.000Z",
        "blog": "Hello DELETE test!"
      
      }).then((blog) => {

        cy.request('DELETE', `/api/blogs/${blog.body._id}`)
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
    cy.request('PUT', '/api/blogs/61c454b45b18ce2867a05adf',
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