const mongoose = require('mongoose')
const Blog = require('../models/Blogs')

// MongoDB connection detail & setup
const db = 'mongodb+srv://mongo_owner:h9iXvyO5z84Mvtpa@mongo-backend.swf3y.mongodb.net/BLOG_DB?retryWrites=true&w=majority'
mongoose.connect(db, { useNewUrlParser: true })

// Check the database status using a mongoose api. Return back status code.
// 0 = disconnected
// 1 = connected
// 2 = connecting
// 3 = disconnecting
const checkDBStatus = (req, res) => {
    res.send({status: mongoose.connection.readyState})
}

// Find all blogs in the MongoDB Collection. Return them all back in HTTP response.
const findAllBlogs = (req, res) => {
  Blog.find()
  .then(dbProduct => {
      res.send(dbProduct)
  })
  .catch( err => {
    res.json(err)
  })
}

// Find one blog based on ID specified in URL. Return document back in HTTP response.
const findOneBlog = (req, res) => {
  Blog.findById(req.params.id)
  .then(dbProduct => {
    if (dbProduct !== null)
        res.json(dbProduct)
    if (dbProduct === null)
        res.json(`record ID ${req.body.id} not found`)
  })
  .catch( err => {
    res.json(err)
  });
}

// Create a blog in the MongoDB Collection. Return back created document in HTTP response.
const createOneBlog = (req, res) => {
    Blog.create(
    {
        user: req.body.user,
        date: req.body.date,
        blog: req.body.blog  
    }
  )
  .then( dbProduct => {
    res.json(dbProduct)
  })
  .catch( err => {
    res.json(err)
  });
}

// Delete a blog in the Collection based on ID specified in URL. Return back removed document in HTTP response.
const deleteOneBlog = (req, res) => {
  Blog.findByIdAndRemove(req.params.id)
  .then( dbProduct => {
    if (dbProduct !== null)
        res.json(dbProduct)
    if (dbProduct === null)
        res.json(`record ID ${req.body.id} not found`)
  })
  .catch( err => {
    res.json(err)
  });
}

// Update a blog based on the ID specified in the URL. Update any fields included in the HTTP request body. Return back updated document.
const updateOneBlog = (req, res) => {
  Blog.findByIdAndUpdate(req.params.id, 
    { 
      date: req.body.date,
      blog: req.body.blog  
    }, {new: true}) // {new: true} - returns the UPDATED document. By deafult this mongoose function will return the original.
    .then( dbProduct => {
      if (dbProduct !== null)
          res.json(dbProduct)
      if (dbProduct === null)
          res.json(`record ID ${req.body.id} not found`)
    })
    .catch( err => {
      res.json(err)
    });
}

// Export Controller functions for use in the router file (router.js).
module.exports = {checkDBStatus, findAllBlogs, findOneBlog, createOneBlog, deleteOneBlog, updateOneBlog}