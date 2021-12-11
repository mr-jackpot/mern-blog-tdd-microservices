const mongoose = require('mongoose')

 const db = `mongodb+srv://jordt-user:${process.env.DB_PASSWORD}@cluster0.dyqmu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
 mongoose.connect(db, { useNewUrlParser: true })

 const checkDBStatus = (req, res) => {
     res.send({status: mongoose.connection.readyState})
 }

 module.exports = {checkDBStatus}