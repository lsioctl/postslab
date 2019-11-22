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
  email: { 
    type: String, 
    required: true, 
    unique: true 
  },
  password: { 
    type: String, 
    required: true 
  }
});

module.exports = mongoose.model('User', userSchema);