const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BlogSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  accessLevel: {
    type: String,
    required: true,
  },
});

module.exports = Blog = mongoose.model("Blogs", BlogSchema);