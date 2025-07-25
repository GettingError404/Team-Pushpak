const User = require('../models/User');
const asyncHandler = require('../utils/asyncHandler');

// @desc    Get all users (for selection lists)
// @route   GET /api/users
// @access  Private/Admin or Head
exports.getAllUsers = asyncHandler(async (req, res, next) => {
  const users = await User.find().select('_id name');
  res.status(200).json({ success: true, count: users.length, data: users });
});
