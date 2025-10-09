import React from 'react'
import { notFound } from 'next/navigation'
import { Users, Network, Server, Cpu, Zap, ArrowLeft, MoreHorizontal } from 'lucide-react'
import Link from 'next/link'
import { satyamebaServices } from '@/data/sampleData'

interface ServicePageProps {
  params: Promise<{
    id: string
  }>
}

const ServicePage = async ({ params }: ServicePageProps) => {
  const { id } = await params
  const serviceId = parseInt(id)
  const service = satyamebaServices.services.find(s => s.id === serviceId)

  if (!service) {
    notFound()
  }

  const getIcon = (iconName: string, size: string = "w-8 h-8") => {
    switch (iconName) {
      case 'users':
        return <Users className={size} />
      case 'network':
        return <Network className={size} />
      case 'server':
        return <Server className={size} />
      case 'cpu':
        return <Cpu className={size} />
      case 'power':
        return <Zap className={size} />
      case 'circle-ellipsis':
        return <MoreHorizontal className={size} />
      default:
        return <Server className={size} />
    }
  }

  const getDetailedContent = (serviceId: number) => {
    switch (serviceId) {
      case 1:
        return {
          title: "HPC User Access",
          description: "Comprehensive high-performance computing access for advanced research and development projects",
          overview: "Our HPC User Access service provides researchers, academicians, and industry professionals with access to state-of-the-art supercomputing infrastructure. Whether you need computational resources for AI training, scientific simulations, or data analytics, our platform delivers the performance and scalability you require.",
          benefits: [
            "High-performance computing clusters with latest hardware",
            "Scalable infrastructure from single nodes to massive parallel processing",
            "Pre-configured environments for AI/ML, scientific computing, and data analysis",
            "24/7 technical support and system monitoring",
            "Flexible resource allocation based on project requirements",
            "Cost-effective pay-as-you-use pricing model"
          ],
          applications: [
            "Machine Learning and Deep Learning Training",
            "Scientific Simulations and Modeling",
            "Big Data Analytics and Processing",
            "Computational Fluid Dynamics (CFD)",
            "Bioinformatics and Genomics Research",
            "Financial Modeling and Risk Analysis"
          ]
        }
      case 2:
        return {
          title: "Network Infrastructure",
          description: "Enterprise-grade network infrastructure with advanced security and high-speed connectivity",
          overview: "Our network infrastructure features cutting-edge equipment including Fortinet FortiGate 100F firewalls, TP-Link Omada VPN routers, and Cisco Catalyst switches. This robust foundation ensures secure, high-speed connectivity for all your computing needs.",
          benefits: [
            "Enterprise-grade security with Fortinet FortiGate protection",
            "High-speed data transfer capabilities",
            "Redundant network paths for maximum uptime",
            "Advanced VPN solutions for secure remote access",
            "Network monitoring and optimization",
            "Scalable bandwidth allocation"
          ],
          applications: [
            "Secure Data Transfer and Storage",
            "Remote Access and Collaboration",
            "Real-time Data Streaming",
            "Distributed Computing Workloads",
            "Cloud Integration and Hybrid Solutions",
            "IoT Device Connectivity"
          ]
        }
      case 3:
        return {
          title: "Master Nodes",
          description: "Centralized computing powerhouses for resource management and job scheduling",
          overview: "Our master nodes (Server 1 & Server 2) serve as the central nervous system of our supercomputing infrastructure. These high-performance servers manage resource allocation, job scheduling, and system orchestration across our entire computing cluster.",
          benefits: [
            "Centralized resource management and allocation",
            "Advanced job scheduling and queue management",
            "Load balancing across compute nodes",
            "System monitoring and health management",
            "User authentication and access control",
            "Performance optimization and tuning"
          ],
          applications: [
            "Job Queue Management",
            "Resource Allocation Optimization",
            "System Performance Monitoring",
            "User Environment Management",
            "Batch Processing Coordination",
            "Cluster Administration"
          ]
        }
      case 4:
        return {
          title: "Edge Nodes",
          description: "Distributed computing infrastructure for parallel processing and edge analytics",
          overview: "Our edge nodes provide distributed computing capabilities that bring processing power closer to data sources. This infrastructure enables efficient parallel processing, reduced latency, and improved performance for distributed applications.",
          benefits: [
            "Distributed parallel processing capabilities",
            "Reduced latency for time-sensitive applications",
            "Edge analytics and real-time processing",
            "Fault-tolerant distributed architecture",
            "Efficient data locality optimization",
            "Scalable node addition and management"
          ],
          applications: [
            "Parallel Scientific Computing",
            "Real-time Data Processing",
            "Edge AI and Machine Learning",
            "Distributed Simulations",
            "IoT Data Analytics",
            "Content Delivery and Caching"
          ]
        }
      case 5:
        return {
          title: "UPS Power Supply",
          description: "Uninterruptible power supply ensuring continuous operation and data protection",
          overview: "Our enterprise-grade UPS power supply system ensures continuous operation of all critical infrastructure. With redundant power systems and intelligent battery management, we guarantee maximum uptime for your computational workloads.",
          benefits: [
            "Continuous power supply with zero downtime",
            "Protection against power fluctuations and outages",
            "Intelligent battery management and monitoring",
            "Redundant power systems for maximum reliability",
            "Automatic failover and recovery",
            "Extended runtime for graceful shutdowns"
          ],
          applications: [
            "Critical Computing Operations",
            "Data Protection and Integrity",
            "Long-running Simulations",
            "24/7 Service Availability",
            "Emergency Power Backup",
            "Power Quality Management"
          ]
        }
      default:
        return {
          title: service.name,
          description: service.description,
          overview: "",
          benefits: [],
          applications: []
        }
    }
  }

  const content = getDetailedContent(serviceId)

  return (
    <div className='w-full min-h-screen bg-gradient-to-br from-[#FDF0D5] to-white'>
      {/* Navigation */}
      <div className='md:pt-44  pt-20 pb-8 px-4 md:px-8 lg:px-16'>
        <div className='max-w-6xl mx-auto'>
          <Link href="/" className='flex items-center gap-2 text-[#780000] hover:text-[#C1121F] transition-colors mb-6'>
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
            <p className='text-xl text-[#003049]/80 max-w-3xl mx-auto mb-8'>
              {content.description}
            </p>
            {content.overview && (
              <p className='text-lg text-[#003049]/70 max-w-4xl mx-auto leading-relaxed'>
                {content.overview}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Sub-services for HPC User Access */}
      {service.subServices && (
        <section className='w-full py-16 bg-gradient-to-r from-[#003049]/5 to-[#669BBC]/5'>
          <div className='max-w-6xl mx-auto px-4 md:px-8 lg:px-16'>
            <h2 className='text-3xl font-bold text-center mb-12 text-[#780000]'>Service Categories</h2>
            <div className='grid md:grid-cols-3 gap-8'>
              {service.subServices.map((subService) => (
                <div key={subService.id} className='bg-white rounded-xl p-6 shadow-lg border border-[#669BBC]/20 hover:shadow-xl transition-all hover:scale-105'>
                  <div className='flex justify-center mb-4 text-[#C1121F]'>
                    {getIcon(subService.icon, "w-6 h-6")}
                  </div>
                  <h3 className='text-xl font-semibold text-center mb-3 text-[#780000]'>{subService.name}</h3>
                  <p className='text-center text-[#003049]/80 mb-4'>{subService.description}</p>
                  {subService.subServices && (
                    <div className='space-y-2'>
                      {subService.subServices.map((nestedService) => (
                        <div key={nestedService.id} className='text-sm bg-[#669BBC]/10 p-2 rounded'>
                          <div className='font-medium text-[#780000]'>{nestedService.name}</div>
                          <div className='text-[#003049]/70'>{nestedService.description}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Benefits & Applications */}
      <section className='w-full py-16'>
        <div className='max-w-6xl mx-auto px-4 md:px-8 lg:px-16'>
          <div className='grid lg:grid-cols-2 gap-12'>
            {/* Benefits */}
            <div>
              <h2 className='text-3xl font-bold mb-8 text-[#780000]'>Key Benefits</h2>
              <div className='space-y-4'>
                {content.benefits.map((benefit, index) => (
                  <div key={index} className='flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm border border-[#669BBC]/20'>
                    <div className='w-2 h-2 bg-[#C1121F] rounded-full flex-shrink-0 mt-2'></div>
                    <span className='text-[#003049] font-medium'>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Applications */}
            <div>
              <h2 className='text-3xl font-bold mb-8 text-[#780000]'>Applications</h2>
              <div className='space-y-4'>
                {content.applications.map((application, index) => (
                  <div key={index} className='flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm border border-[#669BBC]/20'>
                    <div className='w-2 h-2 bg-[#669BBC] rounded-full flex-shrink-0 mt-2'></div>
                    <span className='text-[#003049] font-medium'>{application}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='w-full py-16 bg-gradient-to-r from-[#780000] to-[#C1121F]'>
        <div className='max-w-4xl mx-auto px-4 md:px-8 lg:px-16 text-center'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4 text-[#FDF0D5]'>Ready to Get Started?</h2>
          <p className='text-lg mb-8 text-[#FDF0D5]/90 max-w-2xl mx-auto'>
            Contact our team to learn more about how {service.name} can accelerate your research and projects.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link
              href='/contact'
              className='bg-[#FDF0D5] text-[#780000] px-8 py-3 rounded-full font-semibold hover:bg-white transition-colors'
            >
              Request Access
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

export default ServicePage