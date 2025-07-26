import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  genre: { type: String },
  description: { type: String },
  publicationYear: { type: Number },
  seriesName: { type: String },
  coverImage: {
    url: { type: String, required: true },
    public_id: { type: String, required: true }
  },
  // You might want to link a book to the user who added it
  // user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
}, {
  timestamps: true,
});

const Book = mongoose.model('Book', bookSchema);
export default Book;