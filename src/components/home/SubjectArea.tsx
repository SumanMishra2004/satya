import Image from "next/image";
import React from "react";

const SubjectArea = () => {
  return (
    <section className="relative py-16 md:py-24 bg-white">
      {/* Clean white background - no overlay needed */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight tracking-wide text-[#003049] mb-4">
            Core{" "}
            <span className="text-[#C1121F] font-medium">Technologies</span>
          </h2>
          <div className="w-24 h-0.5 bg-[#C1121F] mx-auto"></div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left Side - Text Content */}
          <div className="space-y-6 lg:space-y-8">
            {/* Card 1 - Supercomputing Excellence*/}
            <div className="bg-[#FDF0D5]/95 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-lg border border-[#669BBC] sticky top-16 md:top-36 z-10 w-full">
              <h3 className="text-lg md:text-xl lg:text-2xl font-light text-[#C1121F] mb-3 lg:mb-4 tracking-wide">
                Supercomputing Excellence
              </h3>
              <p className="text-[#003049] leading-relaxed font-light tracking-wide text-base lg:text-lg text-justify">
                SATYAMEBA at UEM Kolkata delivers
                cutting-edge supercomputing capabilities through advanced
                multi-GPU architectures and AI acceleration. Our
                state-of-the-art computing lab features high-performance
                workstations equipped with powerful graphics processing units,
                enabling transformative research in machine learning, deep
                learning, and artificial intelligence. 
              </p>
              <p className="text-[#003049] leading-relaxed font-light tracking-wide text-base lg:text-lg text-justify">The facility provides
                researchers and students with dedicated computational resources
                for breakthrough solutions across scientific computing, data
                analytics, and computational modeling. </p>
            </div>

            {/* Card 2 - AI & Multi-GPU Focus*/}
            <div className="bg-[#FDF0D5]/95 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-lg border border-[#669BBC] sticky top-16 md:top-36 z-20 w-full">
              <h3 className="text-lg md:text-xl lg:text-2xl font-light text-[#C1121F] mb-3 lg:mb-4 tracking-wide">
                AI & Multi-GPU Acceleration
              </h3>
              <p className="text-[#003049] leading-relaxed font-light tracking-wide text-base lg:text-lg text-justify">
                Our specialized focus emphasizes transformative yield through
                multi-GPU engine-based acceleration. We develop advanced AI
                algorithms, neural network optimization, parallel computing
                solutions, and high-throughput data processing. Leveraging
                state-of-the-art GPU clusters, we enable rapid model training,
                real-time inference, and scalable AI applications that drive
                innovation across computational sciences.
              </p>
              <p className="text-[#003049] leading-relaxed font-light tracking-wide text-base lg:text-lg text-justify">
                 Our infrastructure creates an ideal environment where innovation meets computational power, empowering the next generation of AI researchers and data scientists to push the boundaries of what's possible.
              </p>
            </div>
          </div>

          {/* Right Side - Technology Showcase */}
          <div className="space-y-6 lg:space-y-8">
            {/* Box 1 */}
            <div className="bg-[#FDF0D5]/95 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-lg border border-[#669BBC] sticky top-16 md:top-36 z-10">
              <div className="relative aspect-[4/3] w-full mb-4 rounded-xl overflow-hidden">
                <Image
                  src="/img2.jpg"
                  alt="Supercomputing Research"
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="text-base lg:text-lg font-light text-[#003049] tracking-wide text-center">
                Supercomputing Research
              </h4>
            </div>

            {/* Box 2 */}
            <div className="bg-[#FDF0D5]/95 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-lg border border-[#669BBC] sticky top-16 md:top-36 z-20">
              <div className="relative aspect-[4/3]  mb-4 rounded-xl overflow-hidden">
                <Image
                  src="/img3.jpg"
                  alt="AI Acceleration"
                  fill
                  className="object-cover "
                />
              </div>
              <h4 className="text-base lg:text-lg font-light text-[#003049] tracking-wide text-center">
                AI Acceleration
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubjectArea;
