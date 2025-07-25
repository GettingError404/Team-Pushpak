const express = require('express');
const {
  getAllNotices,
  getNoticeById,
  createNotice,
  updateNotice,
  deleteNotice,
} = require('../../controllers/noticeController');
const { protect, authorize } = require('../../middleware/authMiddleware');

const router = express.Router();

router
  .route('/')
  .get(getAllNotices)
  .post(protect, authorize('Admin'), createNotice);

router
  .route('/:id')
  .get(getNoticeById)
  .put(protect, authorize('Admin'), updateNotice)
  .delete(protect, authorize('Admin'), deleteNotice);

module.exports = router;