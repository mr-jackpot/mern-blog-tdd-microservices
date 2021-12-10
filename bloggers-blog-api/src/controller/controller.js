const mongoose = require('mongoose')

const db = 'mongodb+srv://mongo_owner:h9iXvyO5z84Mvtpa@mongo-backend.swf3y.mongodb.net/BLOG_DB?retryWrites=true&w=majority'
mongoose.connect(db, { useNewUrlParser: true })

const checkDBStatus = (req, res) => {
    res.send({status: mongoose.connection.readyState})
}

module.exports = {checkDBStatus}