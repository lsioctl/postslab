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

  try {
    // Saving the User 
    const savedUser = await newUser.save();
    const token = jwt.sign({
        id: savedUser._id
    }, process.env.SECRET, {
        expiresIn: 86400 // expires in 24 hours
    });
    return token;
} catch (e) {
  // return a Error message describing the reason     
  throw Error("Error while Creating User");
}
}

module.exports = {
  createUser
};