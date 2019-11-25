const userService = require('../services/userService');

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

async function loginUser(req, res, next) {
  // Req.Body contains the form submit values.
  const User = {
    email: req.body.email,
    password: req.body.password
  }
  try {
    // Calling the Service function with the new object from the Request Body
    const loginUser = await UserService.loginUser(User);
    return res.status(201).json({data: loginUser, message: "Succesfully login"})
  } catch (e) {
    //Return an Error Response Message with Code and the Error Message.
    return res.status(400).json({status: 400, message: "Invalid username or password"})
  }
}

module.exports = {
  createUser,
  loginUser
};