"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Cpu, HardDrive, Zap, Network, Server, MonitorPlay, Database, Activity } from 'lucide-react';

export default function SatyamebaSystem() {
  const specs = {
    performance: '288 TFLOPS',
    memory: '32.584 TB',
    storage: '≈ 48.6 TB',
  };

  const baseNodes = [
    { icon: Cpu, label: 'Processor', value: 'Xeon W9-3495X' },
    { icon: Activity, label: 'Cores/Threads', value: '56C/112T' },
    { icon: HardDrive, label: 'Memory', value: '256 GB DDR5 ECC' },
    { icon: Database, label: 'Storage', value: '8 TB NVMe (2×4 TB)' },
    { icon: Zap, label: 'Power', value: 'Dual 2000W PSU' },
    { icon: Network, label: 'Network', value: '25G NIC ×3' },
  ];

  const masterNodes = [
    { label: 'CPU', value: 'i9-14900K', color: 'bg-red-600' },
    { label: 'RAM', value: '32 GB DDR5', color: 'bg-rose-600' },
    { label: 'GPU', value: 'RTX 5070 12GB', color: 'bg-red-700' },
    { label: 'Storage', value: '2 TB NVMe', color: 'bg-rose-700' },
  ];

  const gpuNodes = [
    {
      name: 'High-End GPU Node',
      cpu: 'AMD Ryzen 9 7950X',
      specs: '16C/32T, 4.5–5.7 GHz',
      gpu: 'RTX 4090 24GB',
      ram: '32 GB DDR5 6600MHz',
      storage: '2 TB NVMe WD Black',
      gradient: 'from-red-600 to-rose-600'
    },
    {
      name: 'Standard GPU Node',
      cpu: 'i7-14700F',
      gpu: 'RTX 3060',
      ram: '16 GB DDR5',
      storage: '1 TB NVMe',
      gradient: 'from-rose-600 to-red-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-rose-50 p-8 md:pt-44 pt-20">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <h1 className="md:text-6xl text-5xl font-bold bg-gradient-to-r from-red-600 via-rose-500 to-red-700 bg-clip-text text-transparent animate-pulse">
            SATYAMEBA
          </h1>
          <p className="text-gray-700 text-xl">High-Performance Computing System Configuration</p>
        </div>
        {/* View Configuration Dialog */}
        <div className="text-center mb-8 flex justify-center items-center">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2 w-full text-center md:w-auto">
                <MonitorPlay className="w-5 h-5" />
                View System Configuration PDF
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-6xl w-[95vw] h-[90vh] p-0">
              <DialogHeader className="p-6 pb-0">
                <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text text-transparent">
                  SATYAMEBA System Configuration
                </DialogTitle>
              </DialogHeader>
              <div className="flex-1 p-6 pt-2">
                <div className="w-full h-full bg-gray-100 rounded-lg overflow-hidden">
                  <iframe
                    src="/Satyameba System Config.pdf"
                    className="w-full h-full border-0"
                    title="SATYAMEBA System Configuration PDF"
                  />
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        {/* Key Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-gradient-to-br from-red-100 to-rose-50 border-red-300 hover:scale-105 transition-transform shadow-lg">
            <CardHeader>
              <CardTitle className="text-red-700 flex items-center gap-2">
                <Zap className="w-6 h-6" />
                Peak Performance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold text-red-900">{specs.performance}</p>
              <p className="text-red-600 text-sm mt-2">Theoretical RPeak</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-rose-100 to-red-50 border-rose-300 hover:scale-105 transition-transform shadow-lg">
            <CardHeader>
              <CardTitle className="text-rose-700 flex items-center gap-2">
                <HardDrive className="w-6 h-6" />
                Total Memory
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold text-rose-900">{specs.memory}</p>
              <p className="text-rose-600 text-sm mt-2">System RAM</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-red-100 to-white border-red-300 hover:scale-105 transition-transform shadow-lg">
            <CardHeader>
              <CardTitle className="text-red-700 flex items-center gap-2">
                <Database className="w-6 h-6" />
                Total Storage
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold text-red-900">{specs.storage}</p>
              <p className="text-red-600 text-sm mt-2">Including 16TB NAS</p>
            </CardContent>
          </Card>
        </div>

        {/* Base Nodes */}
        <Card className="bg-white/80 border-red-200 backdrop-blur shadow-xl">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-2xl text-red-700 flex items-center gap-2">
                  <Server className="w-7 h-7" />
                  Base Specification Nodes
                </CardTitle>
                <CardDescription className="text-gray-600 mt-2">Dual Xeon W9-3495X · 2 Units · ASUS W790E</CardDescription>
              </div>
              <Badge className="bg-gradient-to-r from-red-600 to-rose-600 text-white px-4 py-2 text-lg">2U</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {baseNodes.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 rounded-lg bg-red-50 hover:bg-red-100 transition-colors border border-red-200">
                  <item.icon className="w-5 h-5 text-red-600 mt-1" />
                  <div>
                    <p className="text-gray-600 text-sm">{item.label}</p>
                    <p className="text-gray-900 font-semibold">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Master/Service Nodes */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-gradient-to-br from-red-50 to-white border-red-200 backdrop-blur shadow-xl">
            <CardHeader>
              <CardTitle className="text-red-700 flex items-center gap-2">
                <MonitorPlay className="w-6 h-6" />
                Master/Service Nodes
              </CardTitle>
              <CardDescription className="text-gray-600">2 Units · i9-14900K · Win 11 Pro</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {masterNodes.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center p-3 rounded-lg bg-rose-50">
                    <span className="text-gray-700">{item.label}</span>
                    <Badge className={`${item.color} text-white`}>{item.value}</Badge>
                  </div>
                ))}
                <div className="pt-3 border-t border-red-200">
                  <p className="text-sm text-gray-600">Peripherals: 32″ BenQ · ML360 Cooler · Logitech G515/G502</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-rose-50 to-white border-rose-200 backdrop-blur shadow-xl">
            <CardHeader>
              <CardTitle className="text-rose-700 flex items-center gap-2">
                <MonitorPlay className="w-6 h-6" />
                Workstation Nodes
              </CardTitle>
              <CardDescription className="text-gray-600">6 Units · i7-14700K · Win 11 Pro</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-4 rounded-lg bg-red-50">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-800 font-semibold">Core Specs</span>
                    <Badge className="bg-rose-600">×6</Badge>
                  </div>
                  <div className="space-y-1 text-sm">
                    <p className="text-gray-700">• 32 GB DDR5 · 1 TB NVMe</p>
                    <p className="text-gray-700">• RTX 5070 12GB · 32″ BenQ</p>
                    <p className="text-gray-700">• ML360 Cooler · 1250W PSU</p>
                    <p className="text-gray-700">• QHEAL AV (3Y) · UPS 2000VA</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* GPU Nodes */}
        <Card className="bg-white/80 border-red-200 backdrop-blur shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-red-700 flex items-center gap-2">
              <Zap className="w-7 h-7" />
              GPU Ready Compute Nodes (Extension)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {gpuNodes.map((node, idx) => (
                <div key={idx} className={`p-6 rounded-xl bg-gradient-to-br ${node.gradient} hover:scale-105 transition-transform shadow-lg`}>
                  <h3 className="text-white font-bold text-lg mb-4">{node.name}</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-red-50 text-sm">CPU</span>
                      <span className="text-white font-semibold">{node.cpu}</span>
                    </div>
                    {node.specs && (
                      <p className="text-red-100 text-xs italic">{node.specs}</p>
                    )}
                    <div className="flex justify-between items-center">
                      <span className="text-red-50 text-sm">GPU</span>
                      <span className="text-white font-semibold">{node.gpu}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-red-50 text-sm">RAM</span>
                      <span className="text-white font-semibold">{node.ram}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-red-50 text-sm">Storage</span>
                      <span className="text-white font-semibold">{node.storage}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* CPU Extension */}
        <Card className="bg-gradient-to-br from-rose-50 to-white border-rose-200 backdrop-blur shadow-xl">
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-rose-700 flex items-center gap-2">
                  <Cpu className="w-6 h-6" />
                  CPU Only Compute Nodes (Extension)
                </CardTitle>
                <CardDescription className="text-gray-600 mt-2">7 Units · Dell Tiny Desktop · Windows 10/11</CardDescription>
              </div>
              <Badge className="bg-rose-600 text-white px-4 py-2">×7</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="p-4 rounded-lg bg-red-50">
              <p className="text-gray-800">Intel Core i5 7th Gen · 8 GB DDR4 · 512 GB NVMe · WiFi</p>
            </div>
          </CardContent>
        </Card>

        {/* Network Infrastructure */}
        <Card className="bg-white/80 border-red-200 backdrop-blur shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-red-700 flex items-center gap-2">
              <Network className="w-7 h-7" />
              Network & Interconnect
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg bg-red-50 border-l-4 border-red-600">
                <p className="text-red-700 font-semibold mb-1">Switch</p>
                <p className="text-gray-800 text-sm">Cisco C9300X 25G</p>
              </div>
              <div className="p-4 rounded-lg bg-rose-50 border-l-4 border-rose-600">
                <p className="text-rose-700 font-semibold mb-1">Firewall</p>
                <p className="text-gray-800 text-sm">FortiGate 100F</p>
              </div>
              <div className="p-4 rounded-lg bg-red-50 border-l-4 border-red-600">
                <p className="text-red-700 font-semibold mb-1">VPN</p>
                <p className="text-gray-800 text-sm">TP-Link ER8411</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm mt-4">Connectivity: SFP Modules + DAC Cables</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}