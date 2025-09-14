import Image from "next/image";
import React from "react";

const SubjectArea = () => {
  return (
    <section className="relative py-16 md:py-24">
      {/* Sky Blue to White Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-200 to-white"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight tracking-wide text-gray-800 mb-4">
            Subject <span className="text-blue-600 font-medium">Areas</span>
          </h2>
          <div className="w-24 h-0.5 bg-blue-500 mx-auto"></div>
        </div>

         {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left Side - Text Content */}
          <div className="space-y-6 lg:space-y-8">
            {/* Card 1 - Research Excellence*/}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-200 sticky top-16 md:top-36 z-10 w-full">
              <h3 className="text-lg md:text-xl lg:text-2xl font-light text-blue-600 mb-3 lg:mb-4 tracking-wide">
                Research Excellence
              </h3>
              <p className="text-gray-700 leading-relaxed font-light tracking-wide text-base lg:text-lg text-justify">
                IEDC Lab at UEM Kolkata drives cutting-edge research in AI, IoT, Blockchain, and Neuroscience, fostering real-world innovation through advanced infrastructure and industry collaboration. With multiple patents, publications, and funded projects, our interdisciplinary approach empowers students and researchers to develop impactful solutions, addressing healthcare, agriculture, sustainability, and smart technologies.
              </p>
            </div>

            {/* Card 2 - Innovation Focus*/}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-200 sticky top-16 md:top-36 z-20 w-full">
              <h3 className="text-lg md:text-xl lg:text-2xl font-light text-blue-600 mb-3 lg:mb-4 tracking-wide">
                Innovation Focus
              </h3>
              <p className="text-gray-700 leading-relaxed font-light tracking-wide text-base lg:text-lg text-justify">
                Our innovation emphasizes interdisciplinary solutions combining AI, machine learning, IoT, and Blockchain. We develop smart healthcare diagnostics, predictive analytics, autonomous systems, and secure data platforms. Leveraging advanced infrastructure, we empower rapid prototyping, real-time applications, and edge computing, driving novel inventions, sustainable practices, and disruptive products that address global challenges with practical efficiency.
              </p>
            </div>

            {/* Card 3 - Future Prospects*/}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-200 sticky top-16 md:top-36 z-30 w-full">
              <h3 className="text-lg md:text-xl lg:text-2xl font-light text-blue-600 mb-3 lg:mb-4 tracking-wide">
                Future Prospects
              </h3>
              <p className="text-gray-700 leading-relaxed font-light tracking-wide text-base lg:text-lg text-justify">
                IEDC Lab envisions advancing intelligent systems by integrating AI, IoT, and Blockchain with real-world applications. Focused on sustainable technologies, healthcare innovations, and smart agriculture, the lab aims to develop industry-ready solutions. Strategic collaborations and cutting-edge research foster a future of impactful technologies, driving entrepreneurship, academic excellence, and societal transformation.
              </p>
            </div>
          </div>

            {/* Right Side - Image / Gradient Boxes */}
          <div className="space-y-6 lg:space-y-8">
            {/* Box 1 */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-200 sticky top-16 md:top-36 z-10">
              <div className="relative aspect-[4/3] w-full mb-4 rounded-xl overflow-hidden">
                <Image
                  src="/Reseach.png"
                  alt="Research & Development"
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="text-base lg:text-lg font-light text-gray-800 tracking-wide text-center">
                Research & Development
              </h4>
            </div>

            {/* Box 2 */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-200 sticky top-16 md:top-36 z-20">
              <div className="relative aspect-[4/3] w-full mb-4 rounded-xl overflow-hidden">
                <Image
                  src="/Innovation_focus.jpg"
                  alt="Innovation"
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="text-base lg:text-lg font-light text-gray-800 tracking-wide text-center">
                Innovation Hub
              </h4>
            </div>

            {/* Box 3 */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-200 sticky top-16 md:top-36 z-30">
              <div className="relative aspect-[4/3] w-full mb-4 rounded-xl overflow-hidden">
                <Image
                  src="/Future_prospects.jpg"
                  alt="Future Technology"
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="text-base lg:text-lg font-light text-gray-800 tracking-wide text-center">
                Future Technology
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubjectArea;