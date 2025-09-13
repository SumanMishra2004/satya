import React from 'react'
import { Calendar, Download, Eye, FileText, Users } from 'lucide-react'

const Archive = () => {
  const archiveIssues = [
    {
      id: 1,
      volume: "Volume 2",
      issue: "Issue 4",
      year: "2024",
      month: "December",
      coverImage: "/iedc-logo.jpg",
      totalArticles: 12,
      downloadCount: "2.1K",
      articles: [
        {
          title: "Machine Learning Applications in Cybersecurity: A Comprehensive Review",
          authors: "Dr. Sarah Johnson, Prof. Michael Chen, Dr. Rajesh Kumar",
          pages: "1-24",
          doi: "10.1234/ijari.2024.v2i4.001",
          abstract: "This comprehensive review examines the current state and future prospects of machine learning applications in cybersecurity..."
        },
        {
          title: "Blockchain Technology for Secure IoT Communication Networks",
          authors: "Prof. David Williams, Dr. Priya Sharma",
          pages: "25-48",
          doi: "10.1234/ijari.2024.v2i4.002",
          abstract: "Internet of Things (IoT) networks face significant security challenges due to their distributed nature and resource constraints..."
        },
        {
          title: "Sustainable Energy Management Systems Using AI and Deep Learning",
          authors: "Dr. Lisa Anderson, Prof. Robert Brown, Dr. Maria Garcia",
          pages: "49-72",
          doi: "10.1234/ijari.2024.v2i4.003",
          abstract: "As global energy demands continue to rise, the integration of artificial intelligence and deep learning technologies..."
        }
      ]
    },
    {
      id: 2,
      volume: "Volume 2",
      issue: "Issue 3",
      year: "2024",
      month: "September",
      coverImage: "/iem-logo.png",
      totalArticles: 10,
      downloadCount: "1.8K",
      articles: [
        {
          title: "Quantum Computing Algorithms for Optimization Problems",
          authors: "Prof. James Wilson, Dr. Elena Rodriguez",
          pages: "1-28",
          doi: "10.1234/ijari.2024.v2i3.001",
          abstract: "Quantum computing represents a paradigm shift in computational capabilities, particularly for complex optimization problems..."
        },
        {
          title: "Advanced Materials Science: Nanomaterials for Environmental Applications",
          authors: "Dr. Thomas Lee, Prof. Jennifer Davis",
          pages: "29-56",
          doi: "10.1234/ijari.2024.v2i3.002",
          abstract: "The development of advanced nanomaterials has opened new possibilities for addressing environmental challenges..."
        }
      ]
    },
    {
      id: 3,
      volume: "Volume 2",
      issue: "Issue 2",
      year: "2024",
      month: "June",
      coverImage: "/uem.png",
      totalArticles: 8,
      downloadCount: "1.5K",
      articles: [
        {
          title: "Artificial Intelligence in Healthcare: Current Trends and Future Directions",
          authors: "Dr. Amanda White, Prof. Kevin Martinez",
          pages: "1-32",
          doi: "10.1234/ijari.2024.v2i2.001",
          abstract: "The integration of artificial intelligence in healthcare has shown remarkable progress in recent years..."
        }
      ]
    }
  ]

  return (
    <div className='min-h-screen bg-gradient-to-b from-slate-50 to-white'>
      {/* Header Section */}
      <section className='pt-24 md:pt-32 pb-12 bg-gradient-to-r from-purple-50 to-blue-50'>
        <div className='max-w-7xl mx-auto px-4 md:px-8 lg:px-16'>
          <div className='text-center'>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-extralight tracking-wide text-gray-800 mb-6'>
              Journal <span className='text-purple-600 font-medium'>Archive</span>
            </h1>
            <div className='w-32 h-0.5 bg-purple-500 mx-auto mb-8'></div>
            <p className='text-lg md:text-xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto'>
              Explore our collection of past issues featuring cutting-edge research and innovative solutions 
              across multiple disciplines of advanced research and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Archive Issues */}
      <section className='py-16 md:py-24'>
        <div className='max-w-7xl mx-auto px-4 md:px-8 lg:px-16'>
          <div className='space-y-12'>
            {archiveIssues.map((issue) => (
              <div
                key={issue.id}
                className='bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100'
              >
                <div className='grid lg:grid-cols-4 gap-8 p-8'>
                  {/* Issue Cover */}
                  <div className='lg:col-span-1'>
                    <div className='bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl p-6 text-white h-80 flex flex-col justify-between'>
                      <div>
                        <h3 className='text-2xl font-light mb-2'>{issue.volume}</h3>
                        <h4 className='text-xl font-medium mb-4'>{issue.issue}</h4>
                        <div className='w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mb-4'>
                          <img
                            src={issue.coverImage}
                            alt='Issue cover'
                            className='w-12 h-12 object-contain'
                          />
                        </div>
                      </div>
                      
                      <div className='space-y-3'>
                        <div className='flex items-center gap-2 text-sm'>
                          <Calendar className='w-4 h-4' />
                          <span>{issue.month} {issue.year}</span>
                        </div>
                        <div className='flex items-center gap-2 text-sm'>
                          <FileText className='w-4 h-4' />
                          <span>{issue.totalArticles} Articles</span>
                        </div>
                        <div className='flex items-center gap-2 text-sm'>
                          <Download className='w-4 h-4' />
                          <span>{issue.downloadCount} Downloads</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Articles List */}
                  <div className='lg:col-span-3'>
                    <div className='mb-6'>
                      <h3 className='text-2xl font-light text-gray-800 mb-2'>
                        {issue.volume}, {issue.issue} - {issue.month} {issue.year}
                      </h3>
                      <p className='text-gray-600'>Featured research articles and papers</p>
                    </div>

                    <div className='space-y-6'>
                      {issue.articles.map((article, index) => (
                        <div
                          key={index}
                          className='border border-gray-200 rounded-lg p-6 hover:border-purple-300 hover:shadow-md transition-all duration-300'
                        >
                          <div className='flex justify-between items-start mb-4'>
                            <h4 className='text-lg font-medium text-gray-800 leading-tight pr-4'>
                              {article.title}
                            </h4>
                            <div className='flex gap-2 flex-shrink-0'>
                              <button className='p-2 text-purple-600 hover:bg-purple-50 rounded-lg transition-colors'>
                                <Eye className='w-4 h-4' />
                              </button>
                              <button className='p-2 text-purple-600 hover:bg-purple-50 rounded-lg transition-colors'>
                                <Download className='w-4 h-4' />
                              </button>
                            </div>
                          </div>

                          <div className='space-y-3'>
                            <div className='flex items-center gap-2 text-sm text-gray-600'>
                              <Users className='w-4 h-4' />
                              <span>{article.authors}</span>
                            </div>
                            
                            <div className='flex gap-6 text-sm text-gray-500'>
                              <span>Pages: {article.pages}</span>
                              <span>DOI: {article.doi}</span>
                            </div>
                            
                            <p className='text-gray-600 text-sm leading-relaxed'>
                              {article.abstract}
                            </p>
                          </div>

                          <div className='flex gap-3 mt-4'>
                            <button className='bg-purple-50 text-purple-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-100 transition-colors'>
                              View Abstract
                            </button>
                            <button className='bg-gray-50 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors'>
                              Download PDF
                            </button>
                          </div>
                        </div>
                      ))}

                      {issue.totalArticles > issue.articles.length && (
                        <div className='text-center py-4'>
                          <button className='text-purple-600 hover:text-purple-700 font-medium'>
                            View All {issue.totalArticles} Articles →
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className='py-16 bg-gradient-to-r from-purple-50 to-blue-50'>
        <div className='max-w-4xl mx-auto px-4 md:px-8 lg:px-16'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-light text-gray-800 mb-4'>
              Archive Statistics
            </h2>
            <p className='text-lg text-gray-600 font-light'>
              Our growing collection of research publications
            </p>
          </div>
          
          <div className='grid md:grid-cols-4 gap-8'>
            <div className='text-center'>
              <div className='text-3xl font-light text-purple-600 mb-2'>30+</div>
              <div className='text-gray-600'>Total Articles</div>
            </div>
            <div className='text-center'>
              <div className='text-3xl font-light text-purple-600 mb-2'>6</div>
              <div className='text-gray-600'>Issues Published</div>
            </div>
            <div className='text-center'>
              <div className='text-3xl font-light text-purple-600 mb-2'>5.4K</div>
              <div className='text-gray-600'>Total Downloads</div>
            </div>
            <div className='text-center'>
              <div className='text-3xl font-light text-purple-600 mb-2'>45+</div>
              <div className='text-gray-600'>Contributing Authors</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Archive