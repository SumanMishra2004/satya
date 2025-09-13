import Image from 'next/image'
import React from 'react'
import SubjectArea from '@/components/home/SubjectArea'


function HomePage() {
  return (
    <div className='w-full min-h-screen'>
      {/* Hero Section with Background */}
      <section className='w-full min-h-screen relative overflow-hidden'>
        {/* Background Image */}
        <div className='absolute inset-0 z-0'>
          <Image 
            src="/bg.jpg" 
            fill
            className='object-cover' 
            alt='background image'
            priority
          />
          {/* Overlay for better text readability */}
          <div className='absolute inset-0 bg-gradient-to-r from-white/80 via-white/60 to-transparent'></div>
        </div>
        
        {/* Content Container - Added padding top to account for fixed navbar */}
        <div className='relative z-10 flex items-center min-h-screen pt-32 md:pt-40'>
        {/* Left Side Content - IEDC Information */}
        <div className='flex-1 px-4 md:px-8 lg:px-16'>
          <div className='max-w-2xl'>            
            {/* IEDC Full Form and Description */}
            <div className='text-gray-800'>
              <h1 className='text-4xl md:text-5xl lg:text-7xl font-extralight tracking-wide leading-tight mb-8'>
                <span className='text-blue-600 font-medium'>I</span>nnovation and{' '}
                <span className='text-blue-600 font-medium'>E</span>ntrepreneurship{' '}
                <span className='text-blue-600 font-medium'>D</span>evelopment{' '}
                <span className='text-blue-600 font-medium'>C</span>ell
              </h1>
              
              
              <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-4 md:gap-6 mb-12'>
                <div className='flex items-center gap-3'>
                  <div className='w-1.5 h-1.5 bg-blue-500 rounded-full'></div>
                  <span className='text-lg md:text-xl font-light text-gray-700 tracking-wide'>Innovation Hub</span>
                </div>
                <div className='flex items-center gap-3'>
                  <div className='w-1.5 h-1.5 bg-blue-500 rounded-full'></div>
                  <span className='text-lg md:text-xl font-light text-gray-700 tracking-wide'>Startup Incubator</span>
                </div>
                <div className='flex items-center gap-3'>
                  <div className='w-1.5 h-1.5 bg-blue-500 rounded-full'></div>
                  <span className='text-lg md:text-xl font-light text-gray-700 tracking-wide'>Entrepreneurship Development</span>
                </div>
              </div>
              
              <button className='bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-light tracking-wide py-4 px-10 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-lg'>
                Learn More
              </button>
            </div>
          </div>
        </div>
        
        {/* Right side can be used for additional content or left empty for the background image to show */}
        <div className='flex-1 hidden lg:block'>
          {/* This space allows the background image to be visible on the right side */}
        </div>
        </div>
      </section>
      
      {/* Subject Area Component */}
      <SubjectArea />
      
      {/* Footer Component */}
      
    </div>
  )
}

export default HomePage
