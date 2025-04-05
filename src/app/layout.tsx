import "./globals.css";


import type { Metadata } from "next";
import { Inter } from "next/font/google"; 
// import Navbar from "@/components/common/navbar";
// import Footer from "@/components/common/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Delhi Startup summit 2025", 
  description: "Book appointments effortlessly", 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{overflowX:"hidden"}} className={inter.variable}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/neecop.png"/>
      </head>
      <body suppressHydrationWarning={true} className="antialiased">
        {children}
      </body>
    </html>
  );
}
