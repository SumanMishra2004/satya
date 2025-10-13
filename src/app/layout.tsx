import type { Metadata } from "next";
import { Gideon_Roman, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";


import { Merriweather } from 'next/font/google'

const merriweather = Merriweather({
  weight:['300','400','700'],
  subsets:['latin']
})


export const metadata: Metadata = {
  title: "International Journal of Advanced Research & Innovation",
  description: "IJARI - A premier academic publication for cutting-edge research across multiple disciplines",
  keywords: "academic journal, research, innovation, ISSN, peer review",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/iedc-logo.jpg', sizes: '32x32', type: 'image/jpeg' },
      { url: '/iem-logo.png', sizes: '16x16', type: 'image/png' }
    ],
    apple: '/iedc-logo.jpg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${merriweather.className} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
