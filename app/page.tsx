import Image from 'next/image';
import Link from 'next/link';
import MotionWrap from './components/MotionWrap';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <MotionWrap>
        <section id="home" className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 md:py-28">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Instant Printing & MP Online Services <span className="text-yellow-300">Delivered</span> to Your Doorstep
              </h2>
              <p className="text-lg md:text-xl mb-8 text-blue-100">
                Fast, reliable, and affordable solutions for all your printing and government service needs.
                We handle the paperwork so you don't have to!
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="#contact"
                  className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-8 py-4 rounded-lg transition duration-300 transform hover:scale-105">
                  Order Now <i className="fas fa-arrow-right ml-2"></i>
                </Link>
                <Link href="#services"
                  className="bg-white bg-opacity-10 hover:bg-opacity-20 text-white font-semibold px-8 py-4 rounded-lg transition duration-300 transform hover:scale-105">
                  Our Services <i className="fas fa-list ml-2"></i>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </MotionWrap>

      {/* Services Section */}
      <MotionWrap>
        <section id="services" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 section-title">
                Our Services
              </h2>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                Comprehensive solutions for all your document and digital needs
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* MP Online Services Card */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md service-card border border-gray-100 flex flex-col h-full">
                <div className="h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
                  <Image src="/img/mp online.jpeg" alt="Government Services" width={500} height={300} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center mb-3">
                    <div className="bg-blue-100 p-2 rounded-lg mr-3">
                      <i className="fas fa-landmark text-blue-600 text-xl"></i>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Government Services</h3>
                  </div>
                  <ul className="space-y-2 text-gray-600 mb-4">
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-green-500 mt-1 mr-2 text-sm"></i>
                      <span>Domicile & Caste Certificates</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-green-500 mt-1 mr-2 text-sm"></i>
                      <span>Birth Certificates</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-green-500 mt-1 mr-2 text-sm"></i>
                      <span>PAN Card & Voter ID Applications</span>
                    </li>
                  </ul>
                  <Link href="/GovernmentServices"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition duration-300 mt-auto">
                    Get Started <i className="fas fa-chevron-right ml-1"></i>
                  </Link>
                </div>
              </div>

              {/* Academic Forms Card */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md service-card border border-gray-100 flex flex-col h-full">
                <div className="h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
                  <Image src="/img/Shanghai JiaoTong University illustration.jpeg" alt="Academic Forms" width={500} height={300} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center mb-3">
                    <div className="bg-blue-100 p-2 rounded-lg mr-3">
                      <i className="fas fa-graduation-cap text-blue-600 text-xl"></i>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Academic Forms</h3>
                  </div>
                  <ul className="space-y-2 text-gray-600 mb-4">
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-green-500 mt-1 mr-2 text-sm"></i>
                      <span>College & University Forms</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-green-500 mt-1 mr-2 text-sm"></i>
                      <span>Scholarship Applications</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-green-500 mt-1 mr-2 text-sm"></i>
                      <span>Exam & Admission Forms</span>
                    </li>
                  </ul>
                  <Link href="/order"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition duration-300 mt-auto">
                    Get Started <i className="fas fa-chevron-right ml-1"></i>
                  </Link>
                </div>
              </div>

              {/* Document Services Card */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md service-card border border-gray-100 flex flex-col h-full">
                <div className="h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
                  <Image src="/img/Credentialing & Contracting Services - MedConverge.jpeg" alt="Document Services" width={500} height={300} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center mb-3">
                    <div className="bg-blue-100 p-2 rounded-lg mr-3">
                      <i className="fas fa-file-alt text-blue-600 text-xl"></i>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Document Services</h3>
                  </div>
                  <ul className="space-y-2 text-gray-600 mb-4">
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-green-500 mt-1 mr-2 text-sm"></i>
                      <span>Professional Resume Building</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-green-500 mt-1 mr-2 text-sm"></i>
                      <span>Assignment & Notes Printing</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-green-500 mt-1 mr-2 text-sm"></i>
                      <span>Lamination & Binding Services</span>
                    </li>
                  </ul>
                  <Link href="/order"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition duration-300 mt-auto">
                    Get Started <i className="fas fa-chevron-right ml-1"></i>
                  </Link>
                </div>
              </div>

              {/* Digital Services Card */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md service-card border border-gray-100 flex flex-col h-full">
                <div className="h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
                  <Image src="/img/digital service.jpeg" alt="Digital Services" width={500} height={300} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center mb-3">
                    <div className="bg-blue-100 p-2 rounded-lg mr-3">
                      <i className="fas fa-laptop-code text-blue-600 text-xl"></i>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Digital Services</h3>
                  </div>
                  <ul className="space-y-2 text-gray-600 mb-4">
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-green-500 mt-1 mr-2 text-sm"></i>
                      <span>Professional PPT & Document Design</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-green-500 mt-1 mr-2 text-sm"></i>
                      <span>Poster & Invitation Card Design</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-green-500 mt-1 mr-2 text-sm"></i>
                      <span>PDF Editing & Formatting</span>
                    </li>
                  </ul>
                  <Link href="/order"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition duration-300 mt-auto">
                    Get Started <i className="fas fa-chevron-right ml-1"></i>
                  </Link>
                </div>
              </div>

              {/* Business Services Card */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md service-card border border-gray-100 flex flex-col h-full">
                <div className="h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
                  <Image src="/img/business servicess.jpeg" alt="Business Services" width={500} height={300} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center mb-3">
                    <div className="bg-blue-100 p-2 rounded-lg mr-3">
                      <i className="fas fa-briefcase text-blue-600 text-xl"></i>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Business Services</h3>
                  </div>
                  <ul className="space-y-2 text-gray-600 mb-4">
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-green-500 mt-1 mr-2 text-sm"></i>
                      <span>Custom Business Card Design</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-green-500 mt-1 mr-2 text-sm"></i>
                      <span>Company Profile Design</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-green-500 mt-1 mr-2 text-sm"></i>
                      <span>Brochures & Flyers</span>
                    </li>
                  </ul>
                  <Link href="/order"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition duration-300 mt-auto">
                    Get Started <i className="fas fa-chevron-right ml-1"></i>
                  </Link>
                </div>
              </div>

              {/* Exam Forms Card */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md service-card border border-gray-100 flex flex-col h-full">
                <div className="h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
                  <Image src="/img/Exam forms.jpg" alt="Exam Forms" width={500} height={300} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center mb-3">
                    <div className="bg-blue-100 p-2 rounded-lg mr-3">
                      <i className="fas fa-clipboard-list text-blue-600 text-xl"></i>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Exam Forms</h3>
                  </div>
                  <ul className="space-y-2 text-gray-600 mb-4">
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-green-500 mt-1 mr-2 text-sm"></i>
                      <span>CUET, JEE, NEET Forms</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-green-500 mt-1 mr-2 text-sm"></i>
                      <span>Government Exam Forms</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-green-500 mt-1 mr-2 text-sm"></i>
                      <span>Competitive Exam Applications</span>
                    </li>
                  </ul>
                  <Link href="/order"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition duration-300 mt-auto">
                    Get Started <i className="fas fa-chevron-right ml-1"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </MotionWrap>

      {/* How It Works Section */}
      <MotionWrap>
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 section-title">
                How It Works
              </h2>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                Simple steps to get your documents ready without leaving your home
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Place Your Order</h3>
                <p className="text-gray-600">
                  Fill our simple form with your requirements or upload your documents
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">We Process It</h3>
                <p className="text-gray-600">
                  Our experts handle all the paperwork, printing, and processing
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Delivery to You</h3>
                <p className="text-gray-600">
                  Get your documents delivered to your doorstep or via email
                </p>
              </div>
            </div>
          </div>
        </section>
      </MotionWrap>

      {/* Contact Section */}
      <MotionWrap>
        <section id="contact" className="py-16 bg-white mb-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 section-title">
                Contact Us
              </h2>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                Have questions or need assistance? We're here to help!
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {/* WhatsApp Card */}
              <div className="bg-blue-50 rounded-xl p-6 text-center contact-card flex flex-col h-full">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fab fa-whatsapp text-blue-600 text-2xl"></i>
                </div>
                <h3 className="text-lg font-semibold mb-2">Chat on WhatsApp</h3>
                <p className="text-gray-600 mb-3">Quick responses during business hours</p>
                <a href="https://wa.me/917898282349"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition duration-300 mt-auto">
                  Message Us
                </a>
              </div>

              {/* Phone Card */}
              <div className="bg-blue-50 rounded-xl p-6 text-center contact-card flex flex-col h-full">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-phone-alt text-blue-600 text-2xl"></i>
                </div>
                <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                <p className="text-gray-600 mb-3">Mon-Sat: 9AM - 7PM</p>
                <a href="tel:+917898282349"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition duration-300 mt-auto">
                  +91-7898282349
                </a>
              </div>

              {/* Email Card */}
              <div className="bg-blue-50 rounded-xl p-6 text-center contact-card flex flex-col h-full">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-envelope text-blue-600 text-2xl"></i>
                </div>
                <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                <p className="text-gray-600 mb-3">For detailed inquiries</p>
                <a href="mailto:dastawez.in@gmail.com"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition duration-300 mt-auto">
                  dastawez.in@gmail.com
                </a>
              </div>
              {/* Link Tree Card */}
              <div className="bg-blue-50 rounded-xl p-6 text-center contact-card flex flex-col h-full">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-tree text-blue-600 text-2xl"></i>
                </div>
                <h3 className="text-lg font-semibold mb-2">Link Tree</h3>
                <p className="text-gray-600 mb-3">Visit our more social pletforms</p>
                <a href="https://linktr.ee/dastawez"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition duration-300 mt-auto">
                  linktree
                </a>
              </div>
            </div>
            <div className="max-w-3xl mx-auto bg-gray-50 rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-semibold mb-6 text-center">Send Us Your Query</h3>
              <form className="space-y-4" id="" action="https://formsubmit.co/6fa3378a3b6dc3ecbbe3973ab810dcb3" method="POST">

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
                  <label htmlFor="message" className="block text-gray-700 mb-2">Your Message</label>
                  <textarea id="message" name="user_message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300">
                  Send Message <i className="fas fa-paper-plane ml-2"></i>
                </button>
              </form>
            </div>
          </div>
        </section>
      </MotionWrap>


      {/* FAQ Section */}
      <MotionWrap>
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 section-title">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                Find answers to common questions about our services
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <button className="flex justify-between items-center w-full text-left font-semibold text-gray-800 focus:outline-none">
                  <span>How long does it take to process government documents?</span>
                  <i className="fas fa-chevron-down text-blue-500 transition-transform duration-300"></i>
                </button>
                <div className="mt-3 text-gray-600">
                  Processing times vary depending on the document and government department. Typically, simple certificates like domicile or income certificates take 2-3 working days, while more complex documents may take up to a week.
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <button className="flex justify-between items-center w-full text-left font-semibold text-gray-800 focus:outline-none">
                  <span>What documents do I need to provide for certificate applications?</span>
                  <i className="fas fa-chevron-down text-blue-500 transition-transform duration-300"></i>
                </button>
                <div className="mt-3 text-gray-600">
                  Requirements vary by certificate type. Generally, you'll need proof of identity (Aadhaar, PAN), proof of address, and any supporting documents specific to the certificate. Our team will guide you through the exact requirements for your specific need.
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <button className="flex justify-between items-center w-full text-left font-semibold text-gray-800 focus:outline-none">
                  <span>Do you offer delivery services?</span>
                  <i className="fas fa-chevron-down text-blue-500 transition-transform duration-300"></i>
                </button>
                <div className="mt-3 text-gray-600">
                  Yes! We offer doorstep delivery for all physical documents within our service areas. Digital services and soft copies are delivered via email or cloud sharing platforms for your convenience.
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <button className="flex justify-between items-center w-full text-left font-semibold text-gray-800 focus:outline-none">
                  <span>How do I pay for your services?</span>
                  <i className="fas fa-chevron-down text-blue-500 transition-transform duration-300"></i>
                </button>
                <div className="mt-3 text-gray-600">
                  We accept multiple payment methods including UPI, credit/debit cards, net banking, and cash on delivery (for physical services). Payment links will be shared after order confirmation.
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <button className="flex justify-between items-center w-full text-left font-semibold text-gray-800 focus:outline-none">
                  <span>Can you help with corrections in official documents?</span>
                  <i className="fas fa-chevron-down text-blue-500 transition-transform duration-300"></i>
                </button>
                <div className="mt-3 text-gray-600">
                  Yes, we assist with document corrections and amendments. The process depends on the type of document and the issuing authority. Contact us with your specific requirements for detailed guidance.
                </div>
              </div>
            </div>
          </div>
        </section>
      </MotionWrap>

      {/* CTA Section */}
      <MotionWrap>
        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Simplify Your Document Needs?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let us handle the paperwork while you focus on what matters most
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/order"
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-3 rounded-lg transition duration-300 transform hover:scale-105">
                Order Now <i className="fas fa-arrow-right ml-2"></i>
              </Link>
              <a href="tel:+917898282349"
                className="bg-white bg-opacity-10 hover:bg-opacity-20 text-white font-semibold px-6 py-3 rounded-lg transition duration-300 transform hover:scale-105">
                Call Us <i className="fas fa-phone-alt ml-2"></i>
              </a>
            </div>
          </div>
        </section>
      </MotionWrap>

      {/* Footer */}
      <footer className="bg-gray-800 text-white pt-12 pb-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* About Column */}
            <div className="flex-1">
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
            <div className="flex-1">
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
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="#home" className="text-gray-400 hover:text-white footer-link">Home</Link></li>
                <li><Link href="#services" className="text-gray-400 hover:text-white footer-link">Services</Link></li>
                <li><Link href="#contact" className="text-gray-400 hover:text-white footer-link">Contact</Link></li>
                <li><Link href="/about" className="text-gray-400 hover:text-white footer-link">About Us</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white footer-link">Privacy Policy</Link></li>
              </ul>
            </div>

            {/* Contact Column */}
            <div className="flex-1">
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
