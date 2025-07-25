const express = require('express');
const { getAllUsers } = require('../../controllers/userController');
const { protect, authorize } = require('../../middleware/authMiddleware');

const router = express.Router();

// @route   GET /api/users
// @desc    Get all users for selection fields
// @access  Private (Admin or Head)
router.route('/').get(protect, authorize('Admin', 'Head'), getAllUsers);

module.exports = router;
