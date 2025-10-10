import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='bg-gradient-to-br from-[#003049] via-[#780000] to-[#C1121F] text-white py-12 md:py-16'>
      <div className='max-w-7xl mx-auto px-4 md:px-8 lg:px-16'>
        <div className='grid md:grid-cols-2 gap-8 md:gap-16 items-start'>
          
          {/* Left Side - Logo and SATYAMEBA Info */}
          <div className='flex flex-col items-center md:items-start space-y-6'>
            
            {/* SATYAMEBA Logo - Rounded Square */}
            <div className='w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden bg-gradient-to-br from-[#C1121F] to-[#780000] p-1 shadow-xl'>
              <div className='w-full h-full rounded-xl overflow-hidden bg-white'>
                <Image 
                  src="/iedc-logo.jpg" 
                  width={96} 
                  height={96} 
                  alt='SATYAMEBA Logo'
                  className='w-full h-full object-cover'
                />
              </div>
            </div>
            
            {/* SATYAMEBA Text - Responsive */}
            <div className='text-center md:text-left'>
              {/* Mobile Version - Only SATYAMEBA */}
              <div className='block md:hidden'>
                <h3 className='text-2xl font-light tracking-wide text-[#FDF0D5]'>
                  SATYAMEBA
                </h3>
                <p className='text-[#669BBC] text-sm mt-1 font-light'>
                  Supercomputing • AI • Multi-GPU
                </p>
              </div>
              
              {/* Desktop Version - Full Form */}
              <div className='hidden md:block'>
                <h3 className='text-xl lg:text-2xl font-light tracking-wide text-[#FDF0D5] mb-2'>
                  <span className='text-[#669BBC]'>S</span>upercomputing{' '}
                  <span className='text-[#669BBC]'>A</span>rchitecture for{' '}
                  <span className='text-[#669BBC]'>T</span>ransformative{' '}
                  <span className='text-[#669BBC]'>Y</span>ield in{' '}
                  <span className='text-[#669BBC]'>A</span>I and{' '}
                  <span className='text-[#669BBC]'>M</span>ulti-GPU{' '}
                  <span className='text-[#669BBC]'>E</span>ngine{' '}
                  <span className='text-[#669BBC]'>B</span>ased{' '}
                  <span className='text-[#669BBC]'>A</span>cceleration
                </h3>
                <div className='text-[#669BBC] text-sm font-light leading-relaxed'>
                  <p>Advancing high-performance computing and AI</p>
                  <p>through cutting-edge supercomputing technologies</p>
                </div>
              </div>
            </div>
            
            {/* Contact Info */}
            <div className='text-center md:text-left text-slate-400 text-sm'>
              <p className='font-light'>University of Engineering & Management</p>
              <p className='font-light'>Department of CSE(IoT, CS, BT)</p>
            </div>
            
          </div>
          
          {/* Right Side - Navigation Links */}
          <div className='flex flex-col space-y-4'>
            
            {/* Quick Links Header */}
            <h4 className='text-lg md:text-xl font-light text-slate-100 mb-2 text-center md:text-left'>
              Quick Links
            </h4>
            
            {/* Navigation Buttons Stack */}
            <div className='flex flex-col space-y-3'>
              
              {/* Services Link */}
              <div className='bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-blue-400/30 rounded-xl px-6 py-4 text-left transition-all duration-300 group hover:shadow-lg'>
                <div className='flex items-center justify-between'>
                  <div>
                    <h5 className='font-medium text-slate-100 group-hover:text-blue-300'>SATYAMEBA Services</h5>
                    <p className='text-slate-400 text-sm font-light'>Explore our supercomputing and AI services</p>
                  </div>
                  <div className='text-slate-500 group-hover:text-blue-400 transition-colors'>
                    <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M9 5l7 7-7 7' />
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Configuration Link */}
              <Link href={"/configuration/architecture"} className='bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-blue-400/30 rounded-xl px-6 py-4 text-left transition-all duration-300 group hover:shadow-lg'>
                <div className='flex items-center justify-between'>
                  <div>
                    <h5 className='font-medium text-slate-100 group-hover:text-blue-300'>Configuration</h5>
                    <p className='text-slate-400 text-sm font-light'>System configuration and management services</p>
                  </div>
                  <div className='text-slate-500 group-hover:text-blue-400 transition-colors'>
                    <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M9 5l7 7-7 7' />
                    </svg>
                  </div>
                </div>
              </Link>
              
              {/* About Us Link */}
              <Link href={"/about"} className='bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-blue-400/30 rounded-xl px-6 py-4 text-left transition-all duration-300 group hover:shadow-lg'>
                <div className='flex items-center justify-between'>
                  <div>
                    <h5 className='font-medium text-slate-100 group-hover:text-blue-300'>About Us</h5>
                    <p className='text-slate-400 text-sm font-light'>Learn about SATYAMEBA and our mission</p>
                  </div>
                  <div className='text-slate-500 group-hover:text-blue-400 transition-colors'>
                    <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M9 5l7 7-7 7' />
                    </svg>
                  </div>
                </div>
              </Link>
              
              {/* Contact Us Link */}
              <Link href={"/contact"} className='bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-blue-400/30 rounded-xl px-6 py-4 text-left transition-all duration-300 group hover:shadow-lg'>
                <div className='flex items-center justify-between'>
                  <div>
                    <h5 className='font-medium text-slate-100 group-hover:text-blue-300'>Contact Us</h5>
                    <p className='text-slate-400 text-sm font-light'>Get in touch with our team</p>
                  </div>
                  <div className='text-slate-500 group-hover:text-blue-400 transition-colors'>
                    <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M9 5l7 7-7 7' />
                    </svg>
                  </div>
                </div>
              </Link>
              
            </div>
          </div>
          
        </div>
        
        {/* Footer Bottom - Copyright */}
        <div className='mt-12 pt-8 border-t border-white/10'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            <p className='text-slate-400 text-sm font-light text-center md:text-left'>
              © 2025 SATYAMEBA Lab. All rights reserved.
            </p>
            <div className='flex space-x-6 text-slate-500'>
              <button className='hover:text-slate-300 transition-colors text-sm font-light'>
                Privacy Policy
              </button>
              <button className='hover:text-slate-300 transition-colors text-sm font-light'>
                Terms of Service
              </button>
            </div>
          </div>
        </div>
        
      </div>
    </footer>
  )
}

export default Footer