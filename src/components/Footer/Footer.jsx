import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-gray-300 px-6 md:px-16 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Branding */}
        <div>
          <h1 className="text-white text-2xl font-bold">SHINE CREW</h1>
          <p className="text-sm mt-2">
            Premium car detailing services with professional care and shine that
            lasts.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#services" className="hover:text-red-500">
                Services
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-red-500">
                About Us
              </a>
            </li>
            <li>
              <a href="#gallery" className="hover:text-red-500">
                Gallery
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-red-500">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact + Social */}
        <div>
          <h3 className="text-white font-semibold mb-3">Contact</h3>
          <p className="text-sm">134 Cadillac Crescent, Brampton, ON</p>
          <p className="text-sm">Email: info.shinecrewdetailing@gmail.com</p>
          <p className="text-sm mb-4">Phone: +1 (437) 566-1305</p>

          <div className="flex gap-4 text-xl">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/16471234567"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Shine Crew Detailing. All rights reserved.
      </div>
    </footer>
  );
}
