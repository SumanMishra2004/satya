import React from 'react'
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  User,
  Building,
  FileText,
  ExternalLink
} from 'lucide-react'

const Contact = () => {
  const contactInfo = {
    address: `Supercomputing Lab
    IEDC (drone & UAV)
University of Engineering & Management, Kolkata (UEMK)
New Town, Kolkata - 700160
West Bengal, India`,
    phone: "+91-33-6600-1234",
    email: "satyameba@iem.edu.in",
    website: "www.satyameba.co.in",
    workingHours: `Monday - Friday: 9:00 AM - 6:00 PM
Saturday: 9:00 AM - 1:00 PM
Sunday: Closed`
  }
 

  return (
    <div className='min-h-screen bg-gradient-to-b from-slate-50 to-white'>
      {/* Header Section */}
      <section className='pt-24 md:pt-40 pb-12 bg-gradient-to-r from-blue-50 to-green-50'>
        <div className='max-w-7xl mx-auto px-4 md:px-8 lg:px-16'>
          <div className='text-center'>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-extralight tracking-wide text-gray-800 mb-6'>
              Contact <span className='text-blue-600 font-medium'>Us</span>
            </h1>
            <div className='w-32 h-0.5 bg-blue-500 mx-auto mb-8'></div>
            <p className='text-lg md:text-xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto'>
              Get in touch with our team, submit your research, or find answers to your questions. We're here to support the global research community.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Information */}
      <section className='py-16'>
        <div className='max-w-7xl mx-auto px-4 md:px-8 lg:px-16'>
          <div className={`grid lg:grid-cols-2 gap-12 `}>
            {/* Contact Details */}
            <div >
              <h2 className='text-3xl font-light text-gray-800 mb-8'>Get in Touch</h2>
              <div className='space-y-8'>
                {/* Address */}
                <div className='bg-white rounded-2xl shadow-lg p-8 border border-gray-100'>
                  <div className='flex items-start gap-4'>
                    <div className='w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0'>
                      <MapPin className='w-6 h-6 text-blue-600' />
                    </div>
                    <div>
                      <h3 className='text-lg font-medium text-gray-800 mb-2'>Address</h3>
                      <p className='text-gray-600 leading-relaxed whitespace-pre-line'>{contactInfo.address}</p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className='bg-white rounded-2xl shadow-lg p-6 border border-gray-100'>
                  <div className='flex items-center gap-3 mb-4'>
                    <div className='w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center'>
                      <Mail className='w-5 h-5 text-purple-600' />
                    </div>
                    <h3 className='text-lg font-medium text-gray-800'>Email</h3>
                  </div>
                  <p className='text-gray-600'>{contactInfo.email}</p>
                </div>

                {/* Working Hours */}
                <div className='bg-white rounded-2xl shadow-lg p-8 border border-gray-100'>
                  <div className='flex items-start gap-4'>
                    <div className='w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0'>
                      <Clock className='w-6 h-6 text-orange-600' />
                    </div>
                    <div>
                      <h3 className='text-lg font-medium text-gray-800 mb-2'>Working Hours</h3>
                      <p className='text-gray-600 leading-relaxed whitespace-pre-line'>{contactInfo.workingHours}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className='text-3xl font-light text-gray-800 mb-8'>Send us a Message</h2>
              <div className='bg-white rounded-2xl shadow-lg p-8 border border-gray-100'>
                <form className='space-y-6'>
                  {/* Name */}
                  <div className='grid md:grid-cols-2 gap-6'>
                    <div>
                      <label htmlFor='firstName' className='block text-sm font-medium text-gray-700 mb-2'>First Name *</label>
                      <input type='text' id='firstName' name='firstName' placeholder='Your first name' required className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors'/>
                    </div>
                    <div>
                      <label htmlFor='lastName' className='block text-sm font-medium text-gray-700 mb-2'>Last Name *</label>
                      <input type='text' id='lastName' name='lastName' placeholder='Your last name' required className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors'/>
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-2'>Email Address *</label>
                    <input type='email' id='email' name='email' placeholder='your.email@example.com' required className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors'/>
                  </div>

                  {/* Affiliation */}
                  <div>
                    <label htmlFor='affiliation' className='block text-sm font-medium text-gray-700 mb-2'>Institutional Affiliation</label>
                    <input type='text' id='affiliation' name='affiliation' placeholder='Your university or organization' className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors'/>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor='subject' className='block text-sm font-medium text-gray-700 mb-2'>Subject *</label>
                    <select id='subject' name='subject' required className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors'>
                      <option value=''>Select a subject</option>
                      <option value='submission'>Manuscript Submission</option>
                      <option value='review'>Peer Review Inquiry</option>
                      <option value='editorial'>Editorial Board</option>
                      <option value='technical'>Technical Support</option>
                      <option value='subscription'>Subscription</option>
                      <option value='other'>Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor='message' className='block text-sm font-medium text-gray-700 mb-2'>Message *</label>
                    <textarea id='message' name='message' rows={6} placeholder='Please describe your inquiry in detail...' required className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none'/>
                  </div>

                  <button type='submit' disabled className='w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed'>
                    <Send className='w-5 h-5' /> Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Offices */}
   

      {/* Map Section */}
      <section className='py-16 bg-gradient-to-b from-gray-50 to-white'>
        <div className='max-w-7xl mx-auto px-4 md:px-8 lg:px-16'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-light text-gray-800 mb-4'>Find Us</h2>
            <p className='text-lg text-gray-600 font-light'>Our location in the heart of Kolkata's education hub</p>
          </div>
          <div className='bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100'>
            <div className='aspect-video bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center'>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.5125635141785!2d88.48732647452583!3d22.5599251334362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a020b267a3cdc13%3A0xb3b21d652126f40!2sUniversity%20of%20Engineering%20%26%20Management%2C%20Kolkata%20(UEM)!5e0!3m2!1sen!2sin!4v1757783173456!5m2!1sen!2sin"
                width="600"
                height="450"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
