"use client";

import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { useState } from "react";

const Navbar = () => {
  const { data: session } = useSession();
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  return (
    <nav className="hidden md:block" id="mainNav">
      <ul className="flex items-center space-x-8">
        <li>
          <a href="/" className="text-white font-medium nav-link relative py-2">
            Home
          </a>
        </li>
        <li>
          <a href="/government-services" className="text-white font-medium nav-link relative py-2">
            Services
          </a>
        </li>
        <li>
          <a href="#contact" className="text-white font-medium nav-link relative py-2">
            Contact
          </a>
        </li>
        <li>
          <Link href="/about" className="text-white font-medium nav-link relative py-2">
            About
          </Link>
        </li>
        <li>
          <Link href="/terms-and-conditions" className="text-white font-medium nav-link relative py-2">
            Terms & Conditions
          </Link>
        </li>
        <li>
          {session ? (
            <>
              <button
                onClick={() => setIsPanelOpen(true)}
                className="text-white font-medium nav-link relative py-2"
              >
                Profile
              </button>
              {isPanelOpen && (
                <div className="fixed inset-0 z-50 flex justify-end">
                  {/* Backdrop */}
                  <div
                    className="absolute inset-0 bg-black opacity-50"
                    onClick={() => setIsPanelOpen(false)}
                  ></div>
                  {/* Panel */}
                  <div
                    className={`relative w-64 bg-white h-full shadow-lg p-4 z-50 panel-animate ${
                      isPanelOpen ? "open" : ""
                    }`}
                  >
                    <button
                      onClick={() => setIsPanelOpen(false)}
                      className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl"
                    >
                      &times;
                    </button>
                    <div className="mt-8">
                      <Link
                        href="/settings"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                        onClick={() => setIsPanelOpen(false)}
                      >
                        Settings
                      </Link>
                      <button
                        onClick={() => {
                          signOut();
                          setIsPanelOpen(false);
                        }}
                        className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md mt-2"
                      >
                        Sign Out
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </>
          ) : (
            <button
              onClick={() => signIn("google", { callbackUrl: "/profile" })}
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-4 py-2 rounded-lg transition duration-300 transform hover:scale-105"
            >
              Sign In
            </button>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
