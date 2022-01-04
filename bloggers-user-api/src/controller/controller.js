const mongoose = require('mongoose')
const User = require('../models/Users')

 const db = `mongodb+srv://jordt-user:${process.env.DB_PASSWORD}@cluster0.dyqmu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
 mongoose.connect(db, { useNewUrlParser: true })

 const checkDBStatus = (req, res) => {
     res.send({status: mongoose.connection.readyState})
 }

 const findAllUsers = (req, res) => {
    User.find()
    .then(dbProduct => {
        res.send(dbProduct)
    })
    .catch(err => {
      res.json(err)
    })
 }

 const findOneUser = (req, res) => {
    User.findById(req.params.id)
    .then(dbProduct => {
      if (dbProduct !== null)
          res.json(dbProduct)
      if (dbProduct === null)
          res.json(`User ID ${req.body.id} not found`)
  })
  .catch( err => {
    res.json(err)
  });
}

const createOneUser = (req, res) => {
  Blog.create(
    {
      user: req.body.user,
      dateCreated: req.body.dateCreated,
      location: req.body.location,
      avatarUrl: req.body.imageUrl  
    }
  )
  .then( dbProduct => {
    res.json(dbProduct)
  })
  .catch(err => {
    res.json(err)
  });
}

 module.exports = {checkDBStatus, findAllUsers, findOneUser, createOneUser}