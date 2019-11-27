const express = require('express');
const router = express.Router();

const postController = require('../controllers/postController');
const fakeAuthMiddleware = require('../middlewares/fakeAuth');

// Get all
router.get('/', fakeAuthMiddleware, postController.list);

// Get one
router.get('/:id', (req, res) => {
});

// Create one
router.post('/', fakeAuthMiddleware, postController.create);

// Update one
router.patch('/:id', (req, res) => {
});

// Delete one
router.delete('/:id', (req, res) => {
});

module.exports = router;

