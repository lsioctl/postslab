// TODO find a way to avoid path, as this will
// not support change in directory structure
require('dotenv').config({ path: '../.env' });
const JWT_SECRET = process.env.JWT_SECRET;

const jwt = require('jsonwebtoken');

function getToken(req) {
  if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') { 
    // Authorization: Bearer g1jipjgi1ifjioj
    // Handle token presented as a Bearer token in the Authorization header
    return req.headers.authorization.split(' ')[1];
  } else if (req.query && req.query.token) {
    // Handle token presented as URI param
    return req.query.token;
  } else if (req.cookies && req.cookies.token) {
    // Handle token presented as a cookie parameter
    return req.cookies.token;
  }
  return null; 
}

/**
 * Authentication middleware
 * we only check if the user has a valid JWT
 * and pass to the next middleware
 */
function authMiddleware(req, res, next) {
    const token = getToken(res);
    // let's be not too much explicit on why it failed
    const msg = {auth: false, message: 'authentication error'};
    if (!token) {
      return res.status(401).send(msg);
    }
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).send(msg);
      }
      // right token, we can proceed to the next middleware
      next();
    });
}

module.exports = authorization;

/*

from: https://medium.com/swlh/jwt-authentication-authorization-in-nodejs-express-mongodb-rest-apis-2019-ad14ec818122
const jwt = require('jsonwebtoken')
const User = require('../models/User')

const auth = async(req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '')
    const data = jwt.verify(token, process.env.JWT_KEY)
    try {
        const user = await User.findOne({ _id: data._id, 'tokens.token': token })
        if (!user) {
            throw new Error()
        }
        req.user = user
        req.token = token
        next()
    } catch (error) {
        res.status(401).send({ error: 'Not authorized to access this resource' })
    }

}
module.exports = auth
*/