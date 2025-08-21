import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Providers } from "./components/Providers";
import "./globals.css";
import Script from "./script";


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
      <head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
        
          {children}
        </Providers>
        <Script />
      </body>
    </html>
  );
}
