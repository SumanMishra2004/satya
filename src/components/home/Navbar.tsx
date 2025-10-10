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
  Gpu,
  PhoneCall,
  TerminalIcon,
  HardDrive,
  Shield,
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
import { satyamebaServices, configurationServices } from "@/data/sampleData";
import { Gravitas_One } from "next/font/google";

const UemLogo = () => (
  <div className="h-12 w-12 md:h-20 md:w-28 overflow-hidden flex items-center justify-center font-bold text-[#FDF0D5] rounded-lg bg-[#FDF0D5]">
    <Image
      src="/uem.png"
      alt="UEM Logo"
      width={150}
      height={150}
      className="w-full h-full object-contain"
    />
  </div>
);
const IemLogo = () => (
  <div className="h-12 w-12 md:h-20 md:w-28 overflow-hidden flex items-center justify-center font-bold text-[#FDF0D5] rounded-lg bg-[#FDF0D5]">
    <Image
      src="/iem-logo.png"
      alt="IEM Logo"
      width={150}
      height={150}
      className="w-full h-full object-contain"
    />
  </div>
);
const gravitasOne = Gravitas_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-gravitas-one",
});
const iconStrokeWidth = 0.123 * 16;

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

  return (
    <nav className="fixed top-0 z-50 w-full bg-[#C1121F]/95 backdrop-blur-sm shadow-lg">
      {/* Desktop and Tablet Layout (>md) */}
      <div className="hidden md:block w-full">
        {/* Upper div for logos and university names */}
        <div className=" w-full  px-4 py-1 flex items-center justify-between border-b border-[#669BBC]/50">
          {/* Left: UEM Logo and text */}
          <div className="">
            <UemLogo />
          </div>
          <div className="flex  justify-center items-center gap-6">
            <div className="flex flex-col  items-center justify-center gap-2 ">
              <span
                className={`${gravitasOne.className} font-bold text-4xl text-[#64e8ff] leading-10 tracking-[2]`}
              >
                SATYAMEBA
              </span>
              <span className="font-bold text-xl text-[#FDF0D5]">
                Supercomputing Architecture for Transformative Yield in AI and
                Multi-GPU Engine Based Acceleration
              </span>
            </div>
          </div>
          {/* Right: IEM Logo */}
          <div>
            <IemLogo />
          </div>
        </div>

        {/* Lower div for navigation layout: Home (left) | Navigation (center) | Search + User (right) */}
        <div className=" w-full px-4 py-1 flex items-center justify-between">
          {/* Left: Home */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <Home
                className="h-6 w-6 text-[#FDF0D5]"
                strokeWidth={iconStrokeWidth}
              />
            </Link>
          </div>

          {/* Center: Main Navigation */}
          <div className="flex-1 flex justify-center">
            <NavigationMenu className="[&_[data-slot=navigation-menu-viewport]]:overflow-visible">
              <NavigationMenuList className="flex space-x-2">
                {/* Satyameba Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="flex items-center gap-2 bg-transparent  text-white text-lg">
                    <Server
                      className="h-6 w-6 flex-shrink-0"
                      strokeWidth={iconStrokeWidth}
                    />

                    <span className="hidden md:flex flex-col leading-tight text-left">
                      <span className="tracking-wide font-semibold">
                        SATYAMEBA
                      </span>
                      <span className="text-sm  tracking-normal">Services</span>
                    </span>
                  </NavigationMenuTrigger>

                  <NavigationMenuContent className="overflow-visible bg-[#ab1821]/10">
                    <div className="w-full p-4 min-w-[400px] max-w-[400px] overflow-visible">
                      <div className="mb-4">
                        <h4 className="text-lg font-semibold text-blue-800 mb-1">
                          {satyamebaServices.title}
                        </h4>
                        <p className="text-xs text-black leading-tight">
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
                                      {service.icon}
                                    </div>
                                    <div className="flex-1">
                                      <h5
                                        className={`font-medium transition-colors mb-1 flex items-center gap-2 ${
                                          hoveredService === service.id
                                            ? "text-blue-800"
                                            : "text-black"
                                        }`}
                                      >
                                        {service.name}
                                        <ChevronRight
                                          className="h-4 w-4"
                                          strokeWidth={iconStrokeWidth}
                                        />
                                      </h5>
                                      <p className="text-xs text-black/70 leading-tight">
                                        {service.description}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                {/* First level nested dropdown */}
                                {hoveredService === service.id && (
                                  <div className="absolute left-[96%] top-0 ml-2 z-[100] animate-in fade-in slide-in-from-left-2 duration-200">
                                    <div className="bg-white rounded-lg shadow-xl border border-gray-200 p-3 min-w-[300px]">
                                      <ul className="space-y-2">
                                        {service.subServices.map(
                                          (subService: any) => (
                                            <li
                                              key={subService.id}
                                              className="relative"
                                              onMouseEnter={() => {
                                                if (subService.subServices) {
                                                  setHoveredSubService(
                                                    subService.id
                                                  );
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
                                                      {subService.icon}
                                                      <div className="flex-1">
                                                        <h6
                                                          className={`font-medium transition-colors text-sm flex items-center gap-2 ${
                                                            hoveredSubService ===
                                                            subService.id
                                                              ? "text-blue-600"
                                                              : "text-gray-800"
                                                          }`}
                                                        >
                                                          {subService.name}
                                                          <ChevronRight
                                                            className="h-3 w-3"
                                                            strokeWidth={
                                                              iconStrokeWidth
                                                            }
                                                          />
                                                        </h6>
                                                        <p className="text-xs text-gray-600 leading-tight">
                                                          {
                                                            subService.description
                                                          }
                                                        </p>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  {/* Second level nested dropdown */}
                                                  {hoveredSubService ===
                                                    subService.id && (
                                                    <div className="absolute left-full top-0 ml-2 z-[100] animate-in fade-in slide-in-from-left-2 duration-200">
                                                      <div className="bg-white rounded-lg shadow-xl border border-gray-200 p-3 min-w-[250px]">
                                                        <ul className="space-y-2">
                                                          {subService.subServices.map(
                                                            (
                                                              nestedSub: any
                                                            ) => (
                                                              <li
                                                                key={
                                                                  nestedSub.id
                                                                }
                                                              >
                                                                <Link
                                                                  href={`/services/${service.id}/${subService.id}/${nestedSub.id}`}
                                                                  className="block p-2 rounded-lg hover:bg-blue-50 transition-colors"
                                                                >
                                                                  <div className="flex items-start gap-2">
                                                                    <div className="text-blue-600 mt-0.5">
                                                                      {nestedSub.icon ===
                                                                        "zap" && (
                                                                        <Zap
                                                                          className="h-4 w-4"
                                                                          strokeWidth={
                                                                            iconStrokeWidth
                                                                          }
                                                                        />
                                                                      )}
                                                                      {nestedSub.icon ===
                                                                        "server" && (
                                                                        <Server
                                                                          className="h-4 w-4"
                                                                          strokeWidth={
                                                                            iconStrokeWidth
                                                                          }
                                                                        />
                                                                      )}
                                                                      {nestedSub.icon ===
                                                                        "hard-drive" && (
                                                                        <HardDrive
                                                                          className="h-4 w-4"
                                                                          strokeWidth={
                                                                            iconStrokeWidth
                                                                          }
                                                                        />
                                                                      )}
                                                                      {nestedSub.icon ===
                                                                        "network" && (
                                                                        <Network
                                                                          className="h-4 w-4"
                                                                          strokeWidth={
                                                                            iconStrokeWidth
                                                                          }
                                                                        />
                                                                      )}
                                                                      {nestedSub.icon ===
                                                                        "shield" && (
                                                                        <Shield
                                                                          className="h-4 w-4"
                                                                          strokeWidth={
                                                                            iconStrokeWidth
                                                                          }
                                                                        />
                                                                      )}
                                                                    </div>
                                                                    <div className="flex-1">
                                                                      <h6 className="font-medium text-gray-800 hover:text-blue-600 transition-colors text-sm">
                                                                        {
                                                                          nestedSub.name
                                                                        }
                                                                      </h6>
                                                                      <p className="text-xs text-gray-600 leading-tight">
                                                                        {
                                                                          nestedSub.description
                                                                        }
                                                                      </p>
                                                                    </div>
                                                                  </div>
                                                                </Link>
                                                              </li>
                                                            )
                                                          )}
                                                        </ul>
                                                      </div>
                                                    </div>
                                                  )}
                                                </div>
                                              ) : (
                                                // Sub-service without nesting
                                                <Link
                                                  href={`/services/${service.id}/${subService.id}`}
                                                  className="block p-2 rounded-lg hover:bg-blue-50 transition-colors"
                                                >
                                                  <div className="flex items-start gap-2">
                                                    <div className="text-blue-600 mt-0.5">
                                                      {subService.icon ===
                                                        "server" && (
                                                        <Server
                                                          className="h-4 w-4"
                                                          strokeWidth={
                                                            iconStrokeWidth
                                                          }
                                                        />
                                                      )}
                                                      {subService.icon ===
                                                        "cpu" && (
                                                        <Cpu
                                                          className="h-4 w-4"
                                                          strokeWidth={
                                                            iconStrokeWidth
                                                          }
                                                        />
                                                      )}
                                                      {subService.icon ===
                                                        "zap" && (
                                                        <Zap
                                                          className="h-4 w-4"
                                                          strokeWidth={
                                                            iconStrokeWidth
                                                          }
                                                        />
                                                      )}
                                                      {subService.icon ===
                                                        "circle-ellipsis" && (
                                                        <MoreHorizontal
                                                          className="h-4 w-4"
                                                          strokeWidth={
                                                            iconStrokeWidth
                                                          }
                                                        />
                                                      )}
                                                      {subService.icon ===
                                                        "network" && (
                                                        <Network
                                                          className="h-4 w-4"
                                                          strokeWidth={
                                                            iconStrokeWidth
                                                          }
                                                        />
                                                      )}
                                                      {subService.icon ===
                                                        "hard-drive" && (
                                                        <HardDrive
                                                          className="h-4 w-4"
                                                          strokeWidth={
                                                            iconStrokeWidth
                                                          }
                                                        />
                                                      )}
                                                      {subService.icon ===
                                                        "shield" && (
                                                        <Shield
                                                          className="h-4 w-4"
                                                          strokeWidth={
                                                            iconStrokeWidth
                                                          }
                                                        />
                                                      )}
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
                                          )
                                        )}
                                      </ul>
                                    </div>
                                  </div>
                                )}
                              </div>
                            ) : (
                              // Service without nested dropdown
                              <Link
                                href={`/services/${service.id}`}
                                className="block p-3 rounded-lg hover:bg-blue-50 transition-colors group"
                              >
                                <div className="flex items-start gap-3">
                                  {service.icon}
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
                  <NavigationMenuTrigger className="flex items-center gap-1 bg-transparent text-white text-lg">
                    <Gpu className="h-5 w-5" strokeWidth={iconStrokeWidth} />
                    <span className="hidden md:inline">Configuration</span>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="overflow-visible bg-[#ab1821]/10">
                    <div className="w-full p-4 min-w-[350px] max-w-[350px] overflow-visible">
                      <div className="mb-4">
                        <h4 className="text-lg font-semibold text-blue-800 mb-1">
                          {configurationServices.title}
                        </h4>
                        <p className="text-xs text-black leading-tight">
                          {configurationServices.fullForm}
                        </p>
                      </div>
                      <ul className="space-y-2 overflow-visible">
                        {configurationServices.services.map((service) => (
                          <li key={service.id}>
                            <Link
                              href={`/configuration/${service.id}`}
                              className="block p-2 rounded-lg hover:bg-blue-50 transition-colors"
                            >
                              <div className="flex items-start gap-2">
                                <div className="text-blue-600 mt-0.5">
                                  {service.icon === "cpu" && (
                                    <Cpu
                                      className="h-4 w-4"
                                      strokeWidth={iconStrokeWidth}
                                    />
                                  )}
                                  {service.icon === "network" && (
                                    <Network
                                      className="h-4 w-4"
                                      strokeWidth={iconStrokeWidth}
                                    />
                                  )}
                                  {service.icon === "server" && (
                                    <Server
                                      className="h-4 w-4"
                                      strokeWidth={iconStrokeWidth}
                                    />
                                  )}
                                  {service.icon === "circle-ellipsis" && (
                                    <MoreHorizontal
                                      className="h-4 w-4"
                                      strokeWidth={iconStrokeWidth}
                                    />
                                  )}
                                </div>
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

                <NavigationMenuItem >
                  <NavigationMenuLink
                    asChild
                    className={`${navigationMenuTriggerStyle()} bg-transparent text-white text-lg`}
                  >
                    <Link
                      href="/about"
                      className="flex items-center flex-row gap-1"
                    >
                      <User className="size-5 text-white" strokeWidth={iconStrokeWidth} />
                      <span className="hidden md:inline">About Us</span>
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    className={`${navigationMenuTriggerStyle()} bg-transparent text-white text-lg`}
                  >
                    <Link
                      href="/contact"
                      className="flex items-center flex-row gap-1"
                    >
                      <PhoneCall
                        className="size-5 text-white"
                        strokeWidth={iconStrokeWidth}
                      />
                      <span className="hidden md:inline">Contact Us</span>
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right: Search and User Icons */}
          <div className="flex-shrink-0 flex items-center space-x-4">
            <Button variant="ghost" size="icon" disabled>
              <Search className="size-5 text-white" strokeWidth={iconStrokeWidth} />
            </Button>
            <Button variant="ghost" size="icon" disabled>
              <User className="size-5 text-white" strokeWidth={iconStrokeWidth} />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Layout (<md) */}
      <div className="md:hidden">
        {/* Top navbar for mobile */}
        <div className="w-full px-4 py-3 flex items-center justify-between bg-white/95 backdrop-blur-sm shadow-sm">
          {/* Left side - Logos in sequence: UEM, IEM, SATYAMEBA */}
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

            {/* SATYAMEBA Logo */}
            <div className="h-10 w-10 rounded-full overflow-hidden bg-white shadow-sm">
              <Image
                src="/iedc-logo.jpg"
                alt="SATYAMEBA Logo"
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
            <Menu
              className="h-6 w-6 text-gray-700"
              strokeWidth={iconStrokeWidth}
            />
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
            <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-br from-[#FDF0D5] to-white shadow-xl border-b border-[#669BBC]/30 mx-0 px-4 py-6 transform transition-transform duration-300 ease-out max-h-screen overflow-y-auto">
              <div className="max-w-sm mx-auto">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-light text-[#780000]">
                    Navigation Menu
                  </h2>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="h-8 w-8 flex items-center justify-center rounded-full bg-[#669BBC]/20 hover:bg-[#C1121F]/20 transition-colors"
                  >
                    <X
                      className="h-4 w-4 text-[#780000]"
                      strokeWidth={iconStrokeWidth}
                    />
                  </button>
                </div>

                <div className="space-y-3 pb-6">
                  {/* Home */}
                  <Link
                    href="/"
                    onClick={() => setIsMenuOpen(false)}
                    className="block w-full p-4 text-left bg-white/80 hover:bg-[#669BBC]/10 rounded-lg transition-colors border border-[#669BBC]/30 hover:border-[#C1121F]/50 shadow-sm"
                  >
                    <h3 className="font-medium text-[#780000] mb-1">Home</h3>
                    <p className="text-sm text-[#003049]/70">
                      Homepage with SATYAMEBA overview and services
                    </p>
                  </Link>

                  {/* Satyameba Expandable */}
                  <div className="bg-white/80 rounded-lg border border-[#669BBC]/30 shadow-sm">
                    <button className="w-full p-4 text-left">
                      <h3 className="font-medium text-[#780000] mb-1 flex items-center gap-2">
                        <Server
                          className="h-5 w-5 text-[#C1121F]"
                          strokeWidth={iconStrokeWidth}
                        />
                        SATYAMEBA Services
                      </h3>
                      <p className="text-sm text-[#003049]/70">
                        Supercomputing infrastructure and services
                      </p>
                    </button>
                    <div className="px-4 pb-4 space-y-2">
                      {satyamebaServices.services.map((service) => (
                        <div key={service.id}>
                          {service.subServices ? (
                            // Service with nested items
                            <div className="bg-white rounded-md border border-[#669BBC]/20">
                              <button
                                onClick={() =>
                                  setExpandedService(
                                    expandedService === service.id
                                      ? null
                                      : service.id
                                  )
                                }
                                className="w-full p-2 text-left hover:bg-[#669BBC]/10 transition-colors rounded-md"
                              >
                                <div className="flex items-center justify-between">
                                  <div>
                                    <p className="text-sm font-medium text-[#780000]">
                                      {service.name}
                                    </p>
                                    <p className="text-xs text-[#003049]/70">
                                      {service.description}
                                    </p>
                                  </div>
                                  <ChevronRight
                                    className={`h-4 w-4 text-[#C1121F] transition-transform ${
                                      expandedService === service.id
                                        ? "rotate-90"
                                        : ""
                                    }`}
                                    strokeWidth={iconStrokeWidth}
                                  />
                                </div>
                              </button>
                              {expandedService === service.id && (
                                <div className="px-2 pb-2 space-y-1">
                                  {service.subServices.map(
                                    (subService: any) => (
                                      <div key={subService.id}>
                                        {subService.subServices ? (
                                          // Sub-service with nested items
                                          <div className="bg-[#FDF0D5]/50 rounded border border-[#669BBC]/20">
                                            <button
                                              onClick={() =>
                                                setExpandedSubService(
                                                  expandedSubService ===
                                                    subService.id
                                                    ? null
                                                    : subService.id
                                                )
                                              }
                                              className="w-full p-2 text-left hover:bg-[#669BBC]/10 transition-colors rounded"
                                            >
                                              <div className="flex items-center justify-between">
                                                <div>
                                                  <p className="text-sm font-medium text-[#780000]">
                                                    {subService.name}
                                                  </p>
                                                  <p className="text-xs text-[#003049]/70">
                                                    {subService.description}
                                                  </p>
                                                </div>
                                                <ChevronRight
                                                  className={`h-3 w-3 text-[#C1121F] transition-transform ${
                                                    expandedSubService ===
                                                    subService.id
                                                      ? "rotate-90"
                                                      : ""
                                                  }`}
                                                  strokeWidth={iconStrokeWidth}
                                                />
                                              </div>
                                            </button>
                                            {expandedSubService ===
                                              subService.id && (
                                              <div className="px-2 pb-2 space-y-1">
                                                {subService.subServices.map(
                                                  (nestedSub: any) => (
                                                    <Link
                                                      key={nestedSub.id}
                                                      href={`/services/${service.id}/${subService.id}/${nestedSub.id}`}
                                                      onClick={() =>
                                                        setIsMenuOpen(false)
                                                      }
                                                      className="block p-2 bg-white rounded hover:bg-[#669BBC]/10 transition-colors border border-[#669BBC]/10"
                                                    >
                                                      <p className="text-xs font-medium text-[#780000]">
                                                        {nestedSub.name}
                                                      </p>
                                                      <p className="text-xs text-[#003049]/70">
                                                        {nestedSub.description}
                                                      </p>
                                                    </Link>
                                                  )
                                                )}
                                              </div>
                                            )}
                                          </div>
                                        ) : (
                                          // Sub-service without nesting
                                          <Link
                                            href={`/services/${service.id}/${subService.id}`}
                                            onClick={() => setIsMenuOpen(false)}
                                            className="block p-2 bg-[#FDF0D5]/50 rounded hover:bg-[#669BBC]/10 transition-colors border border-[#669BBC]/10"
                                          >
                                            <p className="text-sm font-medium text-[#780000]">
                                              {subService.name}
                                            </p>
                                            <p className="text-xs text-[#003049]/70">
                                              {subService.description}
                                            </p>
                                          </Link>
                                        )}
                                      </div>
                                    )
                                  )}
                                </div>
                              )}
                            </div>
                          ) : (
                            // Service without nested items
                            <Link
                              href={`/services/${service.id}`}
                              onClick={() => setIsMenuOpen(false)}
                              className="block p-2 bg-white rounded-md hover:bg-[#669BBC]/10 transition-colors border border-[#669BBC]/10"
                            >
                              <p className="text-sm font-medium text-[#780000]">
                                {service.name}
                              </p>
                              <p className="text-xs text-[#003049]/70">
                                {service.description}
                              </p>
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Configuration */}
                  <div className="space-y-2">
                    <button
                      onClick={() =>
                        setExpandedService(expandedService === 999 ? null : 999)
                      }
                      className="flex items-center justify-between w-full p-4 text-left bg-white/80 hover:bg-[#669BBC]/10 rounded-lg transition-colors border border-[#669BBC]/30 hover:border-[#C1121F]/50 shadow-sm"
                    >
                      <div>
                        <h3 className="font-medium text-[#780000] mb-1">
                          Configuration
                        </h3>
                        <p className="text-sm text-[#003049]/70">
                          System configuration and management services
                        </p>
                      </div>
                      <ChevronRight
                        className={`h-4 w-4 text-[#C1121F] transition-transform ${
                          expandedService === 999 ? "rotate-90" : ""
                        }`}
                        strokeWidth={iconStrokeWidth}
                      />
                    </button>
                    {expandedService === 999 && (
                      <div className="px-2 pb-2 space-y-1">
                        {configurationServices.services.map((service) => (
                          <Link
                            key={service.id}
                            href={`/configuration/${service.id}`}
                            onClick={() => setIsMenuOpen(false)}
                            className="block p-2 bg-white rounded hover:bg-[#669BBC]/10 transition-colors border border-[#669BBC]/10"
                          >
                            <p className="text-sm font-medium text-[#780000]">
                              {service.name}
                            </p>
                            <p className="text-xs text-[#003049]/70">
                              {service.description}
                            </p>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* About Us */}
                  <Link
                    href="/about"
                    onClick={() => setIsMenuOpen(false)}
                    className="block w-full p-4 text-left bg-white/80 hover:bg-[#669BBC]/10 rounded-lg transition-colors border border-[#669BBC]/30 hover:border-[#C1121F]/50 shadow-sm"
                  >
                    <h3 className="font-medium text-[#780000] mb-1">
                      About Us
                    </h3>
                    <p className="text-sm text-[#003049]/70">
                      Learn about SATYAMEBA and our mission
                    </p>
                  </Link>

                  {/* Contact */}
                  <Link
                    href="/contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="block w-full p-4 text-left bg-white/80 hover:bg-[#669BBC]/10 rounded-lg transition-colors border border-[#669BBC]/30 hover:border-[#C1121F]/50 shadow-sm"
                  >
                    <h3 className="font-medium text-[#780000] mb-1">Contact</h3>
                    <p className="text-sm text-[#003049]/70">
                      Get in touch with our team
                    </p>
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
