import Image from 'next/image'
import React from 'react'
import SubjectArea from '@/components/home/SubjectArea'
import Footer from '@/components/home/Footer'


function HomePage() {
  return (
    <div className='w-full min-h-screen bg-background text-foreground'>
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
          {/* Color palette overlay */}
          <div className='absolute inset-0 bg-gradient-to-r from-[#003049]/90 via-[#780000]/70 to-[#C1121F]/50'></div>
        </div>
        
        {/* Content Container - Added padding top to account for fixed navbar */}
        <div className='relative z-10 flex items-center min-h-screen pt-32 md:pt-40'>
        {/* Centered Content - SATYAMEBA Information */}
        <div className='w-full px-4 md:px-8 lg:px-16'>
          <div className='w-full text-center max-w-4xl mx-auto'>            
            {/* SATYAMEBA Full Form and Description */}
            <div className='text-[#FDF0D5]'>
              <h1 className='text-2xl md:text-3xl lg:text-4xl font-extralight tracking-wide leading-tight mb-8'>
                <span className='text-[#669BBC] font-medium'>S</span>upercomputing{' '}
                <span className='text-[#669BBC] font-medium'>A</span>rchitecture for{' '}
                <span className='text-[#669BBC] font-medium'>T</span>ransformative{' '}
                <span className='text-[#669BBC] font-medium'>Y</span>ield in{' '}
                <span className='text-[#669BBC] font-medium'>A</span>I and{' '}
                <span className='text-[#669BBC] font-medium'>M</span>ulti-GPU{' '}
                <span className='text-[#669BBC] font-medium'>E</span>ngine{' '}
                <span className='text-[#669BBC] font-medium'>B</span>ased{' '}
                <span className='text-[#669BBC] font-medium'>A</span>cceleration
              </h1>
              
              
              <div className='flex flex-col md:flex-row md:justify-center md:items-center gap-4 md:gap-6 mb-12 max-w-3xl mx-auto'>
                <div className='flex items-center gap-3 justify-center md:justify-start'>
                  <div className='w-1.5 h-1.5 bg-[#669BBC] rounded-full'></div>
                  <span className='text-lg md:text-xl font-light text-[#FDF0D5] tracking-wide'>High Performance Computing</span>
                </div>
                <div className='flex items-center gap-3 justify-center md:justify-start'>
                  <div className='w-1.5 h-1.5 bg-[#669BBC] rounded-full'></div>
                  <span className='text-lg md:text-xl font-light text-[#FDF0D5] tracking-wide'>AI Acceleration</span>
                </div>
                <div className='flex items-center gap-3 justify-center md:justify-start'>
                  <div className='w-1.5 h-1.5 bg-[#669BBC] rounded-full'></div>
                  <span className='text-lg md:text-xl font-light text-[#FDF0D5] tracking-wide'>Multi-GPU Processing</span>
                </div>
              </div>
              
              <button className='bg-gradient-to-r from-[#C1121F] to-[#780000] hover:from-[#780000] hover:to-[#C1121F] text-[#FDF0D5] font-light tracking-wide py-4 px-10 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-lg'>
                Learn More
              </button>
            </div>
          </div>
        </div>
        </div>
      </section>
      
      {/* Subject Area Component */}
      <SubjectArea />
     
    </div>
  )
}

export default HomePage
