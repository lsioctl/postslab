const userService = require('../services/userService');

async function create(req, res, next) {
  // Req.Body contains the form submit values.
  const user = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  };
  try {
    // Calling the Service function with the new object from the Request Body
    const createdUser = await userService.create(user)
    return res.status(201).json({
      email: createdUser, 
      message: "Succesfully Created User"}
    );
  } catch (e) {
    console.log(e);
    //Return an Error Response Message with Code and the Error Message.
    return res.status(400).json({status: 400, message: "User Creation was Unsuccesfull"})
  };
};

async function login(req, res, next) {
  // Req.Body contains the form submit values.
  const user = {
    email: req.body.email,
    password: req.body.password
  };
  try {
    // Calling the Service function with the new object from the Request Body
    const token = await userService.login(user);
    // Session HTTP Only http cookie, which restricts access from the client
    const cookieOptions = {
      httpOnly: true,
      // session cookie only
      expires: 0
    };
    res.cookie('postslabJWT', token, cookieOptions);
    return res.status(201).json({user: user.email, message: "Succesfully logged-in"});
  } catch (e) {
    console.log(e);
    //Return an Error Response Message with Code and the Error Message.
    return res.status(400).json({status: 400, message: "Invalid username or password"})
  };
};

async function logout(req, res, next) {
  try {
    // To implement: remove token from User collection
    // const ... = await userService.logout(...);
  } catch (e) {
    console.log(e);
  } finally {
    // anyway we remove the cookie from the browser
    res.clearCookie('postslabJWT');
    return res.status(201).json({message: "Succesfully logged-out"});
  };
};

module.exports = {
  create,
  login,
  logout
};