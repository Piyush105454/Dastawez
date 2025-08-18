"use client";

import { useEffect } from "react";

export default function Script() {
  useEffect(() => {
    const menuBtn = document.getElementById("menuBtn");
    const mainNav = document.getElementById("mainNav");

    if (menuBtn && mainNav) {
      menuBtn.addEventListener("click", () => {
        mainNav.classList.toggle("hidden");
      });
    }
  }, []);

  return null;
}
