import Image from 'next/image'
import React from 'react'
import SubjectArea from '@/components/home/SubjectArea'
import Footer from '@/components/home/Footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'


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
          <div className='w-full text-center max-w-7xl mx-auto'>            
            {/* SATYAMEBA Full Form and Description */}
            <div className='text-[#FDF0D5]'>
              <h1 className='text-2xl md:text-3xl lg:text-6xl font-semibold tracking-wide leading-snug mb-8'>
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
              
              <button  className='bg-gradient-to-r from-[#C1121F] to-[#780000] hover:from-[#780000] hover:to-[#C1121F] text-[#FDF0D5] font-light tracking-wide py-4 px-10 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-lg'>
                <Link href="/configuration/system">
                  Learn More
                </Link>
              </button>
            </div>
          </div>
        </div>
        </div>
      </section>
      
      {/* About Us Section */}
      <section className='w-full py-20 bg-gradient-to-b from-[#FDF0D5] to-white'>
        <div className='max-w-7xl mx-auto px-4 md:px-8 lg:px-16'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl lg:text-6xl font-extralight tracking-wide text-[#003049] mb-6'>
              About <span className='text-[#C1121F] font-medium'>SATYAMEBA</span>
            </h2>
            <div className='w-32 h-0.5 bg-[#669BBC] mx-auto mb-8'></div>
            <p className='text-lg md:text-xl text-[#003049]/80 font-light leading-relaxed max-w-3xl mx-auto'>
              Pioneering the future of supercomputing through innovative AI acceleration and multi-GPU architectures
            </p>
          </div>
          
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
            {/* Mission Card */}
            <div className='bg-white rounded-2xl shadow-lg p-8 border border-[#669BBC]/20 hover:shadow-xl transition-all duration-300 transform hover:scale-105'>
              <div className='w-16 h-16 bg-gradient-to-r from-[#669BBC] to-[#003049] rounded-lg flex items-center justify-center mb-6'>
                <svg className='w-8 h-8 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 10V3L4 14h7v7l9-11h-7z' />
                </svg>
              </div>
              <h3 className='text-xl font-medium text-[#003049] mb-4'>Our Mission</h3>
              <p className='text-[#003049]/70 leading-relaxed'>
                To advance supercomputing capabilities through cutting-edge AI acceleration technologies and multi-GPU engine optimization, enabling transformative computational breakthroughs.
              </p>
            </div>
            
            {/* Vision Card */}
            <div className='bg-white rounded-2xl shadow-lg p-8 border border-[#669BBC]/20 hover:shadow-xl transition-all duration-300 transform hover:scale-105'>
              <div className='w-16 h-16 bg-gradient-to-r from-[#C1121F] to-[#780000] rounded-lg flex items-center justify-center mb-6'>
                <svg className='w-8 h-8 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z' />
                </svg>
              </div>
              <h3 className='text-xl font-medium text-[#003049] mb-4'>Our Vision</h3>
              <p className='text-[#003049]/70 leading-relaxed'>
                To be the leading research hub for next-generation supercomputing architectures, fostering innovation in high-performance computing and AI-driven solutions.
              </p>
            </div>
            
            {/* Innovation Card */}
            <div className='bg-white rounded-2xl shadow-lg p-8 border border-[#669BBC]/20 hover:shadow-xl transition-all duration-300 transform hover:scale-105 md:col-span-2 lg:col-span-1'>
              <div className='w-16 h-16 bg-gradient-to-r from-[#669BBC] to-[#C1121F] rounded-lg flex items-center justify-center mb-6'>
                <svg className='w-8 h-8 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' />
                </svg>
              </div>
              <h3 className='text-xl font-medium text-[#003049] mb-4'>Innovation</h3>
              <p className='text-[#003049]/70 leading-relaxed'>
                Developing revolutionary supercomputing solutions that bridge the gap between theoretical possibilities and practical applications in AI and machine learning.
              </p>
            </div>
          </div>
          
          {/* Research Focus Areas */}
          <div className='bg-gradient-to-r from-[#003049] to-[#780000] rounded-3xl p-8 md:p-12 text-center'>
            <h3 className='text-2xl md:text-3xl font-light text-[#FDF0D5] mb-8'>Research Focus Areas</h3>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
              <div className='bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20'>
                <h4 className='text-[#669BBC] font-medium mb-2'>AI Acceleration</h4>
                <p className='text-[#FDF0D5]/80 text-sm'>Advanced GPU optimization for machine learning workloads</p>
              </div>
              <div className='bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20'>
                <h4 className='text-[#669BBC] font-medium mb-2'>Multi-GPU Systems</h4>
                <p className='text-[#FDF0D5]/80 text-sm'>Scalable parallel computing architectures</p>
              </div>
              <div className='bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20'>
                <h4 className='text-[#669BBC] font-medium mb-2'>HPC Solutions</h4>
                <p className='text-[#FDF0D5]/80 text-sm'>High-performance computing infrastructure</p>
              </div>
              <div className='bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20'>
                <h4 className='text-[#669BBC] font-medium mb-2'>Quantum Computing</h4>
                <p className='text-[#FDF0D5]/80 text-sm'>Next-generation computational paradigms</p>
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
