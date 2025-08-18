'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSession, signIn, signOut } from 'next-auth/react';

const Navbar = () => {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/img/logo.png" alt="logo" width={40} height={40} className="rounded-full" />
              <span className="text-2xl font-bold">Dasta<span className="text-yellow-400">wez</span></span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="hover:text-yellow-400 transition duration-300">Home</Link>
            <Link href="/about" className="hover:text-yellow-400 transition duration-300">About</Link>
            <div className="relative">
              <button 
                onClick={() => setIsServicesOpen(!isServicesOpen)} 
                className="hover:text-yellow-400 transition duration-300 flex items-center"
              >
                Services
                <svg className={`w-4 h-4 ml-1 transform transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              {isServicesOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg z-10">
                  <Link href="/government-services" className="block px-4 py-2 text-sm hover:bg-gray-700">Government Services</Link>
                  <Link href="/order" className="block px-4 py-2 text-sm hover:bg-gray-700">Order</Link>
                  <Link href="/invoice" className="block px-4 py-2 text-sm hover:bg-gray-700">Invoice</Link>
                </div>
              )}
            </div>
            <Link href="/pyq" className="hover:text-yellow-400 transition duration-300">PYQ</Link>
            <Link href="/terms-and-conditions" className="hover:text-yellow-400 transition duration-300">Terms & Conditions</Link>
            {session ? (
              <div className="relative">
                <button onClick={() => setIsProfileOpen(!isProfileOpen)} className="hover:text-yellow-400 transition duration-300">Profile</button>
              </div>
            ) : (
              <button onClick={() => signIn('google', { callbackUrl: '/profile' })} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Sign In
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <Link href="/" className="block py-2 px-4 hover:bg-gray-700 rounded">Home</Link>
            <Link href="/about" className="block py-2 px-4 hover:bg-gray-700 rounded">About</Link>
            <div className="relative">
              <button 
                onClick={() => setIsServicesOpen(!isServicesOpen)} 
                className="w-full text-left py-2 px-4 hover:bg-gray-700 rounded flex justify-between items-center"
              >
                Services
                <svg className={`w-4 h-4 transform transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              {isServicesOpen && (
                <div className="pl-4">
                  <Link href="/government-services" className="block py-2 px-4 hover:bg-gray-700 rounded">Government Services</Link>
                  <Link href="/order" className="block py-2 px-4 hover:bg-gray-700 rounded">Order</Link>
                  <Link href="/invoice" className="block py-2 px-4 hover:bg-gray-700 rounded">Invoice</Link>
                </div>
              )}
            </div>
            <Link href="/pyq" className="block py-2 px-4 hover:bg-gray-700 rounded">PYQ</Link>
            <Link href="/terms-and-conditions" className="block py-2 px-4 hover:bg-gray-700 rounded">Terms & Conditions</Link>
            {session ? (
              <>
                <Link href="/profile" className="block py-2 px-4 hover:bg-gray-700 rounded">Profile</Link>
                <button onClick={() => signOut()} className="w-full text-left block py-2 px-4 hover:bg-gray-700 rounded">
                  Sign Out
                </button>
              </>
            ) : (
              <button onClick={() => signIn('google', { callbackUrl: '/profile' })} className="w-full text-left block py-2 px-4 hover:bg-gray-700 rounded">
                Sign In
              </button>
            )}
          </div>
        )}
      </div>

      {/* Profile Side Panel */}
      <div className={`fixed top-0 right-0 h-full bg-gray-800 text-white w-64 p-4 transform transition-transform z-20 ${isProfileOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <button onClick={() => setIsProfileOpen(false)} className="absolute top-4 right-4 text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
        <div className="mt-10">
          <Link href="/settings" className="block py-2 px-4 hover:bg-gray-700 rounded">Settings</Link>
          <button onClick={() => signOut()} className="w-full text-left block py-2 px-4 hover:bg-gray-700 rounded">
            Sign Out
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
