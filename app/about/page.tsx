import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Dastawez: Hassle-Free MP Online Services & Document Printing
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            Effortless government documentation with doorstep delivery
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <p className="text-gray-600 text-lg leading-relaxed text-center">
          In today&apos;s digital world, managing government-related documentation can be a time-consuming task. <span className="font-semibold text-blue-600">Dastawez</span> solves that problem by offering seamless MP Online services and document printing with doorstep delivery.
        </p>
      </div>

      {/* What is Dastawez */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">What is Dastawez?</h2>
        <p className="text-gray-700 leading-relaxed text-center mb-6">
          Dastawez is a tech-driven MP Online and document service that enables users to complete government-related tasks effortlessly. Currently accessible through WhatsApp, a full-fledged website is launching soon.
        </p>
      </section>

      {/* Features */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Key Features</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { title: "Quick MP Online Services", desc: "Get all essential services without visiting physical shops." },
            { title: "Zero Waiting Time", desc: "Skip the queues at MP Online centers." },
            { title: "Doorstep Delivery", desc: "Receive documents at your preferred location." },
            { title: "WhatsApp Ordering", desc: "Convenient service requests via WhatsApp." },
            { title: "Document Printing", desc: "High-quality forms and certificates printouts." },
            { title: "Affordable Pricing", desc: "Transparent pricing for students & professionals." },
          ].map((f, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
              <h3 className="text-lg font-semibold mb-2 text-blue-600">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it Works */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">How Dastawez Works?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            "Join the Dastawez WhatsApp Group",
            "Select Your MP Online Service",
            "Submit Required Details",
            "Opt for Document Printing (If Needed)",
            "Confirm Delivery Address",
            "Make Secure Payment",
            "Receive Your Processed Documents",
          ].map((step, i) => (
            <div key={i} className="flex items-start space-x-4">
              <div className="h-10 w-10 flex items-center justify-center bg-blue-600 text-white font-bold rounded-full">
                {i + 1}
              </div>
              <p className="text-gray-700">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose */}
      <section className="bg-blue-50 py-12 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Choose Dastawez?</h2>
          <p className="text-gray-700 leading-relaxed">
            Save time and effort by eliminating visits to MP Online shops. Fast, reliable, and hassle-free, Dastawez is the ideal solution for students and working professionals.
          </p>
        </div>
      </section>

      {/* Future Plans */}
      <section className="max-w-6xl mx-auto px-6 py-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Future Plans</h2>
        <p className="text-gray-700 leading-relaxed">
          A fully functional website is under development to further streamline MP Online services and printing requests, making access even easier.
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-6 mt-12">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Image src="/img/logo.png" alt="logo" width={48} height={48} className="rounded-full" />
              <h3 className="ml-3 text-xl font-bold text-white">Dasta<span className="text-yellow-400">wez</span></h3>
            </div>
            <p className="mb-4">Your trusted partner for all document and government service needs.</p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-white">MP Online Services</Link></li>
              <li><Link href="/" className="hover:text-white">Academic Forms</Link></li>
              <li><Link href="/" className="hover:text-white">Document Services</Link></li>
              <li><Link href="/" className="hover:text-white">Digital Services</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="#contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li>Bhopal, Madhya Pradesh, India</li>
              <li><a href="tel:+917898282349" className="hover:text-white">+91-7898282349</a></li>
              <li><a href="mailto:dastawez.in@gmail.com" className="hover:text-white">dastawez.in@gmail.com</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-700 text-center pt-6 text-sm">
          &copy; 2025 Dastawez. All Rights Reserved.
        </div>
      </footer>
    </>
  );
}
