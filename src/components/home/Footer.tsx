import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='bg-gradient-to-br from-slate-800 via-slate-900 to-blue-900 text-white py-12 md:py-16'>
      <div className='max-w-7xl mx-auto px-4 md:px-8 lg:px-16'>
        <div className='grid md:grid-cols-2 gap-8 md:gap-16 items-start'>
          
          {/* Left Side - Logo and IEDC Info */}
          <div className='flex flex-col items-center md:items-start space-y-6'>
            
            {/* IEDC Logo - Rounded Square */}
            <div className='w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500 to-blue-600 p-1 shadow-xl'>
              <div className='w-full h-full rounded-xl overflow-hidden bg-white'>
                <Image 
                  src="/iedc-logo.jpg" 
                  width={96} 
                  height={96} 
                  alt='IEDC Logo'
                  className='w-full h-full object-cover'
                />
              </div>
            </div>
            
            {/* IEDC Text - Responsive */}
            <div className='text-center md:text-left'>
              {/* Mobile Version - Only IEDC */}
              <div className='block md:hidden'>
                <h3 className='text-2xl font-light tracking-wide text-slate-100'>
                  IEDC
                </h3>
                <p className='text-slate-300 text-sm mt-1 font-light'>
                  Innovation • Entrepreneurship • Development
                </p>
              </div>
              
              {/* Desktop Version - Full Form */}
              <div className='hidden md:block'>
                <h3 className='text-xl lg:text-2xl font-light tracking-wide text-slate-100 mb-2'>
                  <span className='text-blue-400'>I</span>nnovation and{' '}
                  <span className='text-blue-400'>E</span>ntrepreneurship{' '}
                  <span className='text-blue-400'>D</span>evelopment{' '}
                  <span className='text-blue-400'>C</span>ell
                </h3>
                <div className='text-slate-300 text-sm font-light leading-relaxed'>
                  <p>Fostering innovation and entrepreneurship</p>
                  <p>among students and researchers</p>
                </div>
              </div>
            </div>
            
            {/* Contact Info */}
            <div className='text-center md:text-left text-slate-400 text-sm'>
              <p className='font-light'>University of Engineering & Management</p>
              <p className='font-light'>Department of Computer Science & Engineering</p>
            </div>
            
          </div>
          
          {/* Right Side - Navigation Buttons */}
          <div className='flex flex-col space-y-4'>
            
            {/* Quick Links Header */}
            <h4 className='text-lg md:text-xl font-light text-slate-100 mb-2 text-center md:text-left'>
              Quick Links
            </h4>
            
            {/* Navigation Buttons Stack */}
            <div className='flex flex-col space-y-3'>
              
              {/* Button 1 */}
              <Link href={"/editorial-board"} className='bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-blue-400/30 rounded-xl px-6 py-4 text-left transition-all duration-300 group hover:shadow-lg'>
                <div className='flex items-center justify-between'>
                  <div>
                    <h5 className='font-medium text-slate-100 group-hover:text-blue-300'>Editorial Board</h5>
                    <p className='text-slate-400 text-sm font-light'>Information about the editorial Board</p>
                  </div>
                  <div className='text-slate-500 group-hover:text-blue-400 transition-colors'>
                    <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M9 5l7 7-7 7' />
                    </svg>
                  </div>
                </div>
              </Link>
              
              {/* Button 2 */}
              <Link href={"/current-issue"} className='bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-blue-400/30 rounded-xl px-6 py-4 text-left transition-all duration-300 group hover:shadow-lg'>
                <div className='flex items-center justify-between'>
                  <div>
                    <h5 className='font-medium text-slate-100 group-hover:text-blue-300'>Current Issue</h5>
                    <p className='text-slate-400 text-sm font-light'>Explore the latest research from this issue.</p>
                  </div>
                  <div className='text-slate-500 group-hover:text-blue-400 transition-colors'>
                    <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M9 5l7 7-7 7' />
                    </svg>
                  </div>
                </div>
              </Link>
              
              {/* Button 3 */}
              <button className='bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-blue-400/30 rounded-xl px-6 py-4 text-left transition-all duration-300 group hover:shadow-lg'>
                <div className='flex items-center justify-between'>
                  <div>
                    <h5 className='font-medium text-slate-100 group-hover:text-blue-300'>Archives</h5>
                    <p className='text-slate-400 text-sm font-light'>Explore previously published articles from our journal archives.</p>
                  </div>
                  <div className='text-slate-500 group-hover:text-blue-400 transition-colors'>
                    <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M9 5l7 7-7 7' />
                    </svg>
                  </div>
                </div>
              </button>
              
              {/* Button 4 */}
              <button className='bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-blue-400/30 rounded-xl px-6 py-4 text-left transition-all duration-300 group hover:shadow-lg'>
                <div className='flex items-center justify-between'>
                  <div>
                    <h5 className='font-medium text-slate-100 group-hover:text-blue-300'>Contact Us</h5>
                    <p className='text-slate-400 text-sm font-light'>Reach out to our editorial team for queries.</p>
                  </div>
                  <div className='text-slate-500 group-hover:text-blue-400 transition-colors'>
                    <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M9 5l7 7-7 7' />
                    </svg>
                  </div>
                </div>
              </button>
              
            </div>
          </div>
          
        </div>
        
        {/* Footer Bottom - Copyright */}
        <div className='mt-12 pt-8 border-t border-white/10'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            <p className='text-slate-400 text-sm font-light text-center md:text-left'>
              © 2025 Innovation and Entrepreneurship Development Cell. All rights reserved.
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