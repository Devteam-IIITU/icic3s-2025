import React from 'react';
import ieeeDelhi from '../assets/images/ieee-delhi.png';
import adminImage from '../assets/images/Admin4.jpg';

const Features: React.FC = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center bg-zinc-200 pb-10">
        <h4 className="text-center font-[sans-serif] text-black font-bold text-xl sm:text-2xl leading-snug pt-3 sm:pt-10">
          Technically Sponsored by
        </h4>
        <img
          src={ieeeDelhi}
          alt="IEEE Delhi"
          className="mt-5 w-40 sm:w-56 lg:w-72"
        />
      </div>

      {/* Conference Information Section */}
      <div className="container-fluid bg-neutral-300 p-6 sm:p-10">
        <div className="flex flex-col lg:flex-row lg:space-x-10">
          {/* Text Section */}
          <div className="w-full lg:w-3/4 flex flex-col justify-center font-[sans-serif] order-2 lg:order-1">
            <p className="text-justify text-black text-base sm:text-lg lg:text-2xl leading-relaxed p-4 sm:p-6 lg:p-0">
              The International Conference on <strong>“Integrated Circuits, Communication, and Computing Systems
              (ICIC3S-2025)”</strong> is the premier forum for showcasing recent developments and research
              findings in the domains of integrated circuits, microwave, communication, and next-generation
              computing. The conference will bring together leading researchers, engineers, and scientists in the
              domain of interest from around the world. The impetus for this conference is based on the growing necessity
              to support an exponentially growing number of intelligent devices while also maintaining highly effective
              communication systems.
            </p>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center items-center mb-6 lg:mb-0 order-1 lg:order-2">
            <img
              src={adminImage}
              alt="Conference Image"
              className="h-64 sm:h-80 lg:h-[400px] w-auto max-w-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
