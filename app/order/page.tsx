import Image from 'next/image';
import Link from 'next/link';

export default function OrderPage() {
  return (
    <>
      <section id="contact" className="py-16 bg-white w-full max-w-3xl mx-auto rounded-xl p-8 shadow-sm">
        <h3 className="text-xl font-semibold mb-6 text-center text-gray-800">Place Your Order</h3>
        <form className="space-y-4" action="https://formsubmit.co/6fa3378a3b6dc3ecbbe3973ab810dcb3" method="POST">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="hidden" name="Send your query" />
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-2">Your Name</label>
              <input type="text" id="name" name="user_name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
              <input type="tel" id="phone" name="phone_number" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
            <input type="email" id="email" name="email_address" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" />
          </div>
          <div>
            <label htmlFor="ServiceName" className="block text-gray-700 mb-2">Service Name</label>
            <input type="text" id="ServiceName" name="ServiceName" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 mb-2">Your Message</label>
            <textarea id="message" name="user_message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition resize-y"></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300">
            Place Order <i className="fas fa-paper-plane ml-2"></i>
          </button>
        </form>
      </section>
      <footer className="bg-gray-800 text-white pt-12 pb-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-8 mb-8">
            {/* About Column */}
            <div className="flex-1 min-w-[200px]">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center mr-3 overflow-hidden">
                  <Image src="/img/logo.png" alt="logo" width={48} height={48} className="h-full w-full object-cover" />
                </div>
                <h3 className="text-xl font-bold">Dasta<span className="text-yellow-400">wez</span></h3>
              </div>
              <p className="text-gray-400 mb-4">
                Your trusted partner for all document and government service needs.
              </p>
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
                <li><Link href="/" className="text-gray-400 hover:text-white footer-link">MP Online Services</Link></li>
                <li><Link href="/" className="text-gray-400 hover:text-white footer-link">Academic Forms</Link></li>
                <li><Link href="/" className="text-gray-400 hover:text-white footer-link">Document Services</Link></li>
                <li><Link href="/" className="text-gray-400 hover:text-white footer-link">Digital Services</Link></li>
                <li><Link href="/" className="text-gray-400 hover:text-white footer-link">Exam Forms</Link></li>
                <li><Link href="/invoice" className="text-gray-400 hover:text-white footer-link">Invoice</Link></li>
              </ul>
            </div>

            {/* Quick Links Column */}
            <div className="flex-1 min-w-[200px]">
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-400 hover:text-white footer-link">Home</Link></li>
                <li><Link href="/" className="text-gray-400 hover:text-white footer-link">Services</Link></li>
                <li><Link href="/" className="text-gray-400 hover:text-white footer-link">Contact</Link></li>
                <li><Link href="/about" className="text-gray-400 hover:text-white footer-link">About Us</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white footer-link">Privacy Policy</Link></li>
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
                  <a href="tel:+917898282349" className="hover:text-white">+91-7898282349</a>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-envelope mt-1 mr-3 text-blue-400"></i>
                  <a href="mailto:dastawez.in@gmail.com" className="hover:text-white">dastawez.in@gmail.com</a>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-tree mt-1 mr-3 text-blue-400"></i>
                  <a href="https://linktr.ee/dastawez" className="hover:text-white">Link Tree</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-6 mt-6 border-t border-gray-700 text-center text-gray-500 text-sm">
            <p>&copy; 2025 Dastawez. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
