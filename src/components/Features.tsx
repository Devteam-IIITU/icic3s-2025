import React from 'react';
// import ieeeDelhi from '../assets/images/ieee-delhi.png'; 
import adminImage from '../assets/images/Admin4.jpg';

const Features: React.FC = () => {
  return (
    <>
      {/* Technically Sponsored Section */}
      {/* <div className="w-full flex flex-col items-center bg-zinc-200 py-10">
        <h4 className="text-center font-[sans-serif] text-black font-bold text-2xl leading-snug pt-10">
          Technically Sponsored by
        </h4>
        <img src={ieeeDelhi} alt="IEEE Delhi" className="mt-5" />
      </div> */}

      {/* Conference Description Section */}
      <div className="container-fluid bg-neutral-300 p-10">
        <div className="flex flex-col lg:flex-row">
          {/* Text Content */}
          <div className="w-full lg:w-3/4 flex font-[sans-serif] flex-col justify-center pt-4 p-2 lg:p-6 lg:pl-20 lg:pr-10 order-2 lg:order-1">
            <p className=" text-center lg:text-justify text-black text-base lg:text-xl leading-relaxed ">
              2nd International Conference on <strong>“Integrated Circuits, Communication, and Computing Systems
              (ICIC3S-2026)”</strong> is the premier forum for showcasing recent developments and research
              findings in the domains of integrated circuits, microwave, communication, and next generation
              computing. The conference will bring together leading researchers, engineers, and scientists in the 
              domain of interest from around the world. The impetus for this conference is based on the growing necessity 
              to support an exponentially growing number of intelligent devices while also maintaining highly effective 
              communication systems.
            </p>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center items-center order-1 rounded lg:order-2">
            <img src={adminImage} alt="Conference Image" className="h-[250px] lg:h-[400px] w-auto border-4 rounded max-w-full object-cover" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
