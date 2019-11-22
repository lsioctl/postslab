const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

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
    }, process.env.JWT_SECRET, {
        expiresIn: 86400 // expires in 24 hours
    });
    return token;
} catch (e) {
  // return a Error message describing the reason
  // we may have error on Mongo or JWT    
  throw Error("Error while Creating User: " + e);
}
}

module.exports = {
  createUser
};