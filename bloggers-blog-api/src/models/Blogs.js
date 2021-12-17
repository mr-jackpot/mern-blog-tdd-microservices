const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Blueprint for a Blog document inside the MongoDB collection.
const BlogSchema = new Schema({
  user: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  blog: {
    type: String,
    required: true,
  },
});

module.exports = Blog = mongoose.model("Blogs", BlogSchema);