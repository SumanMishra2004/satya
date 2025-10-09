import React from 'react'
import { Users, Target, Lightbulb, Cpu, Zap, Globe, Award, Building } from 'lucide-react'
import Image from 'next/image'

const About = () => {
 
  const achievements = [
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Advanced Computing Infrastructure",
      description: "State-of-the-art supercomputing facilities with multi-GPU clusters"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "AI Acceleration Excellence",
      description: "Cutting-edge AI acceleration technologies and optimization frameworks"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Research Collaboration",
      description: "Global partnerships with leading research institutions and industry"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Innovation Recognition",
      description: "Multiple awards for breakthrough innovations in supercomputing"
    }
  ]

  return (
    <div className='w-full min-h-screen bg-gradient-to-br from-[#FDF0D5] to-white'>
      {/* Hero Section */}
      <section className='w-full pt-40 pb-16 px-4 md:px-8 lg:px-16'>
        <div className='max-w-6xl mx-auto text-center'>
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-[#780000] to-[#C1121F] bg-clip-text text-transparent'>
            About SATYAMEBA
          </h1>
          <div className='text-xl md:text-2xl text-[#003049] mb-8 max-w-4xl mx-auto leading-relaxed'>
            <span className='font-semibold text-[#C1121F]'>S</span>upercomputing{' '}
            <span className='font-semibold text-[#C1121F]'>A</span>rchitecture for{' '}
            <span className='font-semibold text-[#C1121F]'>T</span>ransformative{' '}
            <span className='font-semibold text-[#C1121F]'>Y</span>ield in{' '}
            <span className='font-semibold text-[#C1121F]'>A</span>I and{' '}
            <span className='font-semibold text-[#C1121F]'>M</span>ulti-GPU{' '}
            <span className='font-semibold text-[#C1121F]'>E</span>ngine{' '}
            <span className='font-semibold text-[#C1121F]'>B</span>ased{' '}
            <span className='font-semibold text-[#C1121F]'>A</span>cceleration
          </div>
          <p className='text-lg text-[#003049]/80 max-w-3xl mx-auto'>
            A pioneering research center dedicated to advancing the frontiers of supercomputing, 
            artificial intelligence, and multi-GPU acceleration technologies at the University of Engineering & Management.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className='w-full py-16 bg-gradient-to-r from-[#003049]/10 to-[#669BBC]/10'>
        <div className='max-w-6xl mx-auto px-4 md:px-8 lg:px-16'>
          <div className='grid md:grid-cols-2 gap-12'>
            <div className='text-center md:text-left'>
              <div className='flex items-center justify-center md:justify-start mb-4'>
                <Target className='w-8 h-8 text-[#C1121F] mr-3' />
                <h2 className='text-3xl font-bold text-[#780000]'>Our Mission</h2>
              </div>
              <p className='text-lg text-[#003049] leading-relaxed'>
                To revolutionize computational science through innovative supercomputing architectures, 
                advanced AI acceleration techniques, and multi-GPU optimization frameworks that drive 
                transformative breakthroughs in research and industry applications.
              </p>
            </div>
            <div className='text-center md:text-left'>
              <div className='flex items-center justify-center md:justify-start mb-4'>
                <Lightbulb className='w-8 h-8 text-[#C1121F] mr-3' />
                <h2 className='text-3xl font-bold text-[#780000]'>Our Vision</h2>
              </div>
              <p className='text-lg text-[#003049] leading-relaxed'>
                To become a global leader in supercomputing research and AI acceleration, 
                fostering innovation that addresses complex computational challenges and 
                empowers the next generation of high-performance computing solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className='w-full py-16'>
        <div className='max-w-6xl mx-auto px-4 md:px-8 lg:px-16'>
          <h2 className='text-4xl font-bold text-center mb-12 text-[#780000]'>Our Achievements</h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {achievements.map((achievement, index) => (
              <div key={index} className='text-center bg-white rounded-xl p-6 shadow-lg border border-[#669BBC]/20 hover:shadow-xl transition-shadow'>
                <div className='flex justify-center mb-4 text-[#C1121F]'>
                  {achievement.icon}
                </div>
                <h3 className='text-xl font-semibold mb-3 text-[#780000]'>{achievement.title}</h3>
                <p className='text-[#003049]/80'>{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

     

      {/* Contact CTA Section */}
      <section className='w-full py-16 bg-gradient-to-r from-[#780000] to-[#C1121F]'>
        <div className='max-w-4xl mx-auto px-4 md:px-8 lg:px-16 text-center'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4 text-[#FDF0D5]'>Join Our Research Community</h2>
          <p className='text-lg mb-8 text-[#FDF0D5]/90 max-w-2xl mx-auto'>
            Collaborate with us to push the boundaries of supercomputing and AI acceleration. 
            Together, we can shape the future of high-performance computing.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <a
              href='/contact'
              className='bg-[#FDF0D5] text-[#780000] px-8 py-3 rounded-full font-semibold hover:bg-white transition-colors'
            >
              Contact Us
            </a>
            <a
              href='/services/1'
              className='bg-transparent border-2 border-[#FDF0D5] text-[#FDF0D5] px-8 py-3 rounded-full font-semibold hover:bg-[#FDF0D5] hover:text-[#780000] transition-colors'
            >
              Explore Services
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About