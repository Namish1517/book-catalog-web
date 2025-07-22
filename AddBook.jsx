import { useState } from 'react';

function AddBook() {
  const [moreOptions, setMoreOptions] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    genre: '',
    description: '',
    index: '',
    coverImage: null,
    publicationYear: '',
    seriesName: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const genres = [
    'Fiction',
    'Non-fiction',
    'Science',
    'Biography',
    'Fantasy',
    'History',
    'Mystery',
    'Romance',
    'Self-Help',
    'Other'
  ];

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({ ...formData, [name]: type === 'file' ? files[0] : value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = 'Title is required';
    if (!formData.author.trim()) newErrors.author = 'Author is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    const valid = Object.keys(validationErrors).length === 0;
    setSubmitted(valid);

    if (valid) {
      console.log('Form Submitted:', formData);
    }
  };

  return (
    <div className="sm:max-w-sm md:max-w-xl mx-auto p-6 bg-[#457B9D] rounded-2xl shadow-lg text-white transition-all duration-300">
      <h2 className="text-2xl font-bold mb-4 text-center">Add New Book</h2>

      <form className="space-y-4" onSubmit={handleSubmit} noValidate>
        {/* Title */}
        <div>
          <label htmlFor="title" className="block font-medium">
            Title <span className="text-red-300">*</span>
          </label>
          <input
            type="text"
            id="title"
            name="title"
            required
            className="w-full p-2 rounded bg-white text-black mt-1"
            value={formData.title}
            onChange={handleChange}
          />
          {errors.title && <p className="text-sm text-red-200 mt-1">{errors.title}</p>}
        </div>

        {/* Author */}
        <div>
          <label htmlFor="author" className="block font-medium">
            Author <span className="text-red-300">*</span>
          </label>
          <input
            type="text"
            id="author"
            name="author"
            required
            className="w-full p-2 rounded bg-white text-black mt-1"
            value={formData.author}
            onChange={handleChange}
          />
          {errors.author && <p className="text-sm text-red-200 mt-1">{errors.author}</p>}
        </div>

        {/* Genre */}
        <div>
          <label htmlFor="genre" className="block font-medium">
            Genre (optional)
          </label>
          <select
            id="genre"
            name="genre"
            className="w-full p-2 rounded bg-white text-black mt-1"
            value={formData.genre}
            onChange={handleChange}
          >
            <option value="">Select genre</option>
            {genres.map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </select>
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className="block font-medium">
            Description (optional)
          </label>
          <textarea
            id="description"
            name="description"
            rows={3}
            className="w-full p-2 rounded bg-white text-black mt-1"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
        </div>

        {/* Book Index */}
        <div>
          <label htmlFor="index" className="block font-medium">
            Book Index (optional)
          </label>
          <input
            type="text"
            id="index"
            name="index"
            className="w-full p-2 rounded bg-white text-black mt-1"
            placeholder="Leave blank if not sure; system will auto-generate"
            value={formData.index}
            onChange={handleChange}
          />
        </div>

        {/* Cover Image */}
        <div>
          <label htmlFor="coverImage" className="block font-medium">
            Cover Image (optional)
          </label>
          <input
            type="file"
            id="coverImage"
            name="coverImage"
            className="w-full p-2 rounded bg-white text-black mt-1"
            onChange={handleChange}
          />
        </div>

        {/* More Options Toggle */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="moreOptions"
            checked={moreOptions}
            onChange={() => setMoreOptions(!moreOptions)}
          />
          <label htmlFor="moreOptions" className="cursor-pointer font-medium">
            More Options
          </label>
        </div>

        {/* More Options Section */}
        {moreOptions && (
          <div className="space-y-4 p-4 bg-[#588157] rounded-lg transition-all duration-200">
            <div>
              <label htmlFor="publicationYear" className="block font-medium">
                Publication Year (optional)
              </label>
              <input
                type="number"
                name="publicationYear"
                id="publicationYear"
                className="w-full p-2 rounded bg-white text-black mt-1"
                value={formData.publicationYear}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="seriesName" className="block font-medium">
                Series Name (optional)
              </label>
              <input
                type="text"
                name="seriesName"
                id="seriesName"
                className="w-full p-2 rounded bg-white text-black mt-1"
                value={formData.seriesName}
                onChange={handleChange}
              />
            </div>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#457B9D] hover:bg-[#588157] hover:text-white text-white font-semibold py-2 rounded shadow-md transition-all duration-200 border border-[#593D3B]"
        >
          Submit
        </button>

        {/* Submission Feedback */}
        {submitted && Object.keys(errors).length === 0 && (
          <p className="text-green-200 mt-2 text-sm text-center animate-pulse">
            Book submitted successfully!
          </p>
        )}
      </form>
    </div>
  );
}

export default AddBook;

