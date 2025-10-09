"use client";

import React, { useState } from "react";
import {
  Airplay,
  Check,
  ChevronRight,
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
  Users,
  Menu,
  X,
  Server,
  Network,
  Cpu,
  Zap,
  MoreHorizontal,
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
import { satyamebaServices } from "@/data/sampleData";

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

const iconStrokeWidth = 0.123 * 16;

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [expandedService, setExpandedService] = useState<number | null>(null)
  const [expandedSubService, setExpandedSubService] = useState<string | null>(null)
  const [hoveredService, setHoveredService] = useState<number | null>(null)
  const [hoveredSubService, setHoveredSubService] = useState<string | null>(null)

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
            <NavigationMenu className="[&_[data-slot=navigation-menu-viewport]]:overflow-visible">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <Link href="/" className="flex items-center flex-row gap-1">
                      <Home className="h-5 w-5" strokeWidth={iconStrokeWidth} />
                      <span className="hidden md:inline">Home</span>
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {/* Satyameba Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="flex items-center gap-1">
                    <Server className="h-5 w-5" strokeWidth={iconStrokeWidth} />
                    <span className="hidden md:inline">Satyameba</span>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="overflow-visible">
                    <div className="w-full p-4 min-w-[400px] max-w-[400px] overflow-visible">
                      <div className="mb-4">
                        <h4 className="text-lg font-semibold text-blue-600 mb-1">
                          {satyamebaServices.title}
                        </h4>
                        <p className="text-xs text-gray-600 leading-tight">
                          {satyamebaServices.fullForm}
                        </p>
                      </div>
                      <ul className="space-y-2 overflow-visible">
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
                              // Service with nested dropdown
                              <div className="relative">
                                <div className="block p-3 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer">
                                  <div className="flex items-start gap-3">
                                    <div className="text-blue-600 mt-1">
                                      {service.icon === 'users' && <Users className="h-5 w-5" strokeWidth={iconStrokeWidth} />}
                                      {service.icon === 'network' && <Network className="h-5 w-5" strokeWidth={iconStrokeWidth} />}
                                      {service.icon === 'server' && <Server className="h-5 w-5" strokeWidth={iconStrokeWidth} />}
                                      {service.icon === 'cpu' && <Cpu className="h-5 w-5" strokeWidth={iconStrokeWidth} />}
                                      {service.icon === 'power' && <Zap className="h-5 w-5" strokeWidth={iconStrokeWidth} />}
                                      {service.icon === 'circle-ellipsis' && <MoreHorizontal className="h-5 w-5" strokeWidth={iconStrokeWidth} />}
                                    </div>
                                    <div className="flex-1">
                                      <h5 className={`font-medium transition-colors mb-1 flex items-center gap-2 ${hoveredService === service.id ? 'text-blue-600' : 'text-gray-800'}`}>
                                        {service.name}
                                        <ChevronRight className="h-4 w-4" strokeWidth={iconStrokeWidth} />
                                      </h5>
                                      <p className="text-xs text-gray-600 leading-tight">
                                        {service.description}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                {/* First level nested dropdown */}
                                {hoveredService === service.id && (
                                  <div className="absolute left-full top-0 ml-2 z-[100] animate-in fade-in slide-in-from-left-2 duration-200">
                                    <div className="bg-white rounded-lg shadow-xl border border-gray-200 p-3 min-w-[300px]">
                                      <ul className="space-y-2">
                                        {service.subServices.map((subService: any) => (
                                          <li
                                            key={subService.id}
                                            className="relative"
                                            onMouseEnter={() => {
                                              if (subService.subServices) {
                                                setHoveredSubService(subService.id);
                                              }
                                            }}
                                            onMouseLeave={() => {
                                              setHoveredSubService(null);
                                            }}
                                          >
                                            {subService.subServices ? (
                                              // Sub-service with another level of nesting
                                              <div className="relative">
                                                <div className="block p-2 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer">
                                                  <div className="flex items-start gap-2">
                                                    <div className="text-blue-600 mt-0.5">
                                                      {subService.icon === 'server' && <Server className="h-4 w-4" strokeWidth={iconStrokeWidth} />}
                                                      {subService.icon === 'cpu' && <Cpu className="h-4 w-4" strokeWidth={iconStrokeWidth} />}
                                                      {subService.icon === 'zap' && <Zap className="h-4 w-4" strokeWidth={iconStrokeWidth} />}
                                                      {subService.icon === 'circle-ellipsis' && <MoreHorizontal className="h-4 w-4" strokeWidth={iconStrokeWidth} />}
                                                    </div>
                                                    <div className="flex-1">
                                                      <h6 className={`font-medium transition-colors text-sm flex items-center gap-2 ${hoveredSubService === subService.id ? 'text-blue-600' : 'text-gray-800'}`}>
                                                        {subService.name}
                                                        <ChevronRight className="h-3 w-3" strokeWidth={iconStrokeWidth} />
                                                      </h6>
                                                      <p className="text-xs text-gray-600 leading-tight">
                                                        {subService.description}
                                                      </p>
                                                    </div>
                                                  </div>
                                                </div>
                                                {/* Second level nested dropdown */}
                                                {hoveredSubService === subService.id && (
                                                  <div className="absolute left-full top-0 ml-2 z-[100] animate-in fade-in slide-in-from-left-2 duration-200">
                                                    <div className="bg-white rounded-lg shadow-xl border border-gray-200 p-3 min-w-[250px]">
                                                      <ul className="space-y-2">
                                                        {subService.subServices.map((nestedSub: any) => (
                                                          <li key={nestedSub.id}>
                                                            <Link
                                                              href={`/satyameba/${service.id}/${subService.id}/${nestedSub.id}`}
                                                              className="block p-2 rounded-lg hover:bg-blue-50 transition-colors"
                                                            >
                                                              <div className="flex items-start gap-2">
                                                                <div className="text-blue-600 mt-0.5">
                                                                  {nestedSub.icon === 'zap' && <Zap className="h-4 w-4" strokeWidth={iconStrokeWidth} />}
                                                                </div>
                                                                <div className="flex-1">
                                                                  <h6 className="font-medium text-gray-800 hover:text-blue-600 transition-colors text-sm">
                                                                    {nestedSub.name}
                                                                  </h6>
                                                                  <p className="text-xs text-gray-600 leading-tight">
                                                                    {nestedSub.description}
                                                                  </p>
                                                                </div>
                                                              </div>
                                                            </Link>
                                                          </li>
                                                        ))}
                                                      </ul>
                                                    </div>
                                                  </div>
                                                )}
                                              </div>
                                            ) : (
                                              // Sub-service without nesting
                                              <Link
                                                href={`/satyameba/${service.id}/${subService.id}`}
                                                className="block p-2 rounded-lg hover:bg-blue-50 transition-colors"
                                              >
                                                <div className="flex items-start gap-2">
                                                  <div className="text-blue-600 mt-0.5">
                                                    {subService.icon === 'server' && <Server className="h-4 w-4" strokeWidth={iconStrokeWidth} />}
                                                    {subService.icon === 'cpu' && <Cpu className="h-4 w-4" strokeWidth={iconStrokeWidth} />}
                                                    {subService.icon === 'zap' && <Zap className="h-4 w-4" strokeWidth={iconStrokeWidth} />}
                                                    {subService.icon === 'circle-ellipsis' && <MoreHorizontal className="h-4 w-4" strokeWidth={iconStrokeWidth} />}
                                                  </div>
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
                              // Service without nested dropdown
                              <Link
                                href={`/satyameba/${service.id}`}
                                className="block p-3 rounded-lg hover:bg-blue-50 transition-colors group"
                              >
                                <div className="flex items-start gap-3">
                                  <div className="text-blue-600 mt-1">
                                    {service.icon === 'users' && <Users className="h-5 w-5" strokeWidth={iconStrokeWidth} />}
                                    {service.icon === 'network' && <Network className="h-5 w-5" strokeWidth={iconStrokeWidth} />}
                                    {service.icon === 'server' && <Server className="h-5 w-5" strokeWidth={iconStrokeWidth} />}
                                    {service.icon === 'cpu' && <Cpu className="h-5 w-5" strokeWidth={iconStrokeWidth} />}
                                    {service.icon === 'power' && <Zap className="h-5 w-5" strokeWidth={iconStrokeWidth} />}
                                    {service.icon === 'circle-ellipsis' && <MoreHorizontal className="h-5 w-5" strokeWidth={iconStrokeWidth} />}
                                  </div>
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

                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <Link href="/editorial-board" className="flex items-center flex-row gap-1">
                      <User className="h-5 w-5" strokeWidth={iconStrokeWidth} />
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
                      <SquareTerminal className="h-5 w-5" strokeWidth={iconStrokeWidth} />
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
                      <Terminal className="h-5 w-5" strokeWidth={iconStrokeWidth} />
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
                      <Contact className="h-5 w-5" strokeWidth={iconStrokeWidth} />
                      <span className="hidden md:inline">Contact</span>
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <Search className="h-5 w-5" strokeWidth={iconStrokeWidth} />
              </Button>
              <User strokeWidth={iconStrokeWidth} />
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
            <Menu className="h-6 w-6 text-gray-700" strokeWidth={iconStrokeWidth} />
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
                    <X className="h-4 w-4 text-gray-600" strokeWidth={iconStrokeWidth} />
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

                  {/* Satyameba Expandable */}
                  <div className='bg-gray-50 rounded-lg border border-gray-200'>
                    <button className="w-full p-4 text-left">
                      <h3 className="font-medium text-gray-800 mb-1 flex items-center gap-2">
                        <Server className="h-5 w-5 text-blue-600" strokeWidth={iconStrokeWidth} />
                        Satyameba Services
                      </h3>
                      <p className="text-sm text-gray-600">Supercomputing infrastructure and services</p>
                    </button>
                    <div className="px-4 pb-4 space-y-2">
                      {satyamebaServices.services.map((service) => (
                        <div key={service.id}>
                          {service.subServices ? (
                            // Service with nested items
                            <div className="bg-white rounded-md border border-gray-200">
                              <button
                                onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
                                className="w-full p-2 text-left hover:bg-blue-50 transition-colors rounded-md"
                              >
                                <div className="flex items-center justify-between">
                                  <div>
                                    <p className="text-sm font-medium text-gray-800">{service.name}</p>
                                    <p className="text-xs text-gray-600">{service.description}</p>
                                  </div>
                                  <ChevronRight
                                    className={`h-4 w-4 transition-transform ${expandedService === service.id ? 'rotate-90' : ''}`}
                                    strokeWidth={iconStrokeWidth}
                                  />
                                </div>
                              </button>
                              {expandedService === service.id && (
                                <div className="px-2 pb-2 space-y-1">
                                  {service.subServices.map((subService: any) => (
                                    <div key={subService.id}>
                                      {subService.subServices ? (
                                        // Sub-service with nested items
                                        <div className="bg-gray-50 rounded border border-gray-200">
                                          <button
                                            onClick={() => setExpandedSubService(expandedSubService === subService.id ? null : subService.id)}
                                            className="w-full p-2 text-left hover:bg-blue-50 transition-colors rounded"
                                          >
                                            <div className="flex items-center justify-between">
                                              <div>
                                                <p className="text-sm font-medium text-gray-800">{subService.name}</p>
                                                <p className="text-xs text-gray-600">{subService.description}</p>
                                              </div>
                                              <ChevronRight
                                                className={`h-3 w-3 transition-transform ${expandedSubService === subService.id ? 'rotate-90' : ''}`}
                                                strokeWidth={iconStrokeWidth}
                                              />
                                            </div>
                                          </button>
                                          {expandedSubService === subService.id && (
                                            <div className="px-2 pb-2 space-y-1">
                                              {subService.subServices.map((nestedSub: any) => (
                                                <Link
                                                  key={nestedSub.id}
                                                  href={`/satyameba/${service.id}/${subService.id}/${nestedSub.id}`}
                                                  onClick={() => setIsMenuOpen(false)}
                                                  className="block p-2 bg-white rounded hover:bg-blue-50 transition-colors"
                                                >
                                                  <p className="text-xs font-medium text-gray-800">{nestedSub.name}</p>
                                                  <p className="text-xs text-gray-600">{nestedSub.description}</p>
                                                </Link>
                                              ))}
                                            </div>
                                          )}
                                        </div>
                                      ) : (
                                        // Sub-service without nesting
                                        <Link
                                          href={`/satyameba/${service.id}/${subService.id}`}
                                          onClick={() => setIsMenuOpen(false)}
                                          className="block p-2 bg-gray-50 rounded hover:bg-blue-50 transition-colors"
                                        >
                                          <p className="text-sm font-medium text-gray-800">{subService.name}</p>
                                          <p className="text-xs text-gray-600">{subService.description}</p>
                                        </Link>
                                      )}
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          ) : (
                            // Service without nested items
                            <Link
                              href={`/satyameba/${service.id}`}
                              onClick={() => setIsMenuOpen(false)}
                              className="block p-2 bg-white rounded-md hover:bg-blue-50 transition-colors"
                            >
                              <p className="text-sm font-medium text-gray-800">{service.name}</p>
                              <p className="text-xs text-gray-600">{service.description}</p>
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

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
