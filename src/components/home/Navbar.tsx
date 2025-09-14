"use client";

import React, { useState } from "react";
import {
  Airplay,
  Check,
  ChevronUp,
  Code,
  Contact,
  Home,
  Info,
  Search,
  SquareTerminal,
  Target,
  Terminal,
  Upload,
  UploadIcon,
  User,
  User2,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import Image from "next/image";
import Link from "next/link";

const UemLogo = () => (
  <div className="h-12 w-12 md:h-24 md:w-24 flex items-center justify-center font-bold text-gray-700 rounded-lg bg-white/50">
    <Image
      src="/uem.png"
      alt="UEM Logo"
      width={48}
      height={48}
      className="w-full h-full object-contain"
    />
  </div>
);
const IemLogo = () => (
  <div className="h-12 w-12 md:h-24 md:w-24 flex items-center justify-center font-bold text-gray-700 rounded-lg bg-white/50">
    <Image
      src="/iem-logo.png"
      alt="IEM Logo"
      width={48}
      height={48}
      className="w-full h-full object-contain"
    />
  </div>
);

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 z-50 w-full bg-white/90 backdrop-blur-sm shadow-lg">
      {/* Desktop and Tablet Layout (>md) */}
      <div className="hidden md:block w-full">
        {/* Upper div for logos and university names */}
        <div className=" w-full  px-4 py-1 flex items-center justify-between border-b border-gray-200/50">
          {/* Left: UEM Logo and text */}
          <div className="">
            <UemLogo />
          </div>
          <div className="flex  justify-center items-center gap-6">
            <div className="md:h-24 h-14 w-14 md:w-24  flex items-center justify-center font-bold text-gray-700 rounded-full overflow-hidden">
              <Image
                src="/iedc-logo.jpg"
                alt="IEDC Logo"
                width={100}
                height={100}
                className="rounded-full object-cover w-full h-full aspect-square  "
              />
            </div>

            <div className="flex flex-col  items-start justify-center gap-2 ">
              <span className="font-bold text-2xl text-gray-800">
                Innovation and Entrepreneurship Development Cell (I.E.D.C)
              </span>

              <span className="font-semibold text-sm text-gray-800">
                Department of Computer Science and Engineering (Internet of
                Things, Cyber Security & Blockchain Technology)
              </span>
            </div>
          </div>
          {/* Right: IEM Logo */}
          <div>
            <IemLogo />
          </div>
        </div>

        {/* Lower div for navigation, IEDC, search, and user icons */}
        <div className=" w-full px-4 py-1 flex items-center justify-between">
          {/* Left: IEDC Logo Area and Navigation elements */}
          <div className="flex items-center space-x-8 justify-between w-full">
            <div className="h-full aspect-square bg-blue-300"></div>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <Link href="/" className="flex items-center flex-row gap-1">
                      <Home className="h-6 w-6 " />
                      <span className="hidden md:inline">Home</span>
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <Link href="/editorial-board" className="flex items-center flex-row gap-1">
                      <User className="h-6 w-6 " />
                      <span className="hidden md:inline">Editorial Board</span>
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <Link href="/current-issue" className="flex items-center flex-row gap-1">
                      <SquareTerminal className="h-6 w-6 " />
                      <span className="hidden md:inline">Current Issue</span>
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <Link href="/archive" className="flex items-center flex-row gap-1">
                      <Terminal className="h-6 w-6 " />
                      <span className="hidden md:inline">Archive</span>
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <Link href="/contact" className="flex items-center flex-row gap-1">
                      <Contact className="h-6 w-6 " />
                      <span className="hidden md:inline">Contact</span>
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <Search className="h-5 w-5" />
              </Button>
              <User />
            </div>
          </div>

          {/* Right: Search and User Icons */}
        </div>
      </div>

      {/* Mobile Layout (<md) */}
      <div className="md:hidden">
        {/* Top navbar for mobile */}
        <div className="w-full px-4 py-3 flex items-center justify-between bg-white/95 backdrop-blur-sm shadow-sm">
          {/* Left side - Logos in sequence: UEM, IEM, IEDC */}
          <div className="flex items-center space-x-3">
            {/* UEM Logo */}
            <div className="h-10 w-10 flex items-center justify-center bg-white/50 rounded-lg">
              <Image
                src="/uem.png"
                alt="UEM Logo"
                width={32}
                height={32}
                className="w-full h-full object-contain"
              />
            </div>
            
            {/* IEM Logo */}
            <div className="h-10 w-10 flex items-center justify-center bg-white/50 rounded-lg">
              <Image
                src="/iem-logo.png"
                alt="IEM Logo"
                width={32}
                height={32}
                className="w-full h-full object-contain"
              />
            </div>
            
            {/* IEDC Logo */}
            <div className="h-10 w-10 rounded-full overflow-hidden bg-white shadow-sm">
              <Image
                src="/iedc-logo.jpg"
                alt="IEDC Logo"
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right side - Hamburger Menu */}
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="h-10 w-10 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
          >
            <Menu className="h-6 w-6 text-gray-700" />
          </button>
        </div>

        {/* Dialog Menu */}
        {isMenuOpen && (
          <>
            {/* Overlay */}
            <div 
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Dialog Content - Slide from top */}
            <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-xl border-b border-gray-200 mx-0 px-4 py-6 transform transition-transform duration-300 ease-out">
              <div className="max-w-sm mx-auto">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-light text-gray-800">Navigation Menu</h2>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="h-8 w-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                  >
                    <X className="h-4 w-4 text-gray-600" />
                  </button>
                </div>
                
                <div className="space-y-3">
                  {/* Home */}
                  <Link 
                    href="/"
                    onClick={() => setIsMenuOpen(false)}
                    className="block w-full p-4 text-left bg-gray-50 hover:bg-blue-50 rounded-lg transition-colors border border-gray-200 hover:border-blue-200"
                  >
                    <h3 className="font-medium text-gray-800 mb-1">Home</h3>
                    <p className="text-sm text-gray-600">Homepage with journal overview and subject areas</p>
                  </Link>
                  
                  {/* Editorial Board */}
                  <Link 
                    href="/editorial-board"
                    onClick={() => setIsMenuOpen(false)}
                    className="block w-full p-4 text-left bg-gray-50 hover:bg-blue-50 rounded-lg transition-colors border border-gray-200 hover:border-blue-200"
                  >
                    <h3 className="font-medium text-gray-800 mb-1">Editorial Board</h3>
                    <p className="text-sm text-gray-600">Meet our editorial team and board members</p>
                  </Link>
                  
                  {/* Current Issue */}
                  <Link 
                    href="/current-issue"
                    onClick={() => setIsMenuOpen(false)}
                    className="block w-full p-4 text-left bg-gray-50 hover:bg-blue-50 rounded-lg transition-colors border border-gray-200 hover:border-blue-200"
                  >
                    <h3 className="font-medium text-gray-800 mb-1">Current Issue</h3>
                    <p className="text-sm text-gray-600">Latest published research articles and papers</p>
                  </Link>
                  
                  {/* Archive */}
                  <Link 
                    href="/archive"
                    onClick={() => setIsMenuOpen(false)}
                    className="block w-full p-4 text-left bg-gray-50 hover:bg-blue-50 rounded-lg transition-colors border border-gray-200 hover:border-blue-200"
                  >
                    <h3 className="font-medium text-gray-800 mb-1">Archive</h3>
                    <p className="text-sm text-gray-600">Browse past issues and published articles</p>
                  </Link>
                  
                  {/* Contact */}
                  <Link 
                    href="/contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="block w-full p-4 text-left bg-gray-50 hover:bg-blue-50 rounded-lg transition-colors border border-gray-200 hover:border-blue-200"
                  >
                    <h3 className="font-medium text-gray-800 mb-1">Contact</h3>
                    <p className="text-sm text-gray-600">Get in touch with our editorial team</p>
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
