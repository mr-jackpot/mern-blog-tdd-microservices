const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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