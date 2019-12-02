require('dotenv').config({ path: '../.env' });
const JWT_SECRET = process.env.JWT_SECRET;

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/userModel');

async function create(user) {
  const hashedPassword = bcrypt.hashSync(user.password, 8);
  const newUser = new User({
    name: user.name,
    email: user.email,
    date: new Date(),
    password: hashedPassword
  });

  try {
    // Saving the User 
    const savedUser = await newUser.save();
    return newUser.name;
  } catch (e) {
    // return a Error message describing the reason
    // we may have error on Mongo or JWT    
    throw Error("Error while Creating User: " + e);
  }
}

async function login(user) {
  try {
    // Find the User
    const details = await User.findOne({ email: user.email });
    // Check the password
    const passwordIsValid = bcrypt.compareSync(user.password, details.password);
    if (!passwordIsValid) throw Error("Invalid username/password")
    // Create a new JWT
    const token = jwt.sign({ _id: details._id }, JWT_SECRET, {
        expiresIn: 86400 // expires in 24 hours
    });
    details.tokens = details.tokens.concat({token});
    // add it to the token list of the user
    await details.save();
    return token;
  } catch (e) {
    console.log(e);
    // return a Error message describing the reason     
    throw Error("Error while Login User");
  }
}

module.exports = {
  create,
  login
};