const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/auth');

// Create one
router.post('/signup', userController.create);
router.post('/login', userController.login);
router.post('/authtest', authMiddleware, (req, res) => {
  return res.status(200).json({user: res.locals.uid, message: "Succesfully logged-in"});
});
router.post('/logout', authMiddleware, userController.logout);
module.exports = router;

