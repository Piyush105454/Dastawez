import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Providers } from "./components/Providers";
import "./globals.css";
import Script from "./script";
import Navbar from "../src/components/Navbar";

const geistSans = GeistSans;
const geistMono = GeistMono;

export const metadata: Metadata = {
  title: "Dastawez - Instant Printing & Digital Services",
  description: "Fast, reliable, and affordable solutions for all your printing and government service needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <Navbar />
          {children}
        </Providers>
        <Script />
      </body>
    </html>
  );
}
