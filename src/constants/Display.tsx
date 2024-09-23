import React from "react";

interface AboutProps {
  heading?: string;
  para: string;
  image: string;
}

const Display: React.FC<AboutProps> = ({ heading, para, image }) => {
  return (
    <div id="about" className="about-company py-12 px-12">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between md:space-x-8">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <div className="detail">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                {heading}
              </h3>
              <p className="text-justify text-black text-base sm:text-xl lg:text-2xl leading-relaxed pt-4 sm:px-4 lg:px-0">
                {para}
              </p>
            </div>
          </div>
          <div className="mt-6 md:mt-0">
            <div className="image">
              <img
                src={image}
                alt="About"
                className="w-80 sm:w-96 lg:w-[480px] h-auto max-h-full object-cover rounded-lg shadow-lg border-4 border-gray-300" // Added border
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Display;
