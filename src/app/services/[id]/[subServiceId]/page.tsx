import React from 'react'
import { notFound } from 'next/navigation'
import { Users, Network, Server, Cpu, Zap, ArrowLeft, MoreHorizontal, HardDrive, Shield } from 'lucide-react'
import Link from 'next/link'
import { satyamebaServices } from '@/data/NavData'

interface SubServicePageProps {
  params: Promise<{
    id: string
    subServiceId: string
  }>
}

const SubServicePage = async ({ params }: SubServicePageProps) => {
  const { id, subServiceId } = await params
  const serviceId = parseInt(id)
  const service = satyamebaServices.services.find(s => s.id === serviceId)

  if (!service || !service.subServices) {
    notFound()
  }

  const subService = service.subServices.find(s => s.id === subServiceId)

  if (!subService) {
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
      case 'hard-drive':
        return <HardDrive className={size} />
      case 'shield':
        return <Shield className={size} />
      case 'zap':
        return <Zap className={size} />
      default:
        return <Server className={size} />
    }
  }

  const getDetailedContent = (subServiceId: string) => {
    switch (subServiceId) {
      case 'iaas':
        return {
          title: "Infrastructure as a Service (IaaS)",
          description: "Comprehensive cloud infrastructure solutions for your computing needs",
          overview: "Our IaaS platform provides scalable, on-demand infrastructure resources including virtual machines, storage, networking, and security services. Built on enterprise-grade hardware with 99.9% uptime guarantee.",
          benefits: [
            "Scalable virtual machine instances with flexible configurations",
            "High-performance storage solutions with automatic backup",
            "Enterprise-grade network infrastructure and load balancing",
            "Advanced security monitoring and threat protection",
            "24/7 technical support and monitoring",
            "Pay-as-you-use pricing model with transparent billing"
          ],
          features: [
            "Virtual Machine Management",
            "Storage and Backup Services", 
            "Network Configuration",
            "Security and Monitoring",
            "Load Balancing",
            "Auto-scaling Capabilities"
          ]
        }
      case 'paas':
        return {
          title: "Platform as a Service (PaaS)",
          description: "Complete development and deployment platform for modern applications",
          overview: "Our PaaS offering provides a complete development and deployment environment in the cloud, allowing you to focus on building great applications without worrying about underlying infrastructure.",
          benefits: [
            "Pre-configured development environments",
            "Automated deployment and scaling",
            "Integrated development tools and frameworks",
            "Database management and optimization",
            "API management and monitoring",
            "Continuous integration and deployment"
          ],
          features: [
            "Application Development Framework",
            "Database Services",
            "API Gateway",
            "Container Orchestration",
            "DevOps Integration",
            "Monitoring and Analytics"
          ]
        }
      case 'saas':
        return {
          title: "Software as a Service (SaaS)",
          description: "Ready-to-use software applications accessible via the cloud",
          overview: "Coming soon - We're developing a comprehensive suite of SaaS applications tailored for supercomputing and AI workloads. Stay tuned for updates on our software offerings.",
          benefits: [
            "No installation or maintenance required",
            "Automatic updates and security patches",
            "Scalable user access and permissions",
            "Integration with existing workflows",
            "Multi-tenant architecture",
            "Subscription-based pricing"
          ],
          features: [
            "Web-based Applications",
            "User Management",
            "Data Analytics Tools",
            "Collaboration Features",
            "Mobile Access",
            "Third-party Integrations"
          ]
        }
      default:
        return {
          title: subService.name,
          description: subService.description,
          overview: "",
          benefits: [],
          features: []
        }
    }
  }

  const content = getDetailedContent(subService.id)

  return (
    <div className='w-full min-h-screen bg-gradient-to-br from-[#FDF0D5] to-white'>
      {/* Navigation */}
      <div className='md:pt-32 pt-20pb-8 px-4 md:px-8 lg:px-16'>
        <div className='max-w-6xl mx-auto'>
          <div className='flex items-center gap-4 text-sm text-[#780000] mb-6'>
            <Link href="/" className='hover:text-[#C1121F] transition-colors'>
              Home
            </Link>
            <span>/</span>
            <Link href={`/services/${serviceId}`} className='hover:text-[#C1121F] transition-colors'>
              {service.name}
            </Link>
            <span>/</span>
            <span className='text-[#C1121F] font-medium'>{subService.name}</span>
          </div>
          <Link href={`/services/${serviceId}`} className='flex items-center gap-2 text-[#780000] hover:text-[#C1121F] transition-colors mb-6'>
            <ArrowLeft className='w-5 h-5' />
            <span>Back to {service.name}</span>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className='w-full pb-16 px-4 md:px-8 lg:px-16'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-12'>
            <div className='flex justify-center mb-6 text-[#C1121F]'>
              <div className="w-16 h-16 flex items-center justify-center">
                {subService.icon}
              </div>
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

      {/* Sub-services if available */}
      {subService.subServices && (
        <section className='w-full py-16 bg-gradient-to-r from-[#003049]/5 to-[#669BBC]/5'>
          <div className='max-w-6xl mx-auto px-4 md:px-8 lg:px-16'>
            <h2 className='text-3xl font-bold text-center mb-12 text-[#780000]'>Available Services</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
              {subService.subServices.map((nestedService) => (
                <Link
                  key={nestedService.id}
                  href={`/services/${serviceId}/${subService.id}/${nestedService.id}`}
                  className='bg-white rounded-xl p-6 shadow-lg border border-[#669BBC]/20 hover:shadow-xl transition-all hover:scale-105 group'
                >
                  <div className='flex justify-center mb-4 text-[#C1121F] group-hover:text-[#780000] transition-colors'>
                    <div className="w-6 h-6 flex items-center justify-center">
                      {nestedService.icon}
                    </div>
                  </div>
                  <h3 className='text-lg font-semibold text-center mb-3 text-[#780000] group-hover:text-[#C1121F] transition-colors'>
                    {nestedService.name}
                  </h3>
                  <p className='text-center text-[#003049]/80 text-sm'>
                    {nestedService.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Benefits & Features */}
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

            {/* Features */}
            <div>
              <h2 className='text-3xl font-bold mb-8 text-[#780000]'>Features</h2>
              <div className='space-y-4'>
                {content.features.map((feature, index) => (
                  <div key={index} className='flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm border border-[#669BBC]/20'>
                    <div className='w-2 h-2 bg-[#669BBC] rounded-full flex-shrink-0 mt-2'></div>
                    <span className='text-[#003049] font-medium'>{feature}</span>
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
            Contact our team to learn more about {subService.name} and how it can benefit your projects.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link
              href='/contact'
              className='bg-[#FDF0D5] text-[#780000] px-8 py-3 rounded-full font-semibold hover:bg-white transition-colors'
            >
              Contact Sales
            </Link>
            <Link
              href={`/services/${serviceId}`}
              className='bg-transparent border-2 border-[#FDF0D5] text-[#FDF0D5] px-8 py-3 rounded-full font-semibold hover:bg-[#FDF0D5] hover:text-[#780000] transition-colors'
            >
              Back to {service.name}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SubServicePage