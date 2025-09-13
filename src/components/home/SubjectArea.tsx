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
          {/* Left Side - Text Content with Sticky Stacking */}
          <div className="space-y-6 lg:space-y-8">
            {/* Card 1 - Research Excellence */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-200 sticky top-16 md:top-36 z-10 w-full">
              <h3 className="text-lg md:text-xl lg:text-2xl font-light text-blue-600 mb-3 lg:mb-4 tracking-wide">
                Research Excellence
              </h3>
              <p className="text-gray-700 leading-relaxed font-light tracking-wide text-base lg:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Molestias impedit dolor recusandae deserunt,
                cumque beatae eligendi? Magni laborum consectetur sapiente
                laudantium voluptas nam. Odit, voluptate nulla debitis ullam
                accusantium non.
              </p>
            </div>

            {/* Card 2 - Innovation Focus */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-200 sticky top-16 md:top-36 z-20 w-full">
              <h3 className="text-lg md:text-xl lg:text-2xl font-light text-blue-600 mb-3 lg:mb-4 tracking-wide">
                Innovation Focus
              </h3>
              <p className="text-gray-700 leading-relaxed font-light tracking-wide text-base lg:text-lg">
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Molestias impedit dolor recusandae deserunt,
                cumque beatae eligendi? Magni laborum consectetur sapiente
                laudantium voluptas nam. Odit, voluptate nulla debitis ullam
                accusantium non.
              </p>
            </div>

            {/* Card 3 - Future Prospects */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-200 sticky top-16 md:top-36 z-30 w-full">
              <h3 className="text-lg md:text-xl lg:text-2xl font-light text-blue-600 mb-3 lg:mb-4 tracking-wide">
                Future Prospects
              </h3>
              <p className="text-gray-700 leading-relaxed font-light tracking-wide text-base lg:text-lg">
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Molestias impedit dolor recusandae deserunt,
                cumque beatae eligendi? Magni laborum consectetur sapiente
                laudantium voluptas nam. Odit, voluptate nulla debitis ullam
                accusantium non.
              </p>
            </div>
          </div>

          {/* Right Side - Gradient Boxes with Sticky Stacking */}
          <div className="space-y-6 lg:space-y-8">
            {/* Gradient Box 1 */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-200 sticky top-16 md:top-36 z-10 w-full">
              <div className="aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-white text-lg lg:text-xl font-light tracking-wide">
                    Research
                  </div>
                </div>
              </div>
              <h4 className="text-base lg:text-lg font-light text-gray-800 tracking-wide text-center">
                Research & Development
              </h4>
            </div>

            {/* Gradient Box 2 */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-200 sticky top-16 md:top-36 z-20 w-full">
              <div className="aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-gradient-to-br from-green-400 via-blue-500 to-purple-600">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-white text-lg lg:text-xl font-light tracking-wide">
                    Innovation
                  </div>
                </div>
              </div>
              <h4 className="text-base lg:text-lg font-light text-gray-800 tracking-wide text-center">
                Innovation Hub
              </h4>
            </div>

            {/* Gradient Box 3 */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-200 sticky top-16 md:top-36 z-30 w-full">
              <div className="aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-gradient-to-br from-orange-400 via-red-500 to-pink-600">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-white text-lg lg:text-xl font-light tracking-wide">
                    Future
                  </div>
                </div>
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
