import React from 'react';
import { Network, Server, Database, Globe, Shield, Zap } from 'lucide-react';
import Image from 'next/image';

export default function ArchitecturePage() {
  return (
    <div className="min-h-screen md:mt-32 mt-20 bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-white/20 rounded-lg">
              <Network className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">System Architecture</h1>
              <p className="text-blue-100 text-lg">Design and Planning Solutions</p>
            </div>
          </div>
          <p className="text-xl text-blue-100 max-w-3xl">
            Comprehensive system architecture design and planning services to build robust, 
            scalable, and efficient technological solutions for your organization.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16 max-w-6xl">
        <Image
          src="/Super-Comp.svg"
          alt="System Architecture"
          width={1200}
          height={800}
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
