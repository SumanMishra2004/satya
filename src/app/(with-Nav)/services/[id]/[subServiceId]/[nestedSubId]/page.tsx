import React from 'react'
import { notFound } from 'next/navigation'
import { Users, Network, Server, Cpu, Zap, ArrowLeft, MoreHorizontal, HardDrive, Shield } from 'lucide-react'
import Link from 'next/link'
import { satyamebaServices } from '@/data/NavData'

interface NestedSubServicePageProps {
  params: Promise<{
    id: string
    subServiceId: string
    nestedSubId: string
  }>
}

const NestedSubServicePage = async ({ params }: NestedSubServicePageProps) => {
  const { id, subServiceId, nestedSubId } = await params
  const serviceId = parseInt(id)
  const service = satyamebaServices.services.find(s => s.id === serviceId)

  if (!service || !service.subServices) {
    notFound()
  }

  const subService = service.subServices.find(s => s.id === subServiceId)

  if (!subService || !subService.subServices) {
    notFound()
  }

  const nestedSubService = subService.subServices.find(s => s.id === nestedSubId)

  if (!nestedSubService) {
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

  const getDetailedContent = (nestedSubId: string) => {
    switch (nestedSubId) {
      case 'iaas-vm':
        return {
          title: "Virtual Machines",
          description: "Scalable virtual machine instances for all your computing needs",
          overview: "Our virtual machine service provides flexible, scalable compute instances that can be configured to meet your specific requirements. From lightweight development environments to powerful compute-intensive workloads.",
          specifications: [
            { label: "CPU Options", value: "1-64 vCPUs" },
            { label: "Memory", value: "1GB - 256GB RAM" },
            { label: "Storage", value: "SSD, NVMe options" },
            { label: "Operating Systems", value: "Linux, Windows" },
            { label: "Network", value: "Up to 100 Gbps" },
            { label: "Uptime SLA", value: "99.9%" }
          ],
          features: [
            "On-demand scaling and resizing",
            "Multiple OS templates available",
            "Snapshot and backup capabilities",
            "Load balancing integration",
            "Network security groups",
            "24/7 monitoring and support"
          ],
          useCases: [
            "Development and Testing Environments",
            "Web Application Hosting",
            "Database Servers",
            "CI/CD Pipeline Workers",
            "Machine Learning Training",
            "High-Performance Computing"
          ]
        }
      case 'iaas-storage':
        return {
          title: "Storage Services",
          description: "Reliable cloud storage and backup solutions with enterprise-grade security",
          overview: "Our comprehensive storage service offers multiple storage tiers, automatic backup, and data redundancy to ensure your data is always safe and accessible when you need it.",
          specifications: [
            { label: "Storage Types", value: "Block, Object, File" },
            { label: "Capacity", value: "1GB - 100TB+" },
            { label: "Performance", value: "Up to 1M IOPS" },
            { label: "Durability", value: "99.999999999%" },
            { label: "Availability", value: "99.99%" },
            { label: "Encryption", value: "AES-256" }
          ],
          features: [
            "Automated backup and versioning",
            "Cross-region replication",
            "Encryption at rest and in transit",
            "Lifecycle management policies",
            "API access and integration",
            "Real-time monitoring and alerts"
          ],
          useCases: [
            "Database Storage",
            "Application Data Storage",
            "Backup and Archive",
            "Content Distribution",
            "Data Lake Storage",
            "Disaster Recovery"
          ]
        }
      case 'iaas-network':
        return {
          title: "Network Services",
          description: "Virtual networking and advanced load balancing for optimal performance",
          overview: "Our network services provide secure, high-performance networking solutions including virtual private clouds, load balancers, and network security to ensure optimal connectivity and performance.",
          specifications: [
            { label: "Bandwidth", value: "Up to 100 Gbps" },
            { label: "Latency", value: "< 1ms within region" },
            { label: "Load Balancers", value: "Layer 4 & 7" },
            { label: "VPN Support", value: "Site-to-Site, Point-to-Site" },
            { label: "Network ACLs", value: "Customizable rules" },
            { label: "DDoS Protection", value: "Built-in mitigation" }
          ],
          features: [
            "Virtual Private Cloud (VPC)",
            "Application Load Balancers",
            "Network Load Balancers",
            "VPN Gateway Services",
            "Network Access Control Lists",
            "Traffic monitoring and analytics"
          ],
          useCases: [
            "Multi-tier Application Architecture",
            "Microservices Communication",
            "Hybrid Cloud Connectivity",
            "Content Delivery Networks",
            "Secure Remote Access",
            "High-Availability Systems"
          ]
        }
      case 'iaas-security':
        return {
          title: "Security Services",
          description: "Comprehensive infrastructure security and monitoring solutions",
          overview: "Our security services provide multi-layered protection for your infrastructure including threat detection, vulnerability management, and compliance monitoring to keep your systems secure.",
          specifications: [
            { label: "Threat Detection", value: "Real-time monitoring" },
            { label: "Compliance", value: "SOC2, ISO 27001" },
            { label: "Encryption", value: "AES-256, TLS 1.3" },
            { label: "Authentication", value: "Multi-factor (MFA)" },
            { label: "Audit Logs", value: "Complete activity tracking" },
            { label: "Response Time", value: "< 5 minutes" }
          ],
          features: [
            "Intrusion Detection System (IDS)",
            "Vulnerability Assessment",
            "Security Information and Event Management (SIEM)",
            "Identity and Access Management (IAM)",
            "Network Security Groups",
            "Automated threat response"
          ],
          useCases: [
            "Regulatory Compliance",
            "Threat Monitoring",
            "Incident Response",
            "Security Auditing",
            "Access Control",
            "Data Protection"
          ]
        }
      case 'paas-option-1':
        return {
          title: "PaaS Development Platform",
          description: "Complete development platform with integrated tools and frameworks",
          overview: "Our primary PaaS offering provides a comprehensive development environment with pre-configured tools, frameworks, and deployment pipelines to accelerate your application development process.",
          specifications: [
            { label: "Languages", value: "Python, Java, Node.js, .NET" },
            { label: "Frameworks", value: "Django, Spring, Express, React" },
            { label: "Databases", value: "PostgreSQL, MySQL, MongoDB" },
            { label: "CI/CD", value: "GitLab, Jenkins integration" },
            { label: "Scaling", value: "Auto-scaling available" },
            { label: "Monitoring", value: "APM and logging included" }
          ],
          features: [
            "Pre-configured development environments",
            "Integrated development tools",
            "Automated deployment pipelines",
            "Database management services",
            "API gateway and management",
            "Application performance monitoring"
          ],
          useCases: [
            "Web Application Development",
            "API Development",
            "Microservices Architecture",
            "Rapid Prototyping",
            "DevOps Automation",
            "Team Collaboration"
          ]
        }
      case 'paas-option-2':
        return {
          title: "PaaS Analytics Platform",
          description: "Specialized platform for data analytics and machine learning workloads",
          overview: "Our analytics-focused PaaS solution provides specialized tools and frameworks for data processing, machine learning, and business intelligence applications.",
          specifications: [
            { label: "ML Frameworks", value: "TensorFlow, PyTorch, Scikit-learn" },
            { label: "Data Processing", value: "Spark, Hadoop, Kafka" },
            { label: "Notebooks", value: "Jupyter, RStudio" },
            { label: "GPU Support", value: "NVIDIA A100, H100" },
            { label: "Storage", value: "Data lakes, warehouses" },
            { label: "Visualization", value: "Grafana, Tableau integration" }
          ],
          features: [
            "Machine learning model training",
            "Big data processing pipelines",
            "Interactive data notebooks",
            "GPU-accelerated computing",
            "Data visualization tools",
            "Model deployment and serving"
          ],
          useCases: [
            "Machine Learning Development",
            "Big Data Analytics",
            "Business Intelligence",
            "Predictive Modeling",
            "Data Science Research",
            "Real-time Analytics"
          ]
        }
      default:
        return {
          title: nestedSubService.name,
          description: nestedSubService.description,
          overview: "",
          specifications: [],
          features: [],
          useCases: []
        }
    }
  }

  const content = getDetailedContent(nestedSubService.id)

  return (
    <div className='w-full min-h-screen bg-gradient-to-br from-[#FDF0D5] to-white'>
      {/* Navigation */}
      <div className='md:pt-44 pt-20 pb-8 px-4 md:px-8 lg:px-16'>
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
            <Link href={`/services/${serviceId}/${subService.id}`} className='hover:text-[#C1121F] transition-colors'>
              {subService.name}
            </Link>
            <span>/</span>
            <span className='text-[#C1121F] font-medium'>{nestedSubService.name}</span>
          </div>
          <Link href={`/services/${serviceId}/${subService.id}`} className='flex items-center gap-2 text-[#780000] hover:text-[#C1121F] transition-colors mb-6'>
            <ArrowLeft className='w-5 h-5' />
            <span>Back to {subService.name}</span>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className='w-full pb-16 px-4 md:px-8 lg:px-16'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-12'>
            <div className='flex justify-center mb-6 text-[#C1121F]'>
              <div className="w-16 h-16 flex items-center justify-center">
                {nestedSubService.icon}
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

      {/* Specifications */}
      {content.specifications.length > 0 && (
        <section className='w-full py-16 bg-gradient-to-r from-[#003049]/5 to-[#669BBC]/5'>
          <div className='max-w-6xl mx-auto px-4 md:px-8 lg:px-16'>
            <h2 className='text-3xl font-bold text-center mb-12 text-[#780000]'>Technical Specifications</h2>
            <div className='bg-white rounded-xl p-8 shadow-lg border border-[#669BBC]/20 max-w-4xl mx-auto'>
              <div className='grid md:grid-cols-2 gap-6'>
                {content.specifications.map((spec, index) => (
                  <div key={index} className='flex justify-between items-center py-3 border-b border-[#669BBC]/20 last:border-b-0'>
                    <span className='text-[#003049] font-medium'>{spec.label}</span>
                    <span className='text-[#780000] font-semibold'>{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Features & Use Cases */}
      <section className='w-full py-16'>
        <div className='max-w-6xl mx-auto px-4 md:px-8 lg:px-16'>
          <div className='grid lg:grid-cols-2 gap-12'>
            {/* Features */}
            <div>
              <h2 className='text-3xl font-bold mb-8 text-[#780000]'>Key Features</h2>
              <div className='space-y-4'>
                {content.features.map((feature, index) => (
                  <div key={index} className='flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm border border-[#669BBC]/20'>
                    <div className='w-2 h-2 bg-[#C1121F] rounded-full flex-shrink-0 mt-2'></div>
                    <span className='text-[#003049] font-medium'>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Use Cases */}
            <div>
              <h2 className='text-3xl font-bold mb-8 text-[#780000]'>Use Cases</h2>
              <div className='space-y-4'>
                {content.useCases.map((useCase, index) => (
                  <div key={index} className='flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm border border-[#669BBC]/20'>
                    <div className='w-2 h-2 bg-[#669BBC] rounded-full flex-shrink-0 mt-2'></div>
                    <span className='text-[#003049] font-medium'>{useCase}</span>
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
          <h2 className='text-3xl md:text-4xl font-bold mb-4 text-[#FDF0D5]'>Start Using {nestedSubService.name}</h2>
          <p className='text-lg mb-8 text-[#FDF0D5]/90 max-w-2xl mx-auto'>
            Ready to leverage {nestedSubService.name} for your projects? Contact our team to get started.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link
              href='/contact'
              className='bg-[#FDF0D5] text-[#780000] px-8 py-3 rounded-full font-semibold hover:bg-white transition-colors'
            >
              Get Started
            </Link>
            <Link
              href={`/services/${serviceId}/${subService.id}`}
              className='bg-transparent border-2 border-[#FDF0D5] text-[#FDF0D5] px-8 py-3 rounded-full font-semibold hover:bg-[#FDF0D5] hover:text-[#780000] transition-colors'
            >
              Back to {subService.name}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default NestedSubServicePage