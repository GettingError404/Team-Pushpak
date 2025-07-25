const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a project title'],
    trim: true,
    unique: true,
  },
  description: {
    type: String,
    required: [true, 'Please add a project description'],
  },
  timeline: {
    type: String, // e.g., "Jan 2024 - Present"
    required: true,
  },
  category: {
    type: String,
    enum: ['Hexacopter', 'Quadcopter', 'AI Integration', 'Software'],
    required: [true, 'Please select a category for the project'],
  },
  contributors: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
    },
  ],
  media: [
    {
      type: String, // URLs to images or videos
    },
  ],
  githubLink: {
    type: String,
  },
  pdfLink: {
    type: String, // Link to a detailed project report PDF
  },
  status: {
    type: String,
    enum: ['Active', 'Completed', 'Archived'],
    default: 'Active',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Project', ProjectSchema);