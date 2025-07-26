import { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import { useNavigate } from "react-router-dom";
export default function AuthGateway({ onClose }) {
  const navigate = useNavigate(); // ✅ Step 2

  // ✅ Step 3: Define the close handler
  const handleClose = () => {
    navigate(-1); // or use navigate(-1) to go back
  };
  const [showLogin, setShowLogin] = useState(null); // null = undecided, true = login, false = register

  return (
    <div className="fixed inset-0 bg-[#00272B]/70 flex items-center justify-center z-50">
      <div className="bg-[#457B9D] text-white p-6 rounded-lg w-11/12 max-w-md relative shadow-lg">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-black text-xl hover:text-red-500"
        >
          ❌
        </button>

        {/* Step 1: Ask user */}
        {showLogin === null && (
          <div className="text-center space-y-4">
            <h2 className="text-xl font-semibold">Welcome to BookCatalog!</h2>
            <p>Do you already have an account?</p>
            <div className="flex justify-center space-x-4 mt-4">
              <button
                onClick={() => setShowLogin(true)}
                className="bg-[#C7F0BD] text-[#00272B] px-4 py-2 rounded-md hover:opacity-90 transition"
              >
                Login
              </button>
              <button
                onClick={() => setShowLogin(false)}
                className="bg-white text-[#457B9D] px-4 py-2 rounded-md border hover:bg-[#f0f0f0] transition"
              >
                Register
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Show actual forms */}
        {showLogin === true && (
          <>
            <h2 className="text-xl font-semibold mb-4">Login</h2>
            <div className="bg-white p-4 text-black rounded-md">
              <Login />
            </div>
          </>
        )}

        {showLogin === false && (
          <>
            <h2 className="text-xl font-semibold mb-4">Register</h2>
            <div className="bg-white p-4 text-black rounded-md">
              <Register />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
