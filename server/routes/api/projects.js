const express = require('express');
const {
  getAllProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
} = require('../../controllers/projectController');
const { protect, authorize } = require('../../middleware/authMiddleware');

const router = express.Router();

router
  .route('/')
  .get(getAllProjects)
  .post(protect, authorize('Admin', 'Head'), createProject);

router
  .route('/:id')
  .get(getProjectById)
  .put(protect, authorize('Admin', 'Head'), updateProject)
  .delete(protect, authorize('Admin'), deleteProject);

module.exports = router;