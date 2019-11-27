// this one will serve during the dev phase
// as I don't want to loose test time with the auth
// to be able to post
async function fakeAuthMiddleware(req, res, next) {
  // pass this information to the next middleware
  // we will be this user for the tests
  res.locals.uid = '5ddcf10313e58b38b315f859';
  next();
}

module.exports = fakeAuthMiddleware;