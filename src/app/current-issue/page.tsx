import React from 'react'
import { Calendar, Download, Eye, FileText, Clock, Star, Users, ExternalLink, BookUser } from 'lucide-react'
import Link from 'next/link'

const CurrentIssue = () => {
  const currentIssue = {
    volume: "Volume 3",
    issue: "Issue 1",
    year: "2025",
    month: "October",
    status: "Current Issue",
    publishDate: "XXXXXXXXXXXXXXX",
    coverImage: "/iedc-logo.jpg",
    totalArticles: "X",
    theme: "Satya Vision Chronicles",
    description: "This special issue focuses on cutting-edge research in emerging technologies, artificial intelligence, and sustainable innovation solutions."
  }

  
  


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
      <section className='pt-24 md:pt-40 pb-12 bg-gradient-to-r from-green-50 to-blue-50'>
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
                    <span>Frequency of Publication: Bi-Annual</span>
                  </div>
                  <div className='flex items-center gap-3 text-sm'>
                    <Star className='w-4 h-4' />
                    <span>Special Issue</span>
                  </div>
                  <div className='flex items-center gap-3 text-sm'>
                    <BookUser className='w-4 h-4' />
                    <span>Language :English</span>
                  </div>
                </div>

                <a href={"/IEDC.pdf"} download className='w-full mt-8 bg-white/20 hover:bg-white/30 border border-white/30 text-white py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2'>
                  <Download className='w-4 h-4' />
                  Download Complete Issue
                </a>
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
                        <p> Mode: Online</p>
                        <p>Subject of Publication: Reseant Trends in Engineering and Technology</p>
                        
                        <p>Published: {currentIssue.publishDate}</p>
                        <p>ISSN: XXXX-XXXX (Online)</p>
                        <p>ISSN: XXXX-XXXX (Print)</p>
                      </div>
                    </div>
                    
                    <div>
                      <Link href={"/editorial-board"} className='font-medium text-blue-800 mb-2 text-xl'>Editorial Information</Link>
                      
                    </div>
                  </div>
                </div>

                <div className='flex gap-4'>
                  <a href='/IEDC.pdf' download className='bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors flex items-center gap-2'>
                    <Eye className='w-4 h-4' />
                    View Table of Contents
                  </a>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     
    </div>
  )
}

export default CurrentIssue