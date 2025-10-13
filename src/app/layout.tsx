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
  title: "SATYAMEBA",
                
  description: "Supercomputing Architecture for Transformative Yield in AI and Multi-GPU Engine Based Acceleration",
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
        className={` ${merriweather.className} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
