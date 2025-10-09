import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Cpu, HardDrive, Wifi, Monitor, Settings, Activity, Server, Zap } from 'lucide-react';

export default function CPUComputeNodesPage() {
  const specifications = [
    { icon: Cpu, label: 'Processor', value: 'Intel Core i5 7th Gen', description: 'Reliable desktop processor' },
    { icon: HardDrive, label: 'Memory', value: '8 GB DDR4', description: 'Sufficient system memory' },
    { icon: HardDrive, label: 'Storage', value: '512 GB NVMe', description: 'Fast solid state storage' },
    { icon: Wifi, label: 'Connectivity', value: 'WiFi Enabled', description: 'Wireless network capability' },
    { icon: Monitor, label: 'Form Factor', value: 'Tiny Desktop (Dell)', description: 'Compact form factor' },
    { icon: Settings, label: 'Operating System', value: 'Windows 10/11', description: 'Preloaded OS' },
    { icon: Zap, label: 'Power Efficiency', value: 'Low Power', description: 'Energy efficient design' },
    { icon: Activity, label: 'Deployment', value: 'Distributed', description: 'Edge computing ready' }
  ];

  const features = [
    {
      title: 'Cost-Effective Computing',
      description: 'Affordable CPU-only nodes for parallel processing and distributed computing tasks',
      color: 'from-amber-500 to-orange-600',
      icon: Server
    },
    {
      title: 'Energy Efficient',
      description: 'Low power consumption design perfect for 24/7 operation and green computing',
      color: 'from-green-500 to-emerald-600',
      icon: Zap
    },
    {
      title: 'Compact Design',
      description: 'Dell Tiny Desktop form factor saves space while delivering reliable performance',
      color: 'from-blue-500 to-indigo-600',
      icon: Monitor
    },
    {
      title: 'Easy Deployment',
      description: 'Preloaded Windows OS and WiFi connectivity for quick setup and deployment',
      color: 'from-purple-500 to-violet-600',
      icon: Wifi
    }
  ];

  const useCases = [
    {
      category: 'Distributed Computing',
      applications: [
        'Parallel processing tasks',
        'Monte Carlo simulations',
        'Distributed algorithms',
        'Load balancing scenarios'
      ]
    },
    {
      category: 'Development & Testing',
      applications: [
        'Software testing environments',
        'Continuous integration',
        'Code compilation farms',
        'Development sandboxes'
      ]
    },
    {
      category: 'Educational Use',
      applications: [
        'Computer science labs',
        'Programming courses',
        'Algorithm demonstrations',
        'Network simulation'
      ]
    },
    {
      category: 'Edge Computing',
      applications: [
        'IoT data processing',
        'Edge analytics',
        'Remote monitoring',
        'Distributed sensors'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50 p-8 md:pt-44 pt-20">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="p-4 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl shadow-lg">
              <Cpu className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-amber-600 via-orange-600 to-amber-800 bg-clip-text text-transparent">
                CPU Only Compute Nodes
              </h1>
              <p className="text-gray-700 text-xl mt-2">Distributed CPU Computing Infrastructure</p>
            </div>
          </div>
        </div>

        {/* Node Count and Type */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-4 bg-white rounded-xl shadow-lg px-6 py-4 border border-amber-200">
            <Badge className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-4 py-2 text-lg">7 Units</Badge>
            <span className="text-gray-700 font-semibold">Dell Tiny Desktop Configuration</span>
          </div>
        </div>

        {/* Key Specifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {specifications.map((spec, idx) => (
            <Card key={idx} className="bg-gradient-to-br from-white to-amber-50 border-amber-200 hover:scale-105 transition-transform shadow-lg hover:shadow-xl">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg">
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
        <Card className="bg-white border-amber-200 shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-amber-700 flex items-center gap-3">
              <Server className="w-7 h-7" />
              Complete Node Specifications
            </CardTitle>
            <CardDescription className="text-gray-600 text-lg">
              Dell Tiny Desktop configuration for distributed computing
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800 border-b border-amber-200 pb-2">Hardware Configuration</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-amber-50 rounded-lg">
                    <span className="text-gray-700">CPU</span>
                    <span className="font-semibold text-amber-700">Intel Core i5 7th Gen</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                    <span className="text-gray-700">Memory</span>
                    <span className="font-semibold text-orange-700">8 GB DDR4</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-amber-50 rounded-lg">
                    <span className="text-gray-700">Storage</span>
                    <span className="font-semibold text-amber-700">512 GB NVMe</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                    <span className="text-gray-700">Form Factor</span>
                    <span className="font-semibold text-orange-700">Dell Tiny Desktop</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800 border-b border-amber-200 pb-2">System Features</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-amber-50 rounded-lg">
                    <span className="text-gray-700">Operating System</span>
                    <span className="font-semibold text-amber-700">Windows 10/11 Preloaded</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                    <span className="text-gray-700">Connectivity</span>
                    <span className="font-semibold text-orange-700">WiFi Enabled</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-amber-50 rounded-lg">
                    <span className="text-gray-700">Deployment</span>
                    <span className="font-semibold text-amber-700">Ready to Use</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                    <span className="text-gray-700">Power Consumption</span>
                    <span className="font-semibold text-orange-700">Low Power</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, idx) => (
            <Card key={idx} className="bg-white border-amber-200 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className={`p-3 bg-gradient-to-r ${feature.color} rounded-lg`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
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

        {/* Performance Characteristics */}
        <Card className="bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200 shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-amber-700 flex items-center gap-3">
              <Activity className="w-7 h-7" />
              Performance & Efficiency
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cpu className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Computing Power</h3>
                <p className="text-gray-600">Distributed CPU processing across 7 nodes for parallel workloads</p>
              </div>

              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Energy Efficiency</h3>
                <p className="text-gray-600">Low power consumption design for cost-effective 24/7 operation</p>
              </div>

              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Monitor className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Space Efficiency</h3>
                <p className="text-gray-600">Compact Tiny Desktop form factor maximizes density</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Use Cases */}
        <Card className="bg-white border-amber-200 shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-amber-700">Applications & Use Cases</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {useCases.map((useCase, idx) => (
                <div key={idx} className="space-y-3">
                  <h4 className="font-semibold text-gray-800 text-lg border-b border-amber-200 pb-2">
                    {useCase.category}
                  </h4>
                  <ul className="space-y-2">
                    {useCase.applications.map((app, appIdx) => (
                      <li key={appIdx} className="flex items-center gap-2 text-gray-600">
                        <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                        <span className="text-sm">{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Advantages */}
        <Card className="bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200 shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-amber-700">Key Advantages</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-amber-700">Economic Benefits</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                    Low initial investment cost
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                    Minimal operating expenses
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                    Reduced power consumption
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                    Easy maintenance and support
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-orange-700">Technical Benefits</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    Rapid deployment and setup
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    Wireless network connectivity
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    Scalable distributed architecture
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    Preloaded operating system
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