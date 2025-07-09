import React from "react";
import Background from "../assets/images/Back_image.jpeg"; // Correct import
import Timeline from "./Timeline";

const ConferenceBanner: React.FC = () => {
  return (
    <div
      className="bg-cover bg-center text-center -z-10 "
      style={{
        backgroundImage: `url(${Background})`,
      }}
    >
      <div className="bg-black bg-opacity-60 flex flex-col items-center justify-center py-10">
        <h4 className="text-gray-200 text-shadow-xl p-5">
          <span
            style={{ lineHeight: "1.4" }}
            className="font-bold font-[sans-serif] text-2xl sm:text-3xl md:text-4xl leading-[1.5]"
          >
            2<sup>nd</sup> INTERNATIONAL CONFERENCE <br /> ON <br /> INTEGRATED CIRCUITS,
            COMMUNICATION, AND COMPUTING SYSTEMS
            <br />
            (ICIC3S-2026)
          </span>
          <br />
          {/* <div
            style={{ lineHeight: "1.2" }}
            className="text-xl py-5 sm:text-2xl font-bold font-sans text-gray-200 tracking-wider text-shadow-xl pb-5 mt-5 leading-[1.5]"
          >
            IEEE Conference ID: ______
            <br />
            (Hybrid Mode)
          </div> */}
        </h4>

        <div className="container py-10 mx-auto">
          <div className="flex justify-center">
            {/* <div className="w-full lg:w-1/2 px-4">
              <h4 style={{ lineHeight: '1.3' }} className="text-white text-shadow-lg leading-[1.5] text-lg sm:text-xl md:text-2xl font-bold font-Tahoma">
                <i>
                  All accepted and presented papers will be considered for
                  inclusion in IEEE Xplore (indexed by Scopus) subject to the
                  quality requirement.
                </i>
              </h4>
            </div>
            <div className="w-full px-4">
              <h4 className="text-white font-semibold text-shadow-lg leading-[1.5] text-2xl sm:text-3xl md:text-3xl font-sans text-center mb-4">
                Important Dates
              </h4>
              <table className="min-w-full text-lg lg:text-xl bg-transparent border-collapse">
                <thead>
                  <tr>
                    <th className="text-white text-xl lg:text2xl font-[sans-serif] text-center py-2 px-4 border-b border-gray-600">
                      Event
                    </th>
                    <th className="text-white text-xl lg:text2xl font-[sans-serif] text-center py-2 px-4 border-b border-gray-600">
                      Deadline
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-white py-2 px-4 border-b border-gray-600">
                      Full Paper Submission Deadline
                    </td>
                    <td className="text-yellow-400 py-2 px-4 border-b border-gray-600">
                      29 February, 2024
                    </td>
                  </tr>
                  <tr>
                    <td className="text-white py-2 px-4 border-b border-gray-600">
                      Acceptance Notification Deadline
                    </td>
                    <td className="text-white py-2 px-4 border-b border-gray-600">
                      10 April, 2024
                    </td>
                  </tr>
                  <tr>
                    <td className="text-white py-2 px-4 border-b border-gray-600">
                      Camera Ready Manuscript Deadline
                    </td>
                    <td className="text-white py-2 px-4 border-b border-gray-600">
                      25 April, 2024
                    </td>
                  </tr>
                  <tr>
                    <td className="text-white py-2 px-4 border-b border-gray-600">
                      Conference Registration Deadline
                    </td>
                    <td className="text-white py-2 px-4 border-b border-gray-600">
                      01 May, 2024
                    </td>
                  </tr>
                  <tr>
                    <td className="text-white py-2 px-4 border-b border-gray-600">
                      Conference Dates
                    </td>
                    <td className="text-white py-2 px-4 border-b border-gray-600">
                      01-02 June, 2024
                    </td>
                  </tr>
                </tbody>
              </table>
              <Timeline />
            </div> */}
            <div className="container mx-auto">
              <h4 className="text-white font-semibold text-shadow-lg leading-[1.5] text-3xl sm:text-3xl md:text-4xl font-sans text-center mb-20 lg:mb-10">
                Important Dates
              </h4>
                <div className="w-full px-4">
                  <Timeline />
              </div>
            </div>
          </div>
        </div>
        <h4 style={{ lineHeight: '1.4' }} className="font-bold text-white text-shadow-lg leading-[1.5] text-xl sm:text-2xl md:text-2xl pt-10 font-Segoe_UI">
          Organised by <br /> School of Electronics <br />
          Indian Institute of Information Technology Una <br />
          Himachal Pradesh - 177209
        </h4>
      </div>
    </div>
  );
};

export default ConferenceBanner;
