// models/BlogPost.js
const mongoose = require("mongoose");

const BlogPostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("BlogPost", BlogPostSchema);
