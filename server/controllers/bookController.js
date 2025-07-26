import Book from '../models/bookModel.js';
import cloudinary from '../config/cloudinary.js';
import streamifier from 'streamifier';

// @desc    Create a new book
// @route   POST /api/books
export const createBook = async (req, res) => {
  const { title, author, genre, description, publicationYear, seriesName } = req.body;

  if (!req.file) {
    return res.status(400).json({ message: 'Cover image is required.' });
  }

  // Upload image to Cloudinary from buffer
  const streamUpload = (req) => {
    return new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream((error, result) => {
        if (result) {
          resolve(result);
        } else {
          reject(error);
        }
      });
      streamifier.createReadStream(req.file.buffer).pipe(stream);
    });
  };

  try {
    const result = await streamUpload(req);

    const book = await Book.create({
      title,
      author,
      genre,
      description,
      publicationYear,
      seriesName,
      coverImage: {
        url: result.secure_url,
        public_id: result.public_id,
      },
    });

    res.status(201).json(book);
  } catch (error) {
    res.status(500).json({ message: `Error creating book: ${error.message}` });
  }
};

// @desc    Get all books
// @route   GET /api/books
export const getBooks = async (req, res) => {
  try {
    const books = await Book.find({}).sort({ createdAt: -1 });
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get a single book by ID
// @route   GET /api/books/:id
export const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (book) {
      res.json(book);
    } else {
      res.status(404).json({ message: 'Book not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update a book
// @route   PUT /api/books/:id
export const updateBook = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        
        // Update text fields
        const { title, author, genre, description, publicationYear, seriesName } = req.body;
        book.title = title || book.title;
        book.author = author || book.author;
        book.genre = genre || book.genre;
        book.description = description || book.description;
        book.publicationYear = publicationYear || book.publicationYear;
        book.seriesName = seriesName || book.seriesName;
        
        // If a new file is uploaded, update the image
        if (req.file) {
            // Delete old image from Cloudinary
            await cloudinary.uploader.destroy(book.coverImage.public_id);
            
            // Upload new image
            const result = await new Promise((resolve, reject) => {
                const stream = cloudinary.uploader.upload_stream((error, result) => {
                    if (result) resolve(result);
                    else reject(error);
                });
                streamifier.createReadStream(req.file.buffer).pipe(stream);
            });
            
            book.coverImage = {
                url: result.secure_url,
                public_id: result.public_id,
            };
        }
        
        const updatedBook = await book.save();
        res.json(updatedBook);

    } catch (error) {
        res.status(500).json({ message: `Error updating book: ${error.message}` });
    }
};


// @desc    Delete a book
// @route   DELETE /api/books/:id
export const deleteBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);

    if (book) {
      // Delete the image from Cloudinary first
      await cloudinary.uploader.destroy(book.coverImage.public_id);
      
      await Book.deleteOne({ _id: req.params.id });
      res.json({ message: 'Book removed successfully' });
    } else {
      res.status(404).json({ message: 'Book not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};