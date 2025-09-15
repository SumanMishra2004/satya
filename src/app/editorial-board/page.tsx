import React from 'react'
import { Mail, MapPin, ExternalLink, GraduationCap } from 'lucide-react'

const EditorialBoard = () => {
  const editorialMembers = [
    {
      id: 1,
      name: "Prof.(Dr.) Sandip Mandal",
      designation: "Head of the Department, CSE(IoT, CS, BT) & Chief Editor ",
      institution: "University of Engineering & Management",
      department: "CSE(IoT, CS, BT)",
      email: "sandip.mandal@uem.edu.in",
      address: "University Area, Plot No III B/5, New Town Action Area III, Newtown, Kolkata, West Bengal 700160",
      profileLink: "https://www.linkedin.com/in/dr-sandip-mandal?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      image: "/Sandip.jpeg"
    },
    {
      id: 2,
      name: "Prof.(Dr.) Susmita Biswas",
      designation: "Assistant Head of Department, CSE(IoT, CS, BT) & IEDC Coordinator",
      institution: "University of Engineering & Management",
      department: "CSE(IoT, CS, BT)",
      email: "susmita.biswas@uem.edu.in",
      address: "University Area, Plot No III B/5, New Town Action Area III, Newtown, Kolkata, West Bengal 700160",
      profileLink: "https://www.linkedin.com/in/dr-susmita-biswas-21a695b0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      image: "/Susmita.jpeg"
    },
    {
      id: 3,
      name: "Prof. Avik Kumar Das",
      designation: "Editor",
      institution: "University of Engineering & Management",
      department: "CSE(IoT, CS, BT)",
      email: "avikkumar.das@uem.edu.in",
      address: "University Area, Plot No III B/5, New Town Action Area III, Newtown, Kolkata, West Bengal 700160",
      profileLink: "https://www.linkedin.com/in/avikdasetc?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      image: "/Avik.jpeg"
    },
    {
      id: 4,
      name: "Prof. Apurba Nandi",
      designation: "Editor",
      institution: "University of Engineering & Management",
      department: "CSE(IoT, CS, BT)",
      email: "apurba.nandi@uem.edu.in",
      address: "University Area, Plot No III B/5, New Town Action Area III, Newtown, Kolkata, West Bengal 700160",
      profileLink: "https://www.linkedin.com/in/apurba-nandi-8b63b2174?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      image: "/Apurba.jpeg"
    },
    {
      id: 5,
      name: "Tista Mukherjee",
      designation: "Student Member",
      institution: "University of Engineering & Management",
      department: "CSE(IoT, CS, BT)",
      email: "tista.mukherjee2023@uem.edu.in",
      address: "University Area, Plot No III B/5, New Town Action Area III, Newtown, Kolkata, West Bengal 700160",
      profileLink: "https://www.linkedin.com/in/tista-mukherjee-8a574a28a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      image: "/Tista.jpg"
    },
    {
      id: 6,
      name: "Somrik Mondal",
      designation: "Student Member",
      institution: "University of Engineering & Management",
      department: "CSE(IoT, CS, BT)",
      email: "somrik.mondal2023@uem.edu.in",
      address: "University Area, Plot No III B/5, New Town Action Area III, Newtown, Kolkata, West Bengal 700160",
      profileLink: "https://www.linkedin.com/in/somrik-mondal-558aa8321?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      image: "/somrik.jpg"
    }
  ]

  return (
    <div className='min-h-screen bg-gradient-to-b from-slate-50 to-white'>
      {/* Header Section */}
      <section className='pt-24 md:pt-40 pb-12 bg-gradient-to-r from-blue-50 to-slate-50'>
        <div className='max-w-7xl mx-auto px-4 md:px-8 lg:px-16'>
          <div className='text-center'>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-extralight tracking-wide text-gray-800 mb-6'>
              Editorial <span className='text-blue-600 font-medium'>Board</span>
            </h1>
            <div className='w-32 h-0.5 bg-blue-500 mx-auto mb-8'></div>
            <p className='text-lg md:text-xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto'>
              Meet our distinguished editorial board members who bring decades of research experience 
              and academic excellence to guide our journal's scholarly mission.
            </p>
          </div>
        </div>
      </section>

      {/* Editorial Board Grid */}
      <section className='py-16 md:py-24'>
        <div className='max-w-7xl mx-auto px-4 md:px-8 lg:px-16'>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {editorialMembers.map((member) => (
              <div
                key={member.id}
                className='bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group'
              >
                {/* Profile Image Section */}
                <div className='h-48 bg-gradient-to-br from-blue-500 to-blue-600 relative overflow-hidden'>
                  <div className='absolute inset-0 bg-white/20 backdrop-blur-sm'></div>
                  <div className='absolute bottom-4 left-4 right-4'>
                    <div className='w-20 h-20 rounded-full bg-white overflow-hidden border-4 border-white/50 mx-auto'>
                      <img
                        src={member.image}
                        alt={member.name}
                        className='w-full h-full object-cover'
                      />
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className='p-6'>
                  {/* Name and Designation */}
                  <div className='text-center mb-6'>
                    <h3 className='text-xl font-semibold text-gray-800 mb-2'>
                      {member.name}
                    </h3>
                    <div className='inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium'>
                      <GraduationCap className='w-4 h-4' />
                      {member.designation}
                    </div>
                  </div>

                  {/* Institution */}
                  <div className='space-y-4'>
                    <div>
                      <h4 className='font-medium text-gray-800 mb-1'>Institution</h4>
                      <p className='text-gray-600 text-sm leading-relaxed'>
                        {member.institution}
                      </p>
                      <p className='text-gray-500 text-sm'>
                        {member.department}
                      </p>
                    </div>

                    {/* Email */}
                    <div className='flex items-start gap-3'>
                      <Mail className='w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0' />
                      <div>
                        <h4 className='font-medium text-gray-800 text-sm mb-1'>Email</h4>
                        <a
                          href={`mailto:${member.email}`}
                          className='text-blue-600 hover:text-blue-700 text-sm break-all transition-colors'
                        >
                          {member.email}
                        </a>
                      </div>
                    </div>

                    {/* Address */}
                    <div className='flex items-start gap-3'>
                      <MapPin className='w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0' />
                      <div>
                        <h4 className='font-medium text-gray-800 text-sm mb-1'>Address</h4>
                        <p className='text-gray-600 text-sm leading-relaxed'>
                          {member.address}
                        </p>
                      </div>
                    </div>

                    {/* Profile Link */}
                    <div className='pt-4 border-t border-gray-100'>
                      <a
                        href={member.profileLink}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors group'
                      >
                        <ExternalLink className='w-4 h-4' />
                        View LinkedIn Profile
                        <span className='group-hover:translate-x-1 transition-transform'>→</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className='py-16 bg-gradient-to-r from-blue-50 to-slate-50'>
        <div className='max-w-4xl mx-auto text-center px-4 md:px-8 lg:px-16'>
          <h2 className='text-3xl md:text-4xl font-light text-gray-800 mb-6'>
            Join Our Academic Community
          </h2>
          <p className='text-lg text-gray-600 font-light leading-relaxed mb-8'>
            We welcome submissions from researchers and academics worldwide. 
            Our editorial board ensures rigorous peer review and maintains the highest standards of academic excellence.
          </p>
        </div>
      </section>
    </div>
  )
}

export default EditorialBoard