import type { Metadata } from "next";
import { Gideon_Roman, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";



const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "International Journal of Advanced Research & Innovation",
  description: "IJARI - A premier academic publication for cutting-edge research across multiple disciplines",
  keywords: "academic journal, research, innovation, ISSN, peer review",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${playfairDisplay.className} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
