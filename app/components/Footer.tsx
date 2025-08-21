import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap gap-8 mb-8">
          {/* About Column */}
          <div className="flex-1 min-w-[200px]">
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center mr-3 overflow-hidden">
                <img src="./img/logo.png" alt="Logo" className="h-full w-full object-cover" />
              </div>
              <h3 className="text-xl font-bold">
                Dasta<span className="text-yellow-400">wez</span>
              </h3>
            </div>
            <p className="text-gray-400 mb-4">Your trusted partner for all document and government service needs.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://chat.whatsapp.com/ELYNoYxFIaC6p4ztD8WPQh" className="text-gray-400 hover:text-white transition">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="https://www.instagram.com/dastawez.in?igsh=MXZnZmFoNzhuNTlncg==" className="text-gray-400 hover:text-white transition">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div className="flex-1 min-w-[200px]">
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white footer-link">
                  MP Online Services
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-400 hover:text-white footer-link">
                  Academic Forms
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-400 hover:text-white footer-link">
                  Document Services
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-400 hover:text-white footer-link">
                  Digital Services
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-400 hover:text-white footer-link">
                  Exam Forms
                </Link>
              </li>
              <li>
                <Link href="/invoice" className="text-gray-400 hover:text-white footer-link">
                  Invoice
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div className="flex-1 min-w-[200px]">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="text-gray-400 hover:text-white footer-link">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-white footer-link">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-white footer-link">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white footer-link">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white footer-link">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="flex-1 min-w-[200px]">
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-3 text-blue-400"></i>
                <span>Bhopal, Madhya Pradesh, India</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-phone-alt mt-1 mr-3 text-blue-400"></i>
                <a href="tel:+917898282349" className="hover:text-white">
                  +91-7898282349
                </a>
              </li>
              <li className="flex items-start">
                <i className="fas fa-envelope mt-1 mr-3 text-blue-400"></i>
                <a href="mailto:dastawez.in@gmail.com" className="hover:text-white">
                  dastawez.in@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <i className="fas fa-tree mt-1 mr-3 text-blue-400"></i>
                <a href="https://linktr.ee/dastawez" className="hover:text-white">
                  Link Tree
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 mt-6 border-t border-gray-700 text-center text-gray-500 text-sm">
          <p>&copy; 2025 Dastawez. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
