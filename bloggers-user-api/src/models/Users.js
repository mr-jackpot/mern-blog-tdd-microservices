const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    user: {
        type: String,
        required: true,
    }, 
    dateCreated: {
        type: Date,
        required: true,
    },
    location: {
        type: String,
        required: false,
    },
    avatarUrl: {
        type: String,
        required: false
    }
})

module.exports = User = mongoose.model("Users", UserSchema)