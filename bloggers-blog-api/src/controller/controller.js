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
}

module.exports = {checkDBStatus, findAllBlogs}