const mongoose = require('mongoose')
const Blog = require('../models/Blogs')

const db = 'mongodb+srv://mongo_owner:h9iXvyO5z84Mvtpa@mongo-backend.swf3y.mongodb.net/BLOG_DB?retryWrites=true&w=majority'
mongoose.connect(db, { useNewUrlParser: true })

const checkDBStatus = (req, res) => {
    res.send({status: mongoose.connection.readyState})
}

const findAllBlogs = (req, res) => {
  Blog.find()
  .then(dbProduct => {
      res.send(dbProduct)
  })
  .catch( err => {
    res.json(err)
  })
}

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

const deleteOneBlog = (req, res) => {
  Blog.findByIdAndRemove(req.body.id)
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

module.exports = {checkDBStatus, findAllBlogs, createOneBlog, deleteOneBlog}