import express from 'express';
const router = express.Router();

// @route   GET api/
// @desc    Test route
// @access  Public
router.get('/', (req, res) => {
    res.json({ message: 'Welcome to the Team Pushpak API' });
});

export default router;
