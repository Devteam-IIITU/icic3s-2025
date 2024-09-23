import React from "react";
import Background from "../assets/images/Back_image.jpeg"; // Correct import

const ConferenceBanner: React.FC = () => {
  return (
    <div
      className="bg-cover bg-center text-center"
      style={{
        backgroundImage: `url(${Background})`,
      }}
    >
      <div className="bg-black bg-opacity-60 flex flex-col items-center justify-center py-10">
        <h4 className="text-gray-200 text-shadow-xl p-5">
          <span style={{ lineHeight: '1.4' }} className="font-bold font-[sans-serif] text-3xl sm:text-4xl md:text-5xl leading-[1.5]">
            INTERNATIONAL CONFERENCE <br /> ON <br /> INTEGRATED CIRCUITS,
            COMMUNICATION, AND COMPUTING SYSTEMS
            <br />
            (ICIC3S-2025)
          </span>
          <br />
          <div style={{ lineHeight: '1.2' }} className="text-2xl py-5 sm:text-3xl font-bold font-sans text-gray-200 tracking-wider text-shadow-xl pb-5 mt-5 leading-[1.5]">
            IEEE Conference ID: 61846
            <br />
            (Hybrid Mode)
          </div>
        </h4>

        <div className="container py-10 mx-auto">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2 px-4">
              <h4 style={{ lineHeight: '1.3' }} className="text-white text-shadow-lg leading-[1.5] text-xl sm:text-2xl md:text-3xl font-bold font-Tahoma">
                <i>
                  All accepted and presented papers will be considered for
                  inclusion in IEEE Xplore (indexed by Scopus) subject to the
                  quality requirement.
                </i>
              </h4>
            </div>
            <div style={{ lineHeight: '1.4' }} className="w-full  lg:w-1/2 px-4">
              <h4 className="text-white font-semibold text-shadow-lg leading-[1.5] text-xl sm:text-2xl md:text-3xl font-sans">
                Important Dates
                <br />
                <span className="font-semibold text-xl sm:text-2xl md:text-3xl">
                  <div className="flex items-center justify-center">
                    <span className="font-semibold text-white text-xl sm:text-2xl md:text-3xl text-shadow-lg leading-[1.5]">
                      Full Paper Submission Deadline:&nbsp;
                    </span>
                    <div className="flex flex-col items-center">
                      <span className="font-semibold text-yellow-400 text-lg sm:text-xl md:text-2xl leading-[1.5]">
                        &nbsp;29 February, 2024
                      </span>
                      <span className="font-semibold text-white text-sm sm:text-lg md:text-xl leading-[1.5] line-through decoration-yellow-400">
                        31 January, 2024
                      </span>
                    </div>
                  </div>
                  Acceptance Notification Deadline: 10 April, 2024
                  <br />
                  Camera Ready Manuscript Deadline: 25 April, 2024
                  <br />
                  Conference Registration Deadline: 01 May, 2024
                  <br />
                  Conference Dates: 01-02 June, 2024
                </span>
              </h4>
            </div>
          </div>
        </div>
        <h4 style={{ lineHeight: '1.4' }} className="font-bold text-white text-shadow-lg leading-[1.5] text-2xl sm:text-3xl md:text-4xl pt-10 font-Segoe_UI">
          Organised by <br /> School of Electronics <br />
          Indian Institute of Information Technology Una <br />
          Himachal Pradesh - 177209
        </h4>
      </div>
    </div>
  );
};

export default ConferenceBanner;
