export default function Footer() {
  return (
    <footer className="w-full bg-[#457B9D] text-white py-10 px-0 md:px-20 mt-0 m-0">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#features" className="hover:underline">Features</a></li>
            <li><a href="#reviews" className="hover:underline">Reviews</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
          <ul className="text-sm space-y-2">
            <li>Email: support@bookcatalog.com</li>
            <li>Phone: +91 8087166816</li>
            <li>Location: Delhi, India</li>
          </ul>
        </div>

        {/* Social/Legal */}
        <div className="flex flex-col items-center text-center">
          <h4 className="text-xl font-semibold mb-4">Stay Connected</h4>
          <div className="flex justify-center space-x-4 mb-4">
            <a href="https://youtu.be/dQw4w9WgXcQ?si=JfBsCNY8jQvtzvYS" target="_blank" className="hover:underline text-sm">Instagram</a>
            <a href="https://github.com/Namish1517" target="_blank" className="hover:underline text-sm">GitHub</a>
            <a href="https://www.linkedin.com/in/namish-sharma-662625331?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="hover:underline text-sm">LinkedIn</a>
          </div>
          <p className="text-xs text-white/80">
            &copy; {new Date().getFullYear()} BookCatalog. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
