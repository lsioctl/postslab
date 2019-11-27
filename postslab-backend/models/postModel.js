// Post schema

/**
 * this would work as mongoose is a single object
 * see comments in db module
 * const mongoose = require('mongoose');
 * const userSchema = new mongoose.Schema({
 * ...
 **/
const db = require('../helper/db');
const mongoose = db.get();
const postSchema = new mongoose.Schema({
    body: { type: String, default: "", trim: true, maxlength: 280 },
    user: { type: mongoose.Schema.ObjectId, ref: "User" },
    comments: [
      {
        body: { type: String, default: "", maxlength: 280 },
        user: { type: mongoose.Schema.ObjectId, ref: "User" },
        createdAt: { type: Date, default: Date.now }
      }
    ],
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Post', postSchema);