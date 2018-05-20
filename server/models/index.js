const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  uid: String,
  photoURL: String,
  displayName: String,
  email: String,
  phoneNumber: String
});

const postSchema = new mongoose.Schema({
  title: String,
  body: mongoose.Schema.Types.Mixed,
  author: String,
  meta: {
    likes: Number,
    comments: Array
  }
});

const Post = mongoose.model("post", postSchema);

module.exports = {
  Post
};
