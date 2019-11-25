const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

// Create one
router.post('/signup', userController.create);
router.post('/login', userController.login);

module.exports = router;

