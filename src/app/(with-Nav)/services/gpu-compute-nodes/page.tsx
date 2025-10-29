import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Zap, Cpu, HardDrive, Monitor, Settings, Activity, Server, Gpu } from 'lucide-react';

export default function GPUComputeNodesPage() {
  const standardNode = [
    { icon: Cpu, label: 'Processor', value: 'i7-14700F', description: 'High-performance desktop CPU' },
    { icon: Settings, label: 'Motherboard', value: 'B760ME DDR5 (MSI)', description: 'MSI gaming motherboard' },
    { icon: HardDrive, label: 'Memory', value: '16 GB DDR5', description: 'High-speed system memory' },
    { icon: HardDrive, label: 'Storage', value: '1 TB NVMe', description: 'Fast solid state storage' },
    { icon: Zap, label: 'Graphics', value: 'RTX 3060', description: 'NVIDIA graphics card' },
    { icon: Monitor, label: 'Display', value: '20″ Acer LED', description: 'LED monitor' },
    { icon: Settings, label: 'Peripherals', value: 'TVSE KB + HP Mouse', description: 'Keyboard and mouse' },
    { icon: Zap, label: 'Power', value: '550W Cooler Master PSU', description: 'Cooler Master power supply' }
  ];

  const highEndNode = [
    { icon: Cpu, label: 'Processor', value: 'AMD Ryzen 9 7950X', description: '16C/32T, 4.5–5.7 GHz' },
    { icon: Settings, label: 'Motherboard', value: 'Asus ROG Crosshair X670E', description: 'Premium AMD motherboard' },
    { icon: HardDrive, label: 'Memory', value: '32 GB DDR5 Corsair 6600MHz', description: 'High-performance memory' },
    { icon: HardDrive, label: 'Storage', value: '2 TB NVMe WD Black SN770X', description: 'Premium NVMe storage' },
    { icon: Zap, label: 'Graphics', value: 'RTX 4090 24GB (Gigabyte)', description: 'Flagship graphics card' },
    { icon: Zap, label: 'Cooling', value: 'ML360 Liquid Cooler', description: 'High-performance cooling' },
    { icon: Activity, label: 'Performance', value: 'Flagship Tier', description: 'Maximum performance' },
    { icon: Server, label: 'Purpose', value: 'AI/ML Workloads', description: 'Deep learning optimized' }
  ];

  const features = [
    {
      title: 'AI & Machine Learning',
      description: 'Optimized for deep learning, neural networks, and AI model training with powerful GPUs',
      color: 'from-purple-500 to-violet-600',
      icon: Zap
    },
    {
      title: 'High-End Performance',
      description: 'RTX 4090 flagship node delivers maximum performance for demanding GPU workloads',
      color: 'from-red-500 to-pink-600',
      icon: Activity
    },
    {
      title: 'Flexible Configuration',
      description: 'Two different performance tiers to match workload requirements and budget',
      color: 'from-blue-500 to-indigo-600',
      icon: Settings
    },
    {
      title: 'Future-Ready',
      description: 'Latest generation hardware with cutting-edge GPU technology for emerging applications',
      color: 'from-green-500 to-emerald-600',
      icon: Server
    }
  ];

  const applications = [
    {
      category: 'Machine Learning',
      description: 'Advanced AI and deep learning applications',
      tasks: [
        'Neural network training',
        'Computer vision models',
        'Natural language processing',
        'Generative AI applications'
      ],
      color: 'purple'
    },
    {
      category: 'Scientific Computing',
      description: 'GPU-accelerated scientific simulations',
      tasks: [
        'Molecular dynamics',
        'Computational fluid dynamics',
        'Weather modeling',
        'Physics simulations'
      ],
      color: 'blue'
    },
    {
      category: 'Graphics & Rendering',
      description: 'Professional graphics and visualization',
      tasks: [
        '3D rendering and animation',
        'Video processing and editing',
        'Ray tracing applications',
        'Real-time visualization'
      ],
      color: 'green'
    },
    {
      category: 'Data Analytics',
      description: 'GPU-accelerated data processing',
      tasks: [
        'Big data analytics',
        'Parallel data processing',
        'Statistical computing',
        'Real-time data streaming'
      ],
      color: 'orange'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-violet-50 p-8 md:pt-44 pt-20">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="p-4 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl shadow-lg">
              <Zap className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-violet-600 to-purple-800 bg-clip-text text-transparent">
                GPU Only Compute Nodes
              </h1>
              <p className="text-gray-700 text-xl mt-2">High-Performance GPU Computing Infrastructure</p>
            </div>
          </div>
        </div>

        {/* Node Types Overview */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="text-center">
            <div className="bg-white rounded-xl shadow-lg px-6 py-4 border border-purple-200">
              <Badge className="bg-gradient-to-r from-purple-600 to-violet-600 text-white px-4 py-2 text-lg mb-2">1 Unit</Badge>
              <h3 className="text-lg font-semibold text-gray-800">Standard GPU Node</h3>
              <p className="text-gray-600">i7-14700F • RTX 3060 • Entry-level GPU computing</p>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white rounded-xl shadow-lg px-6 py-4 border border-violet-200">
              <Badge className="bg-gradient-to-r from-violet-600 to-purple-600 text-white px-4 py-2 text-lg mb-2">1 Unit</Badge>
              <h3 className="text-lg font-semibold text-gray-800">High-End GPU Node</h3>
              <p className="text-gray-600">Ryzen 9 7950X • RTX 4090 24GB • Flagship performance</p>
            </div>
          </div>
        </div>

        {/* Standard GPU Node */}
        <Card className="bg-white border-purple-200 shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-purple-700 flex items-center gap-3">
              <Gpu className="w-7 h-7" />
              Standard GPU Node (1 Unit)
            </CardTitle>
            <CardDescription className="text-gray-600 text-lg">
              Entry-level GPU computing with i7-14700F and RTX 3060
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {standardNode.map((spec, idx) => (
                <div key={idx} className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-lg p-4 border border-purple-200 hover:scale-105 transition-transform">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-gradient-to-br from-purple-500 to-violet-600 rounded-lg">
                      <spec.icon className="w-4 h-4 text-white" />
                    </div>
                    <h4 className="text-sm font-semibold text-gray-700">{spec.label}</h4>
                  </div>
                  <p className="text-lg font-bold text-purple-700 mb-1">{spec.value}</p>
                  <p className="text-xs text-gray-600">{spec.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* High-End GPU Node */}
        <Card className="bg-white border-violet-200 shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-violet-700 flex items-center gap-3">
              <Activity className="w-7 h-7" />
              High-End GPU Node (1 Unit)
            </CardTitle>
            <CardDescription className="text-gray-600 text-lg">
              Flagship performance with Ryzen 9 7950X and RTX 4090 24GB
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {highEndNode.map((spec, idx) => (
                <div key={idx} className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-lg p-4 border border-violet-200 hover:scale-105 transition-transform">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-gradient-to-br from-violet-500 to-purple-600 rounded-lg">
                      <spec.icon className="w-4 h-4 text-white" />
                    </div>
                    <h4 className="text-sm font-semibold text-gray-700">{spec.label}</h4>
                  </div>
                  <p className="text-lg font-bold text-violet-700 mb-1">{spec.value}</p>
                  <p className="text-xs text-gray-600">{spec.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-violet-50 rounded-lg border border-violet-200">
              <h4 className="font-semibold text-violet-700 mb-2">Performance Highlights</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                <div>• 16 Cores / 32 Threads at up to 5.7 GHz</div>
                <div>• 24GB GDDR6X GPU Memory</div>
                <div>• 10,752 CUDA Cores (RTX 4090)</div>
                <div>• Premium liquid cooling system</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Performance Comparison */}
        <Card className="bg-white border-purple-200 shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-purple-700">Node Comparison</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-purple-200">
                    <th className="text-left py-3 px-4 text-gray-700">Component</th>
                    <th className="text-left py-3 px-4 text-purple-700">Standard Node</th>
                    <th className="text-left py-3 px-4 text-violet-700">High-End Node</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 font-semibold text-gray-700">CPU</td>
                    <td className="py-3 px-4 text-purple-700">Intel i7-14700F</td>
                    <td className="py-3 px-4 text-violet-700">AMD Ryzen 9 7950X (16C/32T)</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 font-semibold text-gray-700">GPU</td>
                    <td className="py-3 px-4 text-purple-700">RTX 3060</td>
                    <td className="py-3 px-4 text-violet-700">RTX 4090 24GB</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 font-semibold text-gray-700">Memory</td>
                    <td className="py-3 px-4 text-purple-700">16 GB DDR5</td>
                    <td className="py-3 px-4 text-violet-700">32 GB DDR5 6600MHz</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 font-semibold text-gray-700">Storage</td>
                    <td className="py-3 px-4 text-purple-700">1 TB NVMe</td>
                    <td className="py-3 px-4 text-violet-700">2 TB NVMe WD Black</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 font-semibold text-gray-700">Target Use</td>
                    <td className="py-3 px-4 text-purple-700">Entry-level GPU tasks</td>
                    <td className="py-3 px-4 text-violet-700">AI/ML, Flagship performance</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, idx) => (
            <Card key={idx} className="bg-white border-purple-200 shadow-lg hover:shadow-xl transition-shadow">
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

        {/* Applications */}
        <Card className="bg-white border-purple-200 shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-purple-700">Applications & Use Cases</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {applications.map((app, idx) => (
                <div key={idx} className={`space-y-3 p-6 rounded-xl bg-gradient-to-br from-${app.color}-50 to-${app.color}-100 border border-${app.color}-200`}>
                  <h4 className={`font-semibold text-lg text-${app.color}-700`}>{app.category}</h4>
                  <p className={`text-sm text-${app.color}-600 mb-3`}>{app.description}</p>
                  <ul className="space-y-2">
                    {app.tasks.map((task, taskIdx) => (
                      <li key={taskIdx} className="flex items-center gap-2">
                        <div className={`w-2 h-2 bg-${app.color}-500 rounded-full`}></div>
                        <span className="text-sm text-gray-700">{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* GPU Performance Metrics */}
        <Card className="bg-gradient-to-br from-purple-50 to-violet-50 border-purple-200 shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-purple-700 flex items-center gap-3">
              <Zap className="w-7 h-7" />
              GPU Performance Comparison
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-purple-700 mb-4">RTX 3060</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">CUDA Cores</span>
                    <span className="font-semibold">3,584</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Memory</span>
                    <span className="font-semibold">12GB GDDR6</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Base Clock</span>
                    <span className="font-semibold">1.32 GHz</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Use Case</span>
                    <span className="font-semibold">Entry-level AI/ML</span>
                  </div>
                </div>
              </div>

              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-violet-700 mb-4">RTX 4090</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">CUDA Cores</span>
                    <span className="font-semibold">10,752</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Memory</span>
                    <span className="font-semibold">24GB GDDR6X</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Base Clock</span>
                    <span className="font-semibold">2.23 GHz</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Use Case</span>
                    <span className="font-semibold">Flagship AI/ML</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}