import React from 'react';
import { Network, Server, Database, Globe, Shield, Zap } from 'lucide-react';

export default function ArchitecturePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
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
        {/* Overview Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-6">Architecture Overview</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Enterprise Architecture</h3>
              <p className="text-slate-600 mb-6">
                Design comprehensive enterprise-level system architectures that align with 
                business objectives and technical requirements.
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Business-IT alignment strategies
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Technology roadmap planning
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Integration architecture design
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Cloud Architecture</h3>
              <p className="text-slate-600 mb-6">
                Modern cloud-native architectures designed for scalability, 
                reliability, and cost-effectiveness.
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Multi-cloud strategy design
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Microservices architecture
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Container orchestration
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-8">Our Architecture Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-500 text-white rounded-lg">
                  <Server className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800">Infrastructure Design</h3>
              </div>
              <p className="text-slate-600">
                Comprehensive infrastructure architecture planning and optimization.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-green-500 text-white rounded-lg">
                  <Database className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800">Data Architecture</h3>
              </div>
              <p className="text-slate-600">
                Strategic data management and analytics architecture solutions.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-purple-500 text-white rounded-lg">
                  <Shield className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800">Security Architecture</h3>
              </div>
              <p className="text-slate-600">
                Enterprise security framework design and implementation.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-orange-500 text-white rounded-lg">
                  <Globe className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800">Network Architecture</h3>
              </div>
              <p className="text-slate-600">
                High-performance network design and connectivity solutions.
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-red-500 text-white rounded-lg">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800">Performance Optimization</h3>
              </div>
              <p className="text-slate-600">
                System performance analysis and optimization strategies.
              </p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-teal-500 text-white rounded-lg">
                  <Network className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800">Integration Planning</h3>
              </div>
              <p className="text-slate-600">
                Seamless system integration and API architecture design.
              </p>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-slate-800 mb-8">Our Architecture Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Assessment</h3>
              <p className="text-slate-600 text-sm">
                Comprehensive analysis of current systems and requirements
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Design</h3>
              <p className="text-slate-600 text-sm">
                Strategic architecture design and planning phase
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Validation</h3>
              <p className="text-slate-600 text-sm">
                Architecture review and stakeholder validation
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">4</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Implementation</h3>
              <p className="text-slate-600 text-sm">
                Guided implementation and ongoing support
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
