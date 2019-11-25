const userService = require('../services/userService');

async function create(req, res, next) {
  // Req.Body contains the form submit values.
  const user = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  }
  try {
    // Calling the Service function with the new object from the Request Body
    const createdUser = await userService.create(user)
    return res.status(201).json({
      email: createdUser, 
      message: "Succesfully Created User"}
    );
  } catch (e) {
    //Return an Error Response Message with Code and the Error Message.
    return res.status(400).json({status: 400, message: "User Creation was Unsuccesfull"})
  }
}

async function login(req, res, next) {
  // Req.Body contains the form submit values.
  const user = {
    email: req.body.email,
    password: req.body.password
  }
  try {
    // Calling the Service function with the new object from the Request Body
    const token = await userService.login(user);
    console.log('hahahaha' + token);
    // Session HTTP Only http cookie, which restricts access from the client
    const cookieOptions = {
      httpOnly: true,
      expires: 0 
     }
    res.cookie('postslabJWT', token, cookieOptions);
    return res.status(201).json({data: user.email, message: "Succesfully logged-in"});
  } catch (e) {
    console.log(e);
    //Return an Error Response Message with Code and the Error Message.
    return res.status(400).json({status: 400, message: "Invalid username or password"})
  }
}

module.exports = {
  create,
  login
};