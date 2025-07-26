import './App.css';
import Footer from './Components/Footer';
import AuthGateway from './Components/AuthGateway';
import Login from './Components/Login';
import Register from './Components/Register';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from "./pages/Home";
import UpdateProfile from "./Components/UpdateProfile";
import AddBook from "./Components/AddBook";
import BooksDashboard from './pages/BooksDashboard';
import BookDetails from './pages/BookDetails.jsx';
import EditBook from './pages/EditBook.jsx'


export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white text-gray-800 p-0 m-0">
        <Routes>
          {/* Landing Page */}
          <Route
            path="/"
            element={
              <>
                {/* ✅ Navbar ONLY on landing page */}
                <nav className="w-full bg-[#457B9D] text-white shadow-md py-5 px-6 flex items-center justify-between fixed top-0 left-0 z-50">
                  <div className="flex items-center space-x-8 pl-4">
                    <div className="text-2xl font-bold">BookCatalog</div>
                    <Link to="/" className="text-[#C7F0BD] font-semibold transition hover:underline">
                      Home
                    </Link>
                    <Link to="/books" className="text-white font-semibold transition hover:text-[#C7F0BD]">
      Books
    </Link>
                    <Link to="/auth" className="text-white font-semibold transition hover:text-[#C7F0BD]">
                      Profile
                    </Link>
                    <Link to="/auth" className="hidden sm:inline text-white font-semibold transition hover:text-[#C7F0BD]">
                      🛒Cart
                    </Link>
                  </div>

                  <div className="hidden md:flex space-x-4">
                    <Link
                      to="/login"
                      className="px-4 py-1 rounded-md border border-white hover:bg-white hover:text-[#457B9D] transition"
                    >
                      Login
                    </Link>
                    <Link
                      to="/register"
                      className="px-4 py-1 rounded-md bg-[#C7F0BD] text-[#00272B] hover:opacity-90 transition"
                    >
                      Register
                    </Link>
                  </div>

                  <div className="md:hidden">
                    <Link to="/auth" className="text-white text-2xl">
                      &#9776;
                    </Link>
                  </div>
                </nav>

                {/* Main Landing Content */}
                <main className="pt-32 pb-16 px-6 text-center flex-grow">
             <h1 className="text-4xl font-bold text-[#457B9D] mb-4">
          Welcome to BookCatalog
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Explore, manage, and share your favorite books easily. Register to get started!
        </p>
      
      {/* About Section */}
      <section
        className="bg-white text-gray-800 pt-12 pb-20 px-6 md:px-20 -mt-8"
        id="about"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#457B9D] mb-6">
            About BookCatalog
          </h2>
          <p className="text-lg leading-relaxed">
            BookCatalog is your personal library in the cloud. Effortlessly add, manage, and explore books with just a few clicks. Whether you're a reader, a librarian, or a book collector, our platform gives you complete control over your collection — all in one beautiful place.
          </p>
        </div>
      </section>

 

           {/* Key Features Section */}
<section className="bg-[#F9FAFB] text-gray-800 py-16 px-6 md:px-20" id="features">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl font-bold text-[#457B9D] mb-6">Key Features</h2>
    <p className="text-gray-600 mb-12">
      Discover what makes BookCatalog your ultimate book management companion.
    </p>

    <div className="grid gap-8 md:grid-cols-3">
      {/* Feature 1 */}
      <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
        <div className="flex justify-center mb-4">
          <svg className="w-12 h-12 text-[#588157]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path d="M4 19.5A2.5 2.5 0 006.5 22h11a2.5 2.5 0 002.5-2.5V6H4v13.5z" />
            <path d="M16 2v4M8 2v4M4 10h16" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-2">Easy Book Management</h3>
        <p className="text-gray-600">Add, edit, or remove books from your personal library effortlessly.</p>
      </div>

      {/* Feature 2 */}
      <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
        <div className="flex justify-center mb-4">
          <svg className="w-12 h-12 text-[#588157]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-2">Search & Explore</h3>
        <p className="text-gray-600">Find books instantly by title, author, or genre within your collection.</p>
      </div>
       
             {/* Feature 3 */}
      <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
        <div className="flex justify-center mb-4">
          <svg className="w-12 h-12 text-[#588157]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-2">Cover Image Upload</h3>
        <p className="text-gray-600">Upload book covers to personalize and visually organize your collection.</p>
      </div>
    </div>
  </div>
</section>

{/* Demo Screenshot Section */}
<section className="bg-white text-gray-800 py-16 px-6 md:px-20" id="demo">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl font-bold text-[#457B9D] mb-6">Live Demo Preview</h2>
    <p className="text-gray-600 mb-8">
      Here's a glimpse of what the BookCatalog app looks like in action.
    </p>

    {/* Replace src below with actual image path when available */}
    <div className="w-full max-w-4xl mx-auto border-2 border-dashed border-[#588157] rounded-lg p-6 bg-[#F9FAFB]">
      <p className="text-[#593D3B] font-medium">📸 Demo Screenshot will be placed here.</p>
      {/* Example image placeholder (hidden for now) */}
      {/* <img src="/path/to/screenshot.png" alt="Demo Screenshot" className="w-full rounded-lg shadow-md" /> */}
    </div>
  </div>
</section>



{/* Reviews Section */}
<section className="bg-[#F9FAFB] text-gray-800 py-16 px-6 md:px-20" id="reviews">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl font-bold text-[#457B9D] mb-12">What Readers Say</h2>

    {/* Scrollable Container */}
    <div className="flex gap-6 overflow-x-auto scrollbar-thin scrollbar-thumb-[#457B9D]/50 scrollbar-track-transparent snap-x snap-mandatory">
      {/* Review 1 */}
      <div className="min-w-[100%] sm:min-w-[50%] lg:min-w-[33.33%] bg-white shadow-md rounded-lg p-6 snap-start">
        <h3 className="font-semibold text-[#588157] mb-2">Anjali Verma</h3>
        <p className="text-yellow-500 mb-2">★★★★★</p>
        <p className="text-gray-600">"BookCatalog made managing my book collection effortless. It's clean, fast, and easy to use."</p>
      </div>

      {/* Review 2 */}
      <div className="min-w-[100%] sm:min-w-[50%] lg:min-w-[33.33%] bg-white shadow-md rounded-lg p-6 snap-start">
        <h3 className="font-semibold text-[#588157] mb-2">Ravi Mehta</h3>
        <p className="text-yellow-500 mb-2">★★★★☆</p>
        <p className="text-gray-600">"The interface is beautiful and intuitive. Adding books is super fast."</p>
      </div>

      {/* Review 3 */}
      <div className="min-w-[100%] sm:min-w-[50%] lg:min-w-[33.33%] bg-white shadow-md rounded-lg p-6 snap-start">
        <h3 className="font-semibold text-[#588157] mb-2">Sana Khan</h3>
        <p className="text-yellow-500 mb-2">★★★★★</p>
        <p className="text-gray-600">"I love how I can organize everything in one place. Totally recommended!"</p>
      </div>
    </div>
  </div>
</section>

              {/* ...Your existing landing page sections... */}

              {/* Call-to-action Section */}
              <section className="w-full bg-[#457B9D] text-white py-10 px-0 text-center m-0">
                <h2 className="text-2xl font-semibold mb-4">Ready to get started?</h2>
                <div className="flex justify-center gap-4">
                  <Link
                    to="/login"
                    className="px-6 py-2 rounded-md border border-white hover:bg-white hover:text-[#457B9D] transition"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="px-6 py-2 rounded-md bg-[#C7F0BD] text-[#00272B] hover:opacity-90 transition"
                  >
                    Register
                  </Link>
                </div>
              </section>

              <Footer />
            </main>
              </>
            }
          />

          {/* Other Pages (No Navbar) */}
          <Route path="/home" element={<Home />} />
          <Route path="/auth" element={<AuthGateway />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
<Route path="/update-profile" element={<UpdateProfile />} />
<Route path="/add-book" element={<AddBook />} />
<Route path="/books" element={<BooksDashboard />} />
<Route path="/books/:id" element={<BookDetails />} /> 
    <Route path="/edit-book/:id" element={<EditBook />} />
        </Routes>
      </div>
    </Router>
  );
}
