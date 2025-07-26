import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';

export default function Home() {
  return (<div classname="w-screen">
    <div className="flex flex-col min-h-screen text-[#00272B]">
      {/* Full-width Fixed Navbar */}
      <nav className="w-full bg-[#457B9D] text-white shadow-md py-5 px-6 flex items-center justify-between fixed top-0 left-0 z-50">
        <div className="flex items-center space-x-8 pl-4">
          <div className="text-2xl font-bold">BookCatalog</div>

          {/* Home (highlighted) */}
          <span className="text-[#C7F0BD] font-semibold">Home</span>

           <Link to="/home" className="text-white font-semibold transition hover:text-[#C7F0BD]">Home</Link>
        
        {/* THIS IS THE NEW LINK */}
        <Link to="/books" className="text-[#C7F0BD] font-semibold transition hover:underline">
            Books
        </Link>


          {/* Profile */}

          <Link to="/update-profile" className="text-white font-semibold transition hover:text-[#C7F0BD]">
            Profile
          </Link>
          

          {/* Add Books */}
          <Link to="/add-book" className="text-white font-semibold transition hover:text-[#C7F0BD]">
            Add Books
          </Link>

          {/* Cart (hidden on small screens) */}
          <Link to="/cart" className="hidden sm:inline text-white font-semibold transition hover:text-[#C7F0BD]">
            🛒 Cart
          </Link>
        </div>

        {/* Right side empty since no login/register required */}
        <div className="md:flex space-x-4"></div>

        {/* Mobile menu icon (optional/redundant here) */}
        <div className="md:hidden">
          <Link to="/auth" className="text-white text-2xl">
            &#9776;
          </Link>
        </div>
      </nav>

      {/* Home Page Main Content */}
      <main className="pt-32 px-6 text-center">
        <h1 className="text-3xl font-bold text-[#457B9D] mb-4">Welcome Back!</h1>
        <p className="text-gray-700">
          This is your personalized home dashboard. Use the navigation to update your profile, add books, or check your cart.
        </p>
      </main>
    
    </div>   <Footer /></div>
  );
}



