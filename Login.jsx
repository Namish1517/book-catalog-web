import { useState } from 'react';

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    // Future: Add API call or toast here
  };

  return (
    <div className="sm:max-w-sm md:max-w-md mx-auto p-6 rounded-2xl shadow-md bg-[#457B9D] text-white transition-all duration-300 ease-in-out">
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Email */}
        <div className="transition duration-300">
          <label htmlFor="email" className="block mb-1 font-medium">
            Email<span className="text-red-300">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full p-2 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#588157] transition"
            placeholder="Enter your email"
          />
        </div>

        {/* Password */}
        <div className="transition duration-300">
          <label htmlFor="password" className="block mb-1 font-medium">
            Password<span className="text-red-300">*</span>
          </label>
          <div className="relative">
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              required
              className="w-full p-2 rounded bg-white text-black pr-10 focus:outline-none focus:ring-2 focus:ring-[#588157] transition"
              placeholder="Enter your password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-sm text-[#457B9D] hover:text-[#588157] transition"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        {/* Forgot Password */}
        <div className="text-right">
          <button
            type="button"
            className="text-sm text-white underline hover:text-[#C7F0BD] transition"
          >
            Forgot Password?
          </button>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-[#593D3B] hover:bg-[#C7F0BD] hover:text-black text-white font-semibold py-2 rounded transition-all duration-200"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
