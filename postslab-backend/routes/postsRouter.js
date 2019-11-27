const express = require('express');
const router = express.Router();

const postController = require('../controllers/postController');
const authMiddleware = require('../middlewares/auth');

// Get all
router.get('/', authMiddleware, postController.list);

// Get one
router.get('/:id', (req, res) => {
});

// Create one
router.post('/', authMiddleware, postController.create);

// Update one
router.patch('/:id', (req, res) => {
});

// Delete one
router.delete('/:id', (req, res) => {
});

module.exports = router;

