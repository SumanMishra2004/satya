import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Server, Cpu, HardDrive, Zap, Network, Database, Activity, Settings } from 'lucide-react';

export default function BaseNodesPage() {
  const specifications = [
    { icon: Cpu, label: 'Processor', value: 'Xeon W9-3495X', description: '56 Cores / 112 Threads' },
    { icon: Activity, label: 'Performance', value: 'High-End Workstation', description: 'Professional grade processing' },
    { icon: HardDrive, label: 'Memory', value: '256 GB DDR5 ECC', description: 'Error-correcting memory' },
    { icon: Database, label: 'Storage', value: '8 TB NVMe', description: '2×4 TB high-speed storage' },
    { icon: Server, label: 'Chassis', value: 'INWIN 4U Rack', description: 'Rack-mounted server chassis' },
    { icon: Zap, label: 'Power Supply', value: 'Dual 2000W PSU', description: 'Redundant power supply' },
    { icon: Network, label: 'Network', value: '25G NIC ×3', description: 'High-speed networking' },
    { icon: Settings, label: 'Motherboard', value: 'ASUS W790E', description: 'Professional workstation board' }
  ];

  const features = [
    {
      title: 'High-Performance Computing',
      description: 'Designed for demanding computational workloads with 56-core Xeon processors',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Enterprise Reliability',
      description: 'ECC memory and dual PSU configuration ensure maximum uptime',
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Scalable Storage',
      description: '8TB of high-speed NVMe storage with expansion capabilities',
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Network Ready',
      description: 'Multiple 25G network interfaces for high-throughput connectivity',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-8 md:pt-44 pt-20">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="p-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl shadow-lg">
              <Server className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-800 bg-clip-text text-transparent">
                Base Nodes
              </h1>
              <p className="text-gray-700 text-xl mt-2">High-Performance Base Specification Nodes</p>
            </div>
          </div>
        </div>

        {/* Node Count and Type */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-4 bg-white rounded-xl shadow-lg px-6 py-4 border border-blue-200">
            <Badge className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 text-lg">2 Units</Badge>
            <span className="text-gray-700 font-semibold">Rack-Mounted Server Configuration</span>
          </div>
        </div>

        {/* Key Specifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {specifications.map((spec, idx) => (
            <Card key={idx} className="bg-gradient-to-br from-white to-blue-50 border-blue-200 hover:scale-105 transition-transform shadow-lg hover:shadow-xl">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg">
                    <spec.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-sm text-gray-600">{spec.label}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-bold text-gray-900 mb-1">{spec.value}</p>
                <p className="text-sm text-gray-600">{spec.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Detailed Specifications */}
        <Card className="bg-white border-blue-200 shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-700 flex items-center gap-3">
              <Server className="w-7 h-7" />
              Detailed Specifications
            </CardTitle>
            <CardDescription className="text-gray-600 text-lg">
              Complete hardware configuration for base specification nodes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800 border-b border-blue-200 pb-2">Processing & Memory</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <span className="text-gray-700">CPU</span>
                    <span className="font-semibold text-blue-700">Intel Xeon W9-3495X</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-indigo-50 rounded-lg">
                    <span className="text-gray-700">Cores/Threads</span>
                    <span className="font-semibold text-indigo-700">56C / 112T</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <span className="text-gray-700">Memory</span>
                    <span className="font-semibold text-blue-700">256 GB DDR5 ECC</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-indigo-50 rounded-lg">
                    <span className="text-gray-700">Motherboard</span>
                    <span className="font-semibold text-indigo-700">ASUS W790E</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800 border-b border-blue-200 pb-2">Storage & Infrastructure</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <span className="text-gray-700">Storage</span>
                    <span className="font-semibold text-blue-700">8 TB NVMe (2×4 TB)</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-indigo-50 rounded-lg">
                    <span className="text-gray-700">Chassis</span>
                    <span className="font-semibold text-indigo-700">INWIN 4U Rack</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <span className="text-gray-700">Power Supply</span>
                    <span className="font-semibold text-blue-700">Dual 2000W PSU</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-indigo-50 rounded-lg">
                    <span className="text-gray-700">Network</span>
                    <span className="font-semibold text-indigo-700">25G NIC ×3</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, idx) => (
            <Card key={idx} className="bg-white border-blue-200 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className={`text-lg bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Performance Metrics */}
        <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200 shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-700 flex items-center gap-3">
              <Activity className="w-7 h-7" />
              Performance Characteristics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cpu className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Computing Power</h3>
                <p className="text-gray-600">High-performance workstation class processing with 56 cores</p>
              </div>

              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Memory Capacity</h3>
                <p className="text-gray-600">256GB ECC memory for error-free computing and large datasets</p>
              </div>

              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Network className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Network Performance</h3>
                <p className="text-gray-600">25Gbps networking for high-throughput data transfer</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Use Cases */}
        <Card className="bg-white border-blue-200 shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-700">Ideal Use Cases</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-800">Computational Workloads</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Scientific computing and simulations
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Data analysis and processing
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Parallel computing tasks
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-800">Enterprise Applications</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                    Database servers and analytics
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                    Virtualization platforms
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                    High-availability services
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}