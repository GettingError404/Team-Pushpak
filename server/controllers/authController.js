const User = require('../models/User');
const jwt = require('jsonwebtoken');
const asyncHandler = require('../utils/asyncHandler');
const ErrorResponse = require('../utils/ErrorResponse');

// Generate JWT
const generateToken = (id, role) => {
  return jwt.sign({ id, role }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

// @desc    Register user
// @route   POST /api/auth/register
// @access  Private/Admin
exports.register = asyncHandler(async (req, res, next) => {
  const { name, email, password, role, domain } = req.body;

  // Create user
  const user = await User.create({
    name,
    email,
    password,
    role,
    domain
  });

  res.status(201).json({ success: true, msg: 'User registered successfully' });
});


// @desc    Login user
// @route   POST /api/auth/login
// @access  Public
exports.login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  // Validate email & password
  if (!email || !password) {
    return next(new ErrorResponse('Please provide an email and password', 400));
  }

  // Check for user
  const user = await User.findOne({ email }).select('+password');

  if (!user) {
    return next(new ErrorResponse('Invalid credentials', 401));
  }

  // Check if password matches
  const isMatch = await user.matchPassword(password);

  if (!isMatch) {
     return next(new ErrorResponse('Invalid credentials', 401));
  }
    
  // Create token
  const token = generateToken(user._id, user.role);
    
  // Respond with token wrapped in data object for consistency
  res.status(200).json({ success: true, data: { token } });
});