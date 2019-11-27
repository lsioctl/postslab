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
}

module.exports = {
  create,
};