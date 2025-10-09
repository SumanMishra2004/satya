import React from 'react'
import { notFound } from 'next/navigation'
import { Cpu, Network, Server, MoreHorizontal, Settings, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { configurationServices } from '@/data/sampleData'

interface ConfigurationPageProps {
  params: Promise<{
    id: string
  }>
}

const ConfigurationPage = async ({ params }: ConfigurationPageProps) => {
  const { id } = await params
  const serviceId = parseInt(id)
  const service = configurationServices.services.find(s => s.id === serviceId)

  if (!service) {
    notFound()
  }

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'cpu':
        return <Cpu className="w-8 h-8" />
      case 'network':
        return <Network className="w-8 h-8" />
      case 'server':
        return <Server className="w-8 h-8" />
      case 'circle-ellipsis':
        return <MoreHorizontal className="w-8 h-8" />
      default:
        return <Settings className="w-8 h-8" />
    }
  }

  const getDetailedContent = (serviceId: number) => {
    switch (serviceId) {
      case 1:
        return {
          title: "Hardware Configuration",
          description: "Comprehensive hardware setup and management for optimal performance",
          features: [
            "High-Performance CPU Configuration",
            "Multi-GPU Setup and Optimization",
            "Memory and Storage Configuration",
            "Cooling System Management",
            "Power Supply Optimization",
            "Hardware Monitoring and Diagnostics"
          ],
          specifications: [
            { label: "CPU Support", value: "Intel Xeon, AMD EPYC" },
            { label: "GPU Support", value: "NVIDIA A100, H100, RTX Series" },
            { label: "Memory", value: "Up to 2TB DDR4/DDR5" },
            { label: "Storage", value: "NVMe SSD, High-Speed Arrays" }
          ]
        }
      case 2:
        return {
          title: "Network Configuration",
          description: "Advanced network infrastructure for high-speed data transfer and connectivity",
          features: [
            "High-Speed Network Setup",
            "Load Balancing Configuration",
            "Security Protocol Implementation",
            "Bandwidth Optimization",
            "Firewall and VPN Setup",
            "Network Monitoring and Analytics"
          ],
          specifications: [
            { label: "Network Speed", value: "Up to 100 Gbps" },
            { label: "Protocols", value: "TCP/IP, InfiniBand, Ethernet" },
            { label: "Security", value: "SSL/TLS, VPN, Firewall" },
            { label: "Monitoring", value: "Real-time network analytics" }
          ]
        }
      case 3:
        return {
          title: "Software Configuration",
          description: "Complete software stack configuration for supercomputing and AI workloads",
          features: [
            "Operating System Optimization",
            "Container Orchestration",
            "AI Framework Installation",
            "Compiler and Library Setup",
            "Job Scheduling Configuration",
            "Performance Monitoring Tools"
          ],
          specifications: [
            { label: "OS Support", value: "Ubuntu, CentOS, RHEL" },
            { label: "Containers", value: "Docker, Kubernetes, Singularity" },
            { label: "AI Frameworks", value: "TensorFlow, PyTorch, CUDA" },
            { label: "Schedulers", value: "SLURM, PBS, SGE" }
          ]
        }
      case 4:
        return {
          title: "Additional Services",
          description: "Extended configuration services and specialized setups",
          features: [
            "Custom Configuration Solutions",
            "Legacy System Integration",
            "Performance Tuning Services",
            "Migration and Upgrade Support",
            "Training and Documentation",
            "24/7 Technical Support"
          ],
          specifications: [
            { label: "Support", value: "24/7 Technical Assistance" },
            { label: "Response Time", value: "< 2 hours" },
            { label: "Training", value: "On-site and Remote" },
            { label: "Documentation", value: "Comprehensive Guides" }
          ]
        }
      default:
        return {
          title: service.name,
          description: service.description,
          features: [],
          specifications: []
        }
    }
  }

  const content = getDetailedContent(serviceId)

  return (
    <div className='w-full min-h-screen bg-gradient-to-br from-[#FDF0D5] to-white'>
      {/* Navigation */}
      <div className='md:pt-44  pt-20 pb-8 px-4 md:px-8 lg:px-16'>
        <div className='max-w-6xl mx-auto'>
          <Link href="/" className='flex items-center gap-2 text-[#780000] hover:text-[#C1121F] transition-colors'>
            <ArrowLeft className='w-5 h-5' />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className='w-full pb-16 px-4 md:px-8 lg:px-16'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-12'>
            <div className='flex justify-center mb-6 text-[#C1121F]'>
              {getIcon(service.icon)}
            </div>
            <h1 className='text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#780000] to-[#C1121F] bg-clip-text text-transparent'>
              {content.title}
            </h1>
            <p className='text-xl text-[#003049]/80 max-w-3xl mx-auto'>
              {content.description}
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className='w-full py-16 bg-gradient-to-r from-[#003049]/5 to-[#669BBC]/5'>
        <div className='max-w-6xl mx-auto px-4 md:px-8 lg:px-16'>
          <div className='grid lg:grid-cols-2 gap-12'>
            {/* Features */}
            <div>
              <h2 className='text-3xl font-bold mb-8 text-[#780000]'>Key Features</h2>
              <div className='space-y-4'>
                {content.features.map((feature, index) => (
                  <div key={index} className='flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm border border-[#669BBC]/20'>
                    <div className='w-2 h-2 bg-[#C1121F] rounded-full flex-shrink-0'></div>
                    <span className='text-[#003049] font-medium'>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Specifications */}
            <div>
              <h2 className='text-3xl font-bold mb-8 text-[#780000]'>Specifications</h2>
              <div className='bg-white rounded-xl p-6 shadow-lg border border-[#669BBC]/20'>
                <div className='space-y-4'>
                  {content.specifications.map((spec, index) => (
                    <div key={index} className='flex justify-between items-center py-3 border-b border-[#669BBC]/20 last:border-b-0'>
                      <span className='text-[#003049] font-medium'>{spec.label}</span>
                      <span className='text-[#780000] font-semibold'>{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='w-full py-16 bg-gradient-to-r from-[#780000] to-[#C1121F]'>
        <div className='max-w-4xl mx-auto px-4 md:px-8 lg:px-16 text-center'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4 text-[#FDF0D5]'>Need Custom Configuration?</h2>
          <p className='text-lg mb-8 text-[#FDF0D5]/90 max-w-2xl mx-auto'>
            Our expert team can help you design and implement custom configuration solutions 
            tailored to your specific requirements.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link
              href='/contact'
              className='bg-[#FDF0D5] text-[#780000] px-8 py-3 rounded-full font-semibold hover:bg-white transition-colors'
            >
              Contact Our Experts
            </Link>
            <Link
              href='/'
              className='bg-transparent border-2 border-[#FDF0D5] text-[#FDF0D5] px-8 py-3 rounded-full font-semibold hover:bg-[#FDF0D5] hover:text-[#780000] transition-colors'
            >
              Explore More Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ConfigurationPage