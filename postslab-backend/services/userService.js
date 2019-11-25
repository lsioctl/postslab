require('dotenv').config({ path: '../.env' });
const JWT_SECRET = process.env.JWT_SECRET;

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/userModel');

async function createUser(user) {
  const hashedPassword = bcrypt.hashSync(user.password, 8);
  const newUser = new User({
    name: user.name,
    email: user.email,
    date: new Date(),
    password: hashedPassword
  });

  console.log(newUser);

  try {
    // Saving the User 
    const savedUser = await newUser.save();
    const token = jwt.sign({
        id: savedUser._id
    }, JWT_SECRET, {
        expiresIn: 86400 // expires in 24 hours
    });
    return token;
  } catch (e) {
    // return a Error message describing the reason
    // we may have error on Mongo or JWT    
    throw Error("Error while Creating User: " + e);
  }
}

async function loginUser(user) {
  try {
    // Find the User 
    const details = await User.findOne({ email: user.email });
    const passwordIsValid = bcrypt.compareSync(user.password, details.password);
    if (!passwordIsValid) throw Error("Invalid username/password")
    const token = jwt.sign({id: details._id}, JWT_SECRET, {
        expiresIn: 86400 // expires in 24 hours
    });
    return token;
  } catch (e) {
    // return a Error message describing the reason     
    throw Error("Error while Login User");
  }
}

module.exports = {
  createUser,
  loginUser
};