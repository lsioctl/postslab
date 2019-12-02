// TODO find a way to avoid path, as this will
// not support change in directory structure
require('dotenv').config({ path: '../.env' });
const JWT_SECRET = process.env.JWT_SECRET;

const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

/**
 * Authentication middleware
 * we only check if the user has a valid JWT
 * and pass to the next middleware
 * 
 * TODO: move part in User service ?
 */
async function authMiddleware(req, res, next) {
  // 1. See if there is a token on the request...if not, reject immediately
  // req.cookies is set up by the cookieParse middleware
  const userJWT = req.cookies.postslabJWT;
  if (!userJWT) {
    res.status(401).json({status: 401, message: 'Invalid or missing authorization token'});
  //2. There's a token; see if it is a valid one and retrieve the payload
  } else {
    const userJWTPayload = jwt.verify(userJWT, JWT_SECRET);
    console.log(userJWTPayload);

    if (!userJWTPayload) {
      //Kill the token since it is invalid
      res.clearCookie('postslabJWT');
      res.status(401).json({status: 401, message: 'Invalid or missing authorization token'});
    } else {
      //3. There's a valid token...see if it is one we have in the db as a logged-in user
      const user = await User.findOne({ _id: userJWTPayload._id, 'tokens.token': userJWT});
      if (!user) {
        res.status(401).json({status: 401, message: 'User not currently logged in'});
      }
      else {
        console.log(`Valid user in authMiddleware: ${user.email}, ${user._id}`);
        // pass this information to the next middleware
        res.locals.uid = user._id;
        next();
      }
    }
  } 
}

module.exports = authMiddleware;