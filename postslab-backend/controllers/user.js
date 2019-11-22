const userService = require('../services/user');

async function createUser (req, res, next) {
  // Req.Body contains the form submit values.
  const User = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  }
  try {
    // Calling the Service function with the new object from the Request Body
    const createdUser = await userService.createUser(User)
    return res.status(201).json({
      token: createdUser, 
      message: "Succesfully Created User"}
    );
  } catch (e) {
    //Return an Error Response Message with Code and the Error Message.
    return res.status(400).json({status: 400, message: "User Creation was Unsuccesfull"})
  }
}

module.exports = {
  createUser
};