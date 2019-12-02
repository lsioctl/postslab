// User schema

/**
 * this would work as mongoose is a single object
 * see comments in db module
 * const mongoose = require('mongoose');
 * const userSchema = new mongoose.Schema({
 * ...
 **/
const db = require('../helper/db');
const mongoose = db.get();
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  email: { 
    type: String, 
    required: true, 
    unique: true 
  },
  password: { 
    type: String, 
    required: true 
  },
  tokens: [{
    token: {
        type: String,
        required: true
    }
  }]
});

module.exports = mongoose.model('User', userSchema);