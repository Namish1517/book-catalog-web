import express from 'express';
import {
  createBook,
  getBooks,
  getBookById,
  updateBook,
  deleteBook,
} from '../controllers/bookController.js';
import upload from '../middleware/uploadMiddleware.js';

const router = express.Router();

// Note: `upload.single('coverImage')` expects the file to be sent
// with the field name 'coverImage' in the form data.
router.route('/').get(getBooks).post(upload.single('coverImage'), createBook);
router.route('/:id').get(getBookById).put(upload.single('coverImage'), updateBook).delete(deleteBook);

export default router;