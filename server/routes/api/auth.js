const express = require('express');
const { register, login } = require('../../controllers/authController');
const { protect, authorize } = require('../../middleware/authMiddleware');

const router = express.Router();

// @route   POST /api/auth/register
// @desc    Register a new user
// @access  Private (Admin only)
router.post('/register', protect, authorize('Admin'), register);

// @route   POST /api/auth/login
// @desc    Login user & get token
// @access  Public
router.post('/login', login);

module.exports = router;
