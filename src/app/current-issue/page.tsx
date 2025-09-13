import React from 'react'
import { Calendar, Download, Eye, FileText, Clock, Star, Users, ExternalLink } from 'lucide-react'

const CurrentIssue = () => {
  const currentIssue = {
    volume: "Volume 3",
    issue: "Issue 1",
    year: "2025",
    month: "March",
    status: "Current Issue",
    publishDate: "March 15, 2025",
    coverImage: "/iedc-logo.jpg",
    totalArticles: 15,
    theme: "Emerging Technologies and Innovation",
    description: "This special issue focuses on cutting-edge research in emerging technologies, artificial intelligence, and sustainable innovation solutions."
  }

  const featuredArticles = [
    {
      id: 1,
      title: "Revolutionary Quantum-AI Hybrid Systems for Next-Generation Computing",
      authors: "Dr. Elena Rodriguez, Prof. Michael Chang, Dr. Sophia Williams",
      pages: "1-28",
      doi: "10.1234/ijari.2025.v3i1.001",
      status: "Published",
      featured: true,
      abstract: "This groundbreaking research presents a novel approach to integrating quantum computing with artificial intelligence systems, demonstrating unprecedented computational capabilities for complex problem-solving scenarios.",
      keywords: ["Quantum Computing", "Artificial Intelligence", "Hybrid Systems", "Computational Innovation"],
      submissionDate: "December 15, 2024",
      acceptanceDate: "February 10, 2025",
      type: "Research Article"
    },
    {
      id: 2,
      title: "Sustainable Smart Cities: IoT-Based Environmental Monitoring and Management",
      authors: "Prof. David Chen, Dr. Maria Santos, Dr. Ahmed Hassan",
      pages: "29-56",
      doi: "10.1234/ijari.2025.v3i1.002",
      status: "Published",
      featured: true,
      abstract: "An innovative framework for smart city development using Internet of Things (IoT) sensors and machine learning algorithms to monitor and optimize urban environmental conditions in real-time.",
      keywords: ["Smart Cities", "IoT", "Environmental Monitoring", "Sustainability"],
      submissionDate: "January 5, 2025",
      acceptanceDate: "February 20, 2025",
      type: "Research Article"
    },
    {
      id: 3,
      title: "Advanced Blockchain Consensus Mechanisms for Decentralized Finance",
      authors: "Dr. James Wilson, Prof. Lisa Anderson, Dr. Robert Kim",
      pages: "57-84",
      doi: "10.1234/ijari.2025.v3i1.003",
      status: "Published",
      featured: false,
      abstract: "This paper introduces novel consensus mechanisms that improve security, scalability, and energy efficiency in blockchain networks specifically designed for decentralized finance applications.",
      keywords: ["Blockchain", "Consensus Mechanisms", "DeFi", "Cryptocurrency"],
      submissionDate: "November 20, 2024",
      acceptanceDate: "January 25, 2025",
      type: "Technical Paper"
    },
    {
      id: 4,
      title: "Neuromorphic Computing Architectures for Brain-Inspired AI Processing",
      authors: "Prof. Sarah Johnson, Dr. Kevin Martinez, Dr. Jennifer Davis",
      pages: "85-112",
      doi: "10.1234/ijari.2025.v3i1.004",
      status: "In Press",
      featured: false,
      abstract: "Exploring brain-inspired computing architectures that mimic neural networks to achieve more efficient and adaptive artificial intelligence processing systems.",
      keywords: ["Neuromorphic Computing", "Brain-Inspired AI", "Neural Networks", "Computer Architecture"],
      submissionDate: "December 30, 2024",
      acceptanceDate: "February 28, 2025",
      type: "Review Article"
    },
    {
      id: 5,
      title: "Green Hydrogen Production Using Advanced Photocatalytic Materials",
      authors: "Dr. Thomas Lee, Prof. Amanda White, Dr. Carlos Rodriguez",
      pages: "113-140",
      doi: "10.1234/ijari.2025.v3i1.005",
      status: "Early Access",
      featured: false,
      abstract: "Novel photocatalytic materials and processes for sustainable hydrogen production, contributing to clean energy solutions and environmental sustainability.",
      keywords: ["Green Hydrogen", "Photocatalysis", "Renewable Energy", "Sustainable Materials"],
      submissionDate: "January 15, 2025",
      acceptanceDate: "March 5, 2025",
      type: "Research Article"
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Published': return 'bg-green-100 text-green-800 border-green-200'
      case 'In Press': return 'bg-blue-100 text-blue-800 border-blue-200'
      case 'Early Access': return 'bg-purple-100 text-purple-800 border-purple-200'
      default: return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  return (
    <div className='min-h-screen bg-gradient-to-b from-slate-50 to-white'>
      {/* Header Section */}
      <section className='pt-24 md:pt-32 pb-12 bg-gradient-to-r from-green-50 to-blue-50'>
        <div className='max-w-7xl mx-auto px-4 md:px-8 lg:px-16'>
          <div className='text-center'>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-extralight tracking-wide text-gray-800 mb-6'>
              Current <span className='text-green-600 font-medium'>Issue</span>
            </h1>
            <div className='w-32 h-0.5 bg-green-500 mx-auto mb-8'></div>
            <p className='text-lg md:text-xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto'>
              Discover the latest research findings and innovative solutions in our most recent publication, 
              featuring cutting-edge studies from leading researchers worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Current Issue Overview */}
      <section className='py-16'>
        <div className='max-w-7xl mx-auto px-4 md:px-8 lg:px-16'>
          <div className='bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100'>
            <div className='grid lg:grid-cols-3 gap-8'>
              {/* Issue Cover */}
              <div className='lg:col-span-1 bg-gradient-to-br from-green-500 to-blue-600 p-8 text-white'>
                <div className='text-center mb-8'>
                  <div className='inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-sm font-medium mb-4'>
                    <Clock className='w-4 h-4' />
                    {currentIssue.status}
                  </div>
                  <h3 className='text-3xl font-light mb-2'>{currentIssue.volume}</h3>
                  <h4 className='text-2xl font-medium mb-4'>{currentIssue.issue}</h4>
                  
                  <div className='w-24 h-24 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-6'>
                    <img
                      src={currentIssue.coverImage}
                      alt='Current issue cover'
                      className='w-16 h-16 object-contain'
                    />
                  </div>
                </div>
                
                <div className='space-y-4'>
                  <div className='flex items-center gap-3 text-sm'>
                    <Calendar className='w-4 h-4' />
                    <span>{currentIssue.month} {currentIssue.year}</span>
                  </div>
                  <div className='flex items-center gap-3 text-sm'>
                    <FileText className='w-4 h-4' />
                    <span>{currentIssue.totalArticles} Articles</span>
                  </div>
                  <div className='flex items-center gap-3 text-sm'>
                    <Star className='w-4 h-4' />
                    <span>Special Issue</span>
                  </div>
                </div>

                <button className='w-full mt-8 bg-white/20 hover:bg-white/30 border border-white/30 text-white py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2'>
                  <Download className='w-4 h-4' />
                  Download Complete Issue
                </button>
              </div>

              {/* Issue Details */}
              <div className='lg:col-span-2 p-8'>
                <div className='mb-8'>
                  <h3 className='text-3xl font-light text-gray-800 mb-4'>
                    {currentIssue.theme}
                  </h3>
                  <p className='text-gray-600 leading-relaxed mb-6'>
                    {currentIssue.description}
                  </p>
                  
                  <div className='grid md:grid-cols-2 gap-6 text-sm'>
                    <div>
                      <h4 className='font-medium text-gray-800 mb-2'>Publication Details</h4>
                      <div className='space-y-1 text-gray-600'>
                        <p>Published: {currentIssue.publishDate}</p>
                        <p>ISSN: 2789-1234 (Online)</p>
                        <p>ISSN: 2789-5678 (Print)</p>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className='font-medium text-gray-800 mb-2'>Editorial Information</h4>
                      <div className='space-y-1 text-gray-600'>
                        <p>Editor-in-Chief: Dr. Rajesh Kumar</p>
                        <p>Guest Editor: Prof. Elena Rodriguez</p>
                        <p>Pages: 1-140</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='flex gap-4'>
                  <button className='bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors flex items-center gap-2'>
                    <Eye className='w-4 h-4' />
                    View Table of Contents
                  </button>
                  <button className='bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg transition-colors flex items-center gap-2'>
                    <ExternalLink className='w-4 h-4' />
                    Editorial
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className='py-16 bg-gradient-to-b from-gray-50 to-white'>
        <div className='max-w-7xl mx-auto px-4 md:px-8 lg:px-16'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-light text-gray-800 mb-4'>
              Featured Articles
            </h2>
            <p className='text-lg text-gray-600 font-light'>
              Highlighted research papers from this issue
            </p>
          </div>

          <div className='space-y-8'>
            {featuredArticles.filter(article => article.featured).map((article) => (
              <div
                key={article.id}
                className='bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100'
              >
                <div className='p-8'>
                  <div className='flex justify-between items-start mb-6'>
                    <div className='flex items-center gap-3'>
                      <Star className='w-5 h-5 text-yellow-500 fill-current' />
                      <span className='text-sm font-medium text-yellow-600'>Featured Article</span>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(article.status)}`}>
                      {article.status}
                    </div>
                  </div>

                  <h3 className='text-2xl font-medium text-gray-800 mb-4 leading-tight'>
                    {article.title}
                  </h3>

                  <div className='flex items-center gap-4 mb-4 text-sm text-gray-600'>
                    <div className='flex items-center gap-2'>
                      <Users className='w-4 h-4' />
                      <span>{article.authors}</span>
                    </div>
                    <span>•</span>
                    <span>Pages: {article.pages}</span>
                    <span>•</span>
                    <span>{article.type}</span>
                  </div>

                  <p className='text-gray-600 leading-relaxed mb-6'>
                    {article.abstract}
                  </p>

                  <div className='flex flex-wrap gap-2 mb-6'>
                    {article.keywords.map((keyword, index) => (
                      <span
                        key={index}
                        className='bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm'
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>

                  <div className='flex justify-between items-center'>
                    <div className='text-sm text-gray-500'>
                      DOI: {article.doi}
                    </div>
                    <div className='flex gap-3'>
                      <button className='bg-green-50 text-green-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-100 transition-colors'>
                        View Abstract
                      </button>
                      <button className='bg-blue-50 text-blue-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors flex items-center gap-2'>
                        <Download className='w-4 h-4' />
                        Download PDF
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className='py-16'>
        <div className='max-w-7xl mx-auto px-4 md:px-8 lg:px-16'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-light text-gray-800 mb-4'>
              All Articles in This Issue
            </h2>
            <p className='text-lg text-gray-600 font-light'>
              Complete list of research papers and articles
            </p>
          </div>

          <div className='bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100'>
            <div className='overflow-x-auto'>
              <table className='w-full'>
                <thead className='bg-gray-50 border-b border-gray-200'>
                  <tr>
                    <th className='px-6 py-4 text-left text-sm font-medium text-gray-600'>Article</th>
                    <th className='px-6 py-4 text-left text-sm font-medium text-gray-600'>Authors</th>
                    <th className='px-6 py-4 text-left text-sm font-medium text-gray-600'>Pages</th>
                    <th className='px-6 py-4 text-left text-sm font-medium text-gray-600'>Status</th>
                    <th className='px-6 py-4 text-left text-sm font-medium text-gray-600'>Actions</th>
                  </tr>
                </thead>
                <tbody className='divide-y divide-gray-200'>
                  {featuredArticles.map((article) => (
                    <tr key={article.id} className='hover:bg-gray-50 transition-colors'>
                      <td className='px-6 py-4'>
                        <div>
                          <h4 className='font-medium text-gray-800 mb-1'>{article.title}</h4>
                          <p className='text-sm text-gray-500'>{article.type}</p>
                        </div>
                      </td>
                      <td className='px-6 py-4 text-sm text-gray-600'>
                        {article.authors.split(', ')[0]} et al.
                      </td>
                      <td className='px-6 py-4 text-sm text-gray-600'>
                        {article.pages}
                      </td>
                      <td className='px-6 py-4'>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(article.status)}`}>
                          {article.status}
                        </span>
                      </td>
                      <td className='px-6 py-4'>
                        <div className='flex gap-2'>
                          <button className='p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors'>
                            <Eye className='w-4 h-4' />
                          </button>
                          <button className='p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors'>
                            <Download className='w-4 h-4' />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CurrentIssue