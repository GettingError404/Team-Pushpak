const Project = require('../models/Project');
const asyncHandler = require('../utils/asyncHandler');
const ErrorResponse = require('../utils/ErrorResponse');

// @desc    Get all projects
// @route   GET /api/projects
// @access  Public
exports.getAllProjects = asyncHandler(async (req, res, next) => {
  const projects = await Project.find().sort({ createdAt: -1 }).populate('contributors', 'name role');
  res.status(200).json({ success: true, count: projects.length, data: projects });
});

// @desc    Get single project
// @route   GET /api/projects/:id
// @access  Public
exports.getProjectById = asyncHandler(async (req, res, next) => {
  const project = await Project.findById(req.params.id).populate('contributors', 'name role');
  if (!project) {
    return next(new ErrorResponse(`Project not found with id of ${req.params.id}`, 404));
  }
  res.status(200).json({ success: true, data: project });
});

// @desc    Create new project
// @route   POST /api/projects
// @access  Private/Admin or Head
exports.createProject = asyncHandler(async (req, res, next) => {
  const project = await Project.create(req.body);
  res.status(201).json({ success: true, data: project });
});

// @desc    Update project
// @route   PUT /api/projects/:id
// @access  Private/Admin or Head
exports.updateProject = asyncHandler(async (req, res, next) => {
  const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!project) {
    return next(new ErrorResponse(`Project not found with id of ${req.params.id}`, 404));
  }
  res.status(200).json({ success: true, data: project });
});

// @desc    Delete project
// @route   DELETE /api/projects/:id
// @access  Private/Admin
exports.deleteProject = asyncHandler(async (req, res, next) => {
  const project = await Project.findByIdAndDelete(req.params.id);
  if (!project) {
    return next(new ErrorResponse(`Project not found with id of ${req.params.id}`, 404));
  }
  res.status(200).json({ success: true, data: {} });
});
