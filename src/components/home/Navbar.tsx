"use client";

import React, { useState } from "react";
import {
  ChevronRight,
  User,
  Menu,
  X,
  Server,
  LogIn,
  LogOut,
  UserPlus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { satyamebaServices, configurationServices } from "@/data/NavData";
import { Noto_Serif_Armenian } from "next/font/google";
import { useSession, signOut } from "next-auth/react";
import toast from "react-hot-toast";

const UemLogo = () => (
  <div className="h-12 w-12 md:h-20 md:w-24 overflow-hidden flex items-center justify-center rounded-lg bg-[#FDF0D5]">
    <Image
      src="/uem.png"
      alt="UEM Logo"
      width={120}
      height={120}
      className="w-full h-full object-contain"
    />
  </div>
);

const IemLogo = () => (
  <div className="h-12 w-12 md:h-20 md:w-24 overflow-hidden flex items-center justify-center rounded-lg bg-[#FDF0D5]">
    <Image
      src="/iem-logo.png"
      alt="IEM Logo"
      width={120}
      height={120}
      className="w-full h-full object-contain"
    />
  </div>
);

const notosarif = Noto_Serif_Armenian({
  subsets: ["latin"],
  weight: ["400", "300", "500", "700"],
  variable: "--font-noto-sarif",
});

const iconStrokeWidth = 1.5;

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedService, setExpandedService] = useState<number | null>(null);
  const [expandedSubService, setExpandedSubService] = useState<string | null>(
    null
  );
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [hoveredSubService, setHoveredSubService] = useState<string | null>(
    null
  );

  const { data: session, status } = useSession();
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await signOut({ callbackUrl: "/" });
      toast.success("Signed out successfully");
    } catch (error) {
      toast.error("Failed to sign out");
    }
  };

  const handleProfileClick = () => {
    router.push("/profile");
  };

  return (
    <nav className="fixed top-0 z-50 w-full bg-[#C1121F]/95 backdrop-blur-sm shadow-lg">
      {/* Desktop and Tablet Layout (>md) */}
      <div className="hidden md:block w-full">
        {/* Upper section for logos and title */}
        <div className="w-full px-4 py-2 flex items-center justify-between border-b border-[#669BBC]/50">
          <UemLogo />
          
          <div className="flex flex-col items-center justify-center flex-1 px-4">
            <span className={`${notosarif.className} font-bold text-3xl lg:text-4xl tracking-wide text-white`}>
              SATYAMEBA
            </span>
            <span className="font-medium text-sm lg:text-base text-[#FDF0D5] text-center leading-tight">
              Supercomputing Architecture for Transformative Yield in AI and
              Multi-GPU Engine Based Acceleration
            </span>
          </div>
          
          <IemLogo />
        </div>

        {/* Lower section for navigation */}
        <div className="w-full px-4 py-2 flex items-center justify-between">
          {/* Left: Home */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-white font-semibold text-lg hover:text-[#FDF0D5] transition-colors">
              Home
            </Link>
          </div>

          {/* Center: Main Navigation */}
          <div className="flex-1 flex justify-center px-4">
            <NavigationMenu>
              <NavigationMenuList className="flex space-x-1">
                {/* Satyameba Services Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-white text-base hover:text-[#FDF0D5]">
                    SATYAMEBA Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white/95 backdrop-blur-sm">
                    <div className="w-full p-4 min-w-[400px] max-w-[400px]">
                      <div className="mb-4">
                        <h4 className="text-lg font-semibold text-blue-800 mb-1">
                          {satyamebaServices.title}
                        </h4>
                        <p className="text-xs text-gray-700 leading-tight">
                          {satyamebaServices.fullForm}
                        </p>
                      </div>
                      <ul className="space-y-2">
                        {satyamebaServices.services.map((service) => (
                          <li
                            key={service.id}
                            className="relative"
                            onMouseEnter={() => {
                              if (service.subServices) {
                                setHoveredService(service.id);
                              }
                            }}
                            onMouseLeave={() => {
                              setHoveredService(null);
                              setHoveredSubService(null);
                            }}
                          >
                            {service.subServices ? (
                              <div className="relative">
                                <div className="block p-3 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer">
                                  <div className="flex items-start gap-3">
                                    <div className="flex-1">
                                      <h5 className={`font-medium transition-colors mb-1 flex items-center gap-2 ${
                                          hoveredService === service.id ? "text-blue-800" : "text-gray-800"
                                        }`}>
                                        {service.name}
                                        <ChevronRight className="h-4 w-4" strokeWidth={iconStrokeWidth} />
                                      </h5>
                                      <p className="text-xs text-gray-600 leading-tight">
                                        {service.description}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                {/* Nested dropdown content - keeping existing structure but cleaned up */}
                                {hoveredService === service.id && (
                                  <div className="absolute left-[96%] top-0 ml-2 z-[100] animate-in fade-in slide-in-from-left-2 duration-200">
                                    <div className="bg-white rounded-lg shadow-xl border border-gray-200 p-3 min-w-[300px]">
                                      <ul className="space-y-2">
                                        {service.subServices.map((subService: any) => (
                                          <li key={subService.id} className="relative"
                                            onMouseEnter={() => {
                                              if (subService.subServices) {
                                                setHoveredSubService(subService.id);
                                              }
                                            }}
                                            onMouseLeave={() => {
                                              setHoveredSubService(null);
                                            }}>
                                            {subService.subServices ? (
                                              <div className="relative">
                                                <div className="block p-2 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer">
                                                  <div className="flex items-start gap-2">
                                                    <div className="flex-1">
                                                      <h6 className={`font-medium transition-colors text-sm flex items-center gap-2 ${
                                                          hoveredSubService === subService.id ? "text-blue-600" : "text-gray-800"
                                                        }`}>
                                                        {subService.name}
                                                        <ChevronRight className="h-3 w-3" strokeWidth={iconStrokeWidth} />
                                                      </h6>
                                                      <p className="text-xs text-gray-600 leading-tight">
                                                        {subService.description}
                                                      </p>
                                                    </div>
                                                  </div>
                                                </div>
                                                {hoveredSubService === subService.id && (
                                                  <div className="absolute left-[95%] top-0 ml-2 z-[100] animate-in fade-in slide-in-from-left-2 duration-200">
                                                    <div className="bg-white rounded-lg shadow-xl border border-gray-200 p-3 min-w-[250px]">
                                                      <ul className="space-y-2">
                                                        {subService.subServices.map((nestedSub: any) => (
                                                          <li key={nestedSub.id}>
                                                            <div className="block p-2 rounded-lg hover:bg-blue-50 transition-colors">
                                                              <div className="flex items-start gap-2">
                                                                <div className="flex-1">
                                                                  <h6 className="font-medium text-gray-800 hover:text-blue-600 transition-colors text-sm">
                                                                    {nestedSub.name}
                                                                  </h6>
                                                                  <p className="text-xs text-gray-600 leading-tight">
                                                                    {nestedSub.description}
                                                                  </p>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </li>
                                                        ))}
                                                      </ul>
                                                    </div>
                                                  </div>
                                                )}
                                              </div>
                                            ) : (
                                              <Link href={`/services/${service.id}/${subService.id}`}
                                                className="block p-2 rounded-lg hover:bg-blue-50 transition-colors">
                                                <div className="flex items-start gap-2">
                                                  <div className="flex-1">
                                                    <h6 className="font-medium text-gray-800 hover:text-blue-600 transition-colors text-sm">
                                                      {subService.name}
                                                    </h6>
                                                    <p className="text-xs text-gray-600 leading-tight">
                                                      {subService.description}
                                                    </p>
                                                  </div>
                                                </div>
                                              </Link>
                                            )}
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  </div>
                                )}
                              </div>
                            ) : (
                              <Link href={`/services/${service.id}`}
                                className="block p-3 rounded-lg hover:bg-blue-50 transition-colors group">
                                <div className="flex items-start gap-3">
                                  <div className="flex-1">
                                    <h5 className="font-medium text-gray-800 group-hover:text-blue-600 transition-colors mb-1">
                                      {service.name}
                                    </h5>
                                    <p className="text-xs text-gray-600 leading-tight">
                                      {service.description}
                                    </p>
                                  </div>
                                </div>
                              </Link>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Configuration Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-white text-base hover:text-[#FDF0D5]">
                    Configuration
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white/95 backdrop-blur-sm">
                    <div className="w-full p-4 min-w-[350px] max-w-[350px]">
                      <div className="mb-4">
                        <h4 className="text-lg font-semibold text-blue-800 mb-1">
                          {configurationServices.title}
                        </h4>
                        <p className="text-xs text-gray-700 leading-tight">
                          {configurationServices.fullForm}
                        </p>
                      </div>
                      <ul className="space-y-2">
                        {configurationServices.services.map((service) => (
                          <li key={service.id}>
                            <Link href={`/configuration/${service.id}`}
                              className="block p-2 rounded-lg hover:bg-blue-50 transition-colors">
                              <div className="flex items-start gap-2">
                                <div className="flex-1">
                                  <h5 className="font-medium text-gray-800 hover:text-blue-600 transition-colors mb-1">
                                    {service.name}
                                  </h5>
                                  <p className="text-xs text-gray-600 leading-tight">
                                    {service.description}
                                  </p>
                                </div>
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} bg-transparent text-white text-base hover:text-[#FDF0D5]`}>
                    <Link href="/about">About Us</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} bg-transparent text-white text-base hover:text-[#FDF0D5]`}>
                    <Link href="/contact">Contact Us</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right: Authentication */}
          <div className="flex items-center">
            {status === "loading" ? (
              <Button variant="ghost" size="sm" disabled>
                <User className="h-4 w-4 text-white animate-pulse" strokeWidth={iconStrokeWidth} />
              </Button>
            ) : session ? (
              <div className="relative w-10 h-10">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button 
                      className="inline-flex items-center justify-center text-white hover:text-[#FDF0D5] hover:bg-white/10 h-10 w-10 rounded-full p-0 transition-colors focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-0"
                      aria-label="Profile menu"
                    >
                      {session.user?.image ? (
                        <img 
                          src={session.user.image} 
                          alt="Profile" 
                          className="h-10 w-10 shadow cursor-pointer rounded-full object-cover border-2 border-white/20 hover:border-white/40 transition-all" 
                        />
                      ) : (
                        <User className="h-5 w-5" strokeWidth={iconStrokeWidth} />
                      )}
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56 mt-2" sideOffset={4}>
                    <DropdownMenuLabel className="font-normal">
                      <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">{session.user?.name}</p>
                        <p className="text-xs leading-none text-muted-foreground">
                          {session.user?.email}
                        </p>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem 
                      onClick={handleProfileClick}
                      className="cursor-pointer"
                    >
                      <User className="mr-2 h-4 w-4" strokeWidth={iconStrokeWidth} />
                      Profile
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem 
                      onClick={handleSignOut}
                      variant="destructive"
                      className="cursor-pointer"
                    >
                      <LogOut className="mr-2 h-4 w-4" strokeWidth={iconStrokeWidth} />
                      Sign out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link href="/auth/signin" >
                  <Button variant="ghost" size="sm" className="cursor-pointer text-white hover:text-blue-200 hover:bg-white/10">
                    
                    Sign In
                  </Button>
                </Link>
                <Link href="/auth/signup" >
                  <Button size="sm" className="cursor-pointer bg-white text-[#C1121F] hover:bg-gray-100 font-medium">
                    
                    Sign Up
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Layout (<md) */}
      <div className="md:hidden">
        <div className="w-full px-4 py-3 flex items-center justify-between bg-white/95 backdrop-blur-sm shadow-sm">
          {/* Left: Logos */}
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 flex items-center justify-center bg-white/50 rounded-lg">
              <Image src="/uem.png" alt="UEM Logo" width={24} height={24} className="w-full h-full object-contain" />
            </div>
            <div className="h-8 w-8 flex items-center justify-center bg-white/50 rounded-lg">
              <Image src="/iem-logo.png" alt="IEM Logo" width={24} height={24} className="w-full h-full object-contain" />
            </div>
            
          </div>

          {/* Right: Profile Image and Menu Button */}
          <div className="flex items-center space-x-2">
            {session && (
              <div className="h-8 w-8 flex items-center justify-center">
                {session.user?.image ? (
                  <img 
                    src={session.user.image} 
                    alt="Profile" 
                    className="h-8 w-8 rounded-full object-cover border-2 border-gray-300" 
                  />
                ) : (
                  <User className="h-6 w-6 text-gray-600" strokeWidth={iconStrokeWidth} />
                )}
              </div>
            )}
            <button onClick={() => setIsMenuOpen(true)}
              className="h-10 w-10 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
              <Menu className="h-5 w-5 text-gray-700" strokeWidth={iconStrokeWidth} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <>
            <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)} />
            <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-br from-[#FDF0D5] to-white shadow-xl border-b border-[#669BBC]/30 mx-0 px-4 py-6 transform transition-transform duration-300 ease-out max-h-screen overflow-y-auto">
              <div className="max-w-sm mx-auto">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-medium text-[#780000]">Navigation Menu</h2>
                  <button onClick={() => setIsMenuOpen(false)}
                    className="h-8 w-8 flex items-center justify-center rounded-full bg-[#669BBC]/20 hover:bg-[#C1121F]/20 transition-colors">
                    <X className="h-4 w-4 text-[#780000]" strokeWidth={iconStrokeWidth} />
                  </button>
                </div>

                <div className="space-y-3 pb-6">
                  {/* Home */}
                  <Link href="/" onClick={() => setIsMenuOpen(false)}
                    className="block w-full p-4 text-left bg-white/80 hover:bg-[#669BBC]/10 rounded-lg transition-colors border border-[#669BBC]/30 hover:border-[#C1121F]/50 shadow-sm">
                    <h3 className="font-medium text-[#780000] mb-1">Home</h3>
                    <p className="text-sm text-[#003049]/70">Homepage with SATYAMEBA overview and services</p>
                  </Link>

                  {/* Services - simplified mobile version */}
                  <div className="bg-white/80 rounded-lg border border-[#669BBC]/30 shadow-sm">
                    <button className="w-full p-4 text-left">
                      <h3 className="font-medium text-[#780000] mb-1 flex items-center gap-2">
                        <Server className="h-5 w-5 text-[#C1121F]" strokeWidth={iconStrokeWidth} />
                        SATYAMEBA Services
                      </h3>
                      <p className="text-sm text-[#003049]/70">Supercomputing infrastructure and services</p>
                    </button>
                    {/* Simplified services list for mobile */}
                    <div className="px-4 pb-4 space-y-2">
                      {satyamebaServices.services.slice(0, 3).map((service) => (
                        <Link key={service.id} href={`/services/${service.id}`} onClick={() => setIsMenuOpen(false)}
                          className="block p-2 bg-white rounded-md hover:bg-[#669BBC]/10 transition-colors border border-[#669BBC]/10">
                          <p className="text-sm font-medium text-[#780000]">{service.name}</p>
                          <p className="text-xs text-[#003049]/70">{service.description}</p>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Configuration */}
                  <div className="space-y-2">
                    <button onClick={() => setExpandedService(expandedService === 999 ? null : 999)}
                      className="flex items-center justify-between w-full p-4 text-left bg-white/80 hover:bg-[#669BBC]/10 rounded-lg transition-colors border border-[#669BBC]/30 hover:border-[#C1121F]/50 shadow-sm">
                      <div>
                        <h3 className="font-medium text-[#780000] mb-1">Configuration</h3>
                        <p className="text-sm text-[#003049]/70">System configuration and management services</p>
                      </div>
                      <ChevronRight className={`h-4 w-4 text-[#C1121F] transition-transform ${expandedService === 999 ? "rotate-90" : ""}`} strokeWidth={iconStrokeWidth} />
                    </button>
                    {expandedService === 999 && (
                      <div className="px-2 pb-2 space-y-1">
                        {configurationServices.services.map((service) => (
                          <Link key={service.id} href={`/configuration/${service.id}`} onClick={() => setIsMenuOpen(false)}
                            className="block p-2 bg-white rounded hover:bg-[#669BBC]/10 transition-colors border border-[#669BBC]/10">
                            <p className="text-sm font-medium text-[#780000]">{service.name}</p>
                            <p className="text-xs text-[#003049]/70">{service.description}</p>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* About & Contact */}
                  <Link href="/about" onClick={() => setIsMenuOpen(false)}
                    className="block w-full p-4 text-left bg-white/80 hover:bg-[#669BBC]/10 rounded-lg transition-colors border border-[#669BBC]/30 hover:border-[#C1121F]/50 shadow-sm">
                    <h3 className="font-medium text-[#780000] mb-1">About Us</h3>
                    <p className="text-sm text-[#003049]/70">Learn about SATYAMEBA and our mission</p>
                  </Link>

                  <Link href="/contact" onClick={() => setIsMenuOpen(false)}
                    className="block w-full p-4 text-left bg-white/80 hover:bg-[#669BBC]/10 rounded-lg transition-colors border border-[#669BBC]/30 hover:border-[#C1121F]/50 shadow-sm">
                    <h3 className="font-medium text-[#780000] mb-1">Contact</h3>
                    <p className="text-sm text-[#003049]/70">Get in touch with our team</p>
                  </Link>

                  {/* Authentication Section */}
                  <div className="border-t border-[#669BBC]/30 pt-4 mt-4">
                    {status === "loading" ? (
                      <div className="block w-full p-4 text-center bg-white/80 rounded-lg border border-[#669BBC]/30 shadow-sm">
                        <p className="text-sm text-[#003049]/70">Loading...</p>
                      </div>
                    ) : session ? (
                      <div className="space-y-2">
                        <div className="block w-full p-4 bg-blue-50 rounded-lg border border-blue-200 shadow-sm">
                          <div className="flex items-center gap-3 mb-3">
                            {session.user?.image ? (
                              <img src={session.user.image} alt="Profile" className="w-10 h-10 rounded-full object-cover border-2 border-blue-300" />
                            ) : (
                              <User className="w-10 h-10 text-blue-600 p-2 bg-blue-100 rounded-full" strokeWidth={iconStrokeWidth} />
                            )}
                            <div>
                              <h3 className="font-medium text-blue-800">{session.user?.name || "Profile"}</h3>
                              <p className="text-sm text-blue-600">{session.user?.email}</p>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Link href="/profile" onClick={() => setIsMenuOpen(false)}
                              className="block w-full p-2 text-left bg-white hover:bg-blue-50 rounded-md transition-colors border border-blue-100">
                              <div className="flex items-center gap-2">
                                <User className="w-4 h-4 text-blue-600" strokeWidth={iconStrokeWidth} />
                                <span className="text-sm font-medium text-blue-800">View Profile</span>
                              </div>
                            </Link>
                            <button onClick={() => { setIsMenuOpen(false); handleSignOut(); }}
                              className="block w-full p-2 text-left bg-white hover:bg-red-50 rounded-md transition-colors border border-red-100">
                              <div className="flex items-center gap-2">
                                <LogOut className="w-4 h-4 text-red-600" strokeWidth={iconStrokeWidth} />
                                <span className="text-sm font-medium text-red-800">Sign Out</span>
                              </div>
                            </button>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <Link href="/auth/signin" onClick={() => setIsMenuOpen(false)}
                          className="block w-full p-4 text-left bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors border border-blue-200 shadow-sm">
                          <div className="flex items-center gap-3">
                            <LogIn className="w-5 h-5 text-blue-600" strokeWidth={iconStrokeWidth} />
                            <div>
                              <h3 className="font-medium text-blue-800">Sign In</h3>
                              <p className="text-sm text-blue-600">Access your account</p>
                            </div>
                          </div>
                        </Link>
                        <Link href="/auth/signup" onClick={() => setIsMenuOpen(false)}
                          className="block w-full p-4 text-left bg-green-50 hover:bg-green-100 rounded-lg transition-colors border border-green-200 shadow-sm">
                          <div className="flex items-center gap-3">
                            <UserPlus className="w-5 h-5 text-green-600" strokeWidth={iconStrokeWidth} />
                            <div>
                              <h3 className="font-medium text-green-800">Sign Up</h3>
                              <p className="text-sm text-green-600">Create a new account</p>
                            </div>
                          </div>
                        </Link>
                      </div>
                    )}
                  </div>
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

