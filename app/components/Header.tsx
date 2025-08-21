"use client";

import { useEffect } from "react";
import Navbar from "./Navbar";

const Header = () => {
  useEffect(() => {
    const menuBtn = document.getElementById("menuBtn");
    const mainNav = document.getElementById("mainNav");

    if (menuBtn && mainNav) {
      const handleMenuClick = () => {
        mainNav.classList.toggle("hidden");
        mainNav.classList.toggle("md:block");

        if (window.innerWidth < 768) {
          if (!mainNav.classList.contains("absolute")) {
            mainNav.classList.add(
              "absolute",
              "top-full",
              "left-0",
              "w-full",
              "bg-blue-800",
              "bg-opacity-95",
              "backdrop-blur-sm",
              "px-5",
              "py-3",
              "shadow-lg"
            );
            const navList = mainNav.querySelector("ul");
            if (navList) {
              navList.classList.add("flex", "flex-col", "space-y-3");
            }
          }
        }
      };
      menuBtn.addEventListener("click", handleMenuClick);

      const navLinks = document.querySelectorAll("#mainNav a");
      const handleLinkClick = () => {
        if (window.innerWidth < 768) {
          mainNav.classList.add("hidden");
          mainNav.classList.remove("md:block");
        }
      };
      navLinks.forEach((link) => {
        link.addEventListener("click", handleLinkClick);
      });

      return () => {
        menuBtn.removeEventListener("click", handleMenuClick);
        navLinks.forEach((link) => {
          link.removeEventListener("click", handleLinkClick);
        });
      };
    }
  }, []);

  return (
   <header className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-md sticky top-0 z-50 header-animate">
  <div className="container mx-auto px-4 py-1 md:py-3 flex justify-between items-center min-h-[48px]text-sm md:text-base">
    <div className="logo flex items-center">
      <div className="h-10 w-10 md:h-12 md:w-12 bg-white rounded-full flex items-center justify-center mr-3 overflow-hidden">
        <img src="./img/logo.png" alt="Logo" className="h-full w-full object-cover" />
      </div>
      <h1 className="text-white text-xl md:text-2xl font-bold">
        Dasta<span className="text-yellow-400">wez</span>
      </h1>
    </div>
    <button className="md:hidden text-white text-xl md:text-2xl focus:outline-none" id="menuBtn">
      <i className="fas fa-bars"></i>
    </button>
    <Navbar />
  </div>
</header>
  );
};

export default Header;
