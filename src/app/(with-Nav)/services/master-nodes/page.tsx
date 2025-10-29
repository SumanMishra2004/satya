import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MonitorPlay, Cpu, HardDrive, Zap, Monitor, Activity, Settings, Gamepad2, Keyboard } from 'lucide-react';

export default function MasterNodesPage() {
  const managementNodes = [
    { icon: Cpu, label: 'Processor', value: 'i9-14900K', description: 'High-performance desktop CPU' },
    { icon: HardDrive, label: 'Memory', value: '32 GB DDR5', description: 'High-speed system memory' },
    { icon: HardDrive, label: 'Storage', value: '2 TB NVMe Samsung', description: 'Premium solid state storage' },
    { icon: Activity, label: 'Graphics', value: 'RTX 5070 12GB', description: 'Professional graphics card' },
    { icon: Monitor, label: 'Display', value: '32″ BenQ Monitor', description: 'Professional display' },
    { icon: Zap, label: 'Cooling', value: 'ML360 Cooler', description: 'Liquid cooling system' },
    { icon: Settings, label: 'Power', value: '1250W PSU', description: 'High-efficiency power supply' },
    { icon: Keyboard, label: 'Peripherals', value: 'Logitech G515/G502', description: 'Gaming peripherals' }
  ];

  const workstationNodes = [
    { icon: Cpu, label: 'Processor', value: 'i7-14700K', description: 'Performance desktop CPU' },
    { icon: HardDrive, label: 'Memory', value: '32 GB DDR5', description: 'High-speed system memory' },
    { icon: HardDrive, label: 'Storage', value: '1 TB NVMe', description: 'Fast solid state storage' },
    { icon: Activity, label: 'Graphics', value: 'RTX 5070 12GB', description: 'Professional graphics card' },
    { icon: Monitor, label: 'Display', value: '32″ BenQ Monitor', description: 'Professional display' },
    { icon: Zap, label: 'Cooling', value: 'Cooler Master ML360', description: 'Liquid cooling system' },
    { icon: Settings, label: 'Power', value: '1250W Gold PSU', description: 'Gold certified power supply' },
    { icon: Settings, label: 'OS', value: 'Windows 11 Pro', description: 'Professional operating system' }
  ];

  const features = [
    {
      title: 'System Management',
      description: 'Centralized control and monitoring of the entire SATYAMEBA infrastructure',
      color: 'from-green-500 to-emerald-600',
      icon: Settings
    },
    {
      title: 'High Performance',
      description: 'Latest generation processors with RTX 5070 graphics for demanding tasks',
      color: 'from-blue-500 to-cyan-600',
      icon: Zap
    },
    {
      title: 'Professional Displays',
      description: '32-inch BenQ monitors for detailed visualization and monitoring',
      color: 'from-purple-500 to-violet-600',
      icon: Monitor
    },
    {
      title: 'User Interface',
      description: 'Dedicated workstations with professional peripherals for optimal user experience',
      color: 'from-orange-500 to-red-600',
      icon: Gamepad2
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 p-8 md:pt-44 pt-20">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="p-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl shadow-lg">
              <MonitorPlay className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-600 via-emerald-600 to-green-800 bg-clip-text text-transparent">
                Master Nodes
              </h1>
              <p className="text-gray-700 text-xl mt-2">Centralized Computing & Management Nodes</p>
            </div>
          </div>
        </div>

        {/* Node Count and Types */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="text-center">
            <div className="bg-white rounded-xl shadow-lg px-6 py-4 border border-green-200">
              <Badge className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-2 text-lg mb-2">2 Units</Badge>
              <h3 className="text-lg font-semibold text-gray-800">Master/Service Nodes</h3>
              <p className="text-gray-600">i9-14900K • Windows 11 Pro</p>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white rounded-xl shadow-lg px-6 py-4 border border-emerald-200">
              <Badge className="bg-gradient-to-r from-emerald-600 to-green-600 text-white px-4 py-2 text-lg mb-2">6 Units</Badge>
              <h3 className="text-lg font-semibold text-gray-800">Workstation Nodes</h3>
              <p className="text-gray-600">i7-14700K • Windows 11 Pro</p>
            </div>
          </div>
        </div>

        {/* Master/Service Nodes Specifications */}
        <Card className="bg-white border-green-200 shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-green-700 flex items-center gap-3">
              <Settings className="w-7 h-7" />
              Master/Service Nodes (2 Units)
            </CardTitle>
            <CardDescription className="text-gray-600 text-lg">
              Primary management and service nodes with i9-14900K processors
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {managementNodes.map((spec, idx) => (
                <div key={idx} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4 border border-green-200 hover:scale-105 transition-transform">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg">
                      <spec.icon className="w-4 h-4 text-white" />
                    </div>
                    <h4 className="text-sm font-semibold text-gray-700">{spec.label}</h4>
                  </div>
                  <p className="text-lg font-bold text-green-700 mb-1">{spec.value}</p>
                  <p className="text-xs text-gray-600">{spec.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-700 mb-2">Additional Features</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                <div>• Windows 11 Pro Operating System</div>
                <div>• UPS 2000VA Power Protection</div>
                <div>• Professional Gaming Peripherals</div>
                <div>• Premium Build Quality</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Workstation Nodes Specifications */}
        <Card className="bg-white border-emerald-200 shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-emerald-700 flex items-center gap-3">
              <MonitorPlay className="w-7 h-7" />
              Workstation Nodes (6 Units)
            </CardTitle>
            <CardDescription className="text-gray-600 text-lg">
              High-performance workstations with i7-14700K processors
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {workstationNodes.map((spec, idx) => (
                <div key={idx} className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-lg p-4 border border-emerald-200 hover:scale-105 transition-transform">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg">
                      <spec.icon className="w-4 h-4 text-white" />
                    </div>
                    <h4 className="text-sm font-semibold text-gray-700">{spec.label}</h4>
                  </div>
                  <p className="text-lg font-bold text-emerald-700 mb-1">{spec.value}</p>
                  <p className="text-xs text-gray-600">{spec.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-emerald-50 rounded-lg border border-emerald-200">
              <h4 className="font-semibold text-emerald-700 mb-2">Additional Features</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                <div>• QHEAL AV Protection (3 Years)</div>
                <div>• UPS 2000VA Power Protection</div>
                <div>• Gold Certified Power Supply</div>
                <div>• Professional Workstation Setup</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, idx) => (
            <Card key={idx} className="bg-white border-green-200 shadow-lg hover:shadow-xl transition-shadow">
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

        {/* Comparison Table */}
        <Card className="bg-white border-green-200 shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-green-700">Node Comparison</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-green-200">
                    <th className="text-left py-3 px-4 text-gray-700">Component</th>
                    <th className="text-left py-3 px-4 text-green-700">Master/Service (2U)</th>
                    <th className="text-left py-3 px-4 text-emerald-700">Workstation (6U)</th>
                  </tr>
                </thead>
                <tbody className="space-y-2">
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 font-semibold text-gray-700">Processor</td>
                    <td className="py-3 px-4 text-green-700">Intel i9-14900K</td>
                    <td className="py-3 px-4 text-emerald-700">Intel i7-14700K</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 font-semibold text-gray-700">Memory</td>
                    <td className="py-3 px-4 text-green-700">32 GB DDR5</td>
                    <td className="py-3 px-4 text-emerald-700">32 GB DDR5</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 font-semibold text-gray-700">Storage</td>
                    <td className="py-3 px-4 text-green-700">2 TB NVMe (Samsung)</td>
                    <td className="py-3 px-4 text-emerald-700">1 TB NVMe</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 font-semibold text-gray-700">Graphics</td>
                    <td className="py-3 px-4 text-green-700">RTX 5070 12GB</td>
                    <td className="py-3 px-4 text-emerald-700">RTX 5070 12GB</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 font-semibold text-gray-700">Purpose</td>
                    <td className="py-3 px-4 text-green-700">System Management</td>
                    <td className="py-3 px-4 text-emerald-700">User Workstations</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Use Cases */}
        <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-green-700">Applications & Use Cases</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-green-700">Master/Service Nodes</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    System administration and monitoring
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Resource management and allocation
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Network and security management
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Service orchestration
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-emerald-700">Workstation Nodes</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    User access and interaction
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    Development and programming
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    Data visualization and analysis
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    Remote desktop and VDI
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