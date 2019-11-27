require('dotenv').config({ path: '../.env' });

const Post = require('../models/postModel');

async function create(post) {
  const newPost = new Post({
    body: post.body,
    user: post.user,
    date: new Date(),
  });

  try {
    // Saving the Post 
    const savedPost = await newPost.save();
    return savedPost._id;
  } catch (e) {   
    throw Error("Error while Creating Post: " + e);
  }
};

async function list(user) {
  try {
    // Get all posts from the user
    const posts = await Post.find({ user: user });
    return posts;
  } catch (e) {
    // return a Error message describing the reason     
    throw Error("Error while Login User");
  }
}

module.exports = {
  create,
  list
};