"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Download, MonitorPlay } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function SystemConfigPDFPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-rose-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-rose-600 text-white py-8">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex items-center gap-4 mb-4">
            <Link href="/configuration/system">
              <Button variant="outline" size="sm" className="text-red-600 border-white bg-white hover:bg-red-50">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to System Config
              </Button>
            </Link>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/20 rounded-lg">
                <MonitorPlay className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold">SATYAMEBA System Configuration</h1>
                <p className="text-red-100 text-lg">Detailed System Specifications Document</p>
              </div>
            </div>
            <Button
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/Satyameba System Config.pdf';
                link.download = 'SATYAMEBA_System_Config.pdf';
                link.click();
              }}
              variant="outline"
              className="text-red-600 border-white bg-white hover:bg-red-50 hidden md:flex"
            >
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </Button>
          </div>
        </div>
      </div>

      {/* PDF Viewer */}
      <div className="container mx-auto px-6 py-8 max-w-7xl">
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-red-200">
          <div className="h-[80vh] w-full">
            <iframe
              src="/Satyameba System Config.pdf"
              className="w-full h-full border-0"
              title="SATYAMEBA System Configuration PDF"
            />
          </div>
        </div>
        
        {/* Mobile Download Button */}
        <div className="mt-6 text-center md:hidden">
          <Button
            onClick={() => {
              const link = document.createElement('a');
              link.href = '/Satyameba System Config.pdf';
              link.download = 'SATYAMEBA_System_Config.pdf';
              link.click();
            }}
            className="bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white"
          >
            <Download className="w-4 h-4 mr-2" />
            Download PDF
          </Button>
        </div>
      </div>
    </div>
  );
}