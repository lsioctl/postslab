const postService = require('../services/postService');

async function create(req, res, next) {
  // Req.Body contains the form submit values.
  const post = {
    body: req.body.body,
    // this information is send by the authMiddleware
    user: res.locals.uid,
  };
  try {
    // Calling the Service function with the new object from the Request Body
    const createdPost = await postService.create(post);
    return res.status(201).json({
      _id: createdPost._id, 
      message: "Succesfully Created Post"}
    );
  } catch (e) {
    //Return an Error Response Message with Code and the Error Message.
    return res.status(400).json({status: 400, message: "User Creation was Unsuccesfull"})
  };
};

module.exports = {
  create,
};