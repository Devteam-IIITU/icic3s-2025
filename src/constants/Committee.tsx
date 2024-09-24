import React from "react";

interface Advisor {
  name: string;
  university: string;
}

interface CommitteeProps {
  title: string;
  advisors: Advisor[];
  width?: string;
}

const Committee: React.FC<CommitteeProps> = ({ title, advisors, width }) => {
  return (
    <div
      className={`w-full mr-5 lg:w-${width} md:w-${width} flex flex-col items-center p-2 pl-5 bg-white rounded-lg shadow-lg mb-8`}
    >
      <button
        type="button"
        className="btn btn-success text-center mb-4 px-4 py-2 text-green-700 font-bold text-lg lg:text-2xl md:text-xl rounded-md"
      >
        {title}
      </button>
      <ul className="text-gray-700 text-base md:text-lg lg:text-lg font-medium w-full">
        {advisors.map((advisor, index) => (
          <li key={index} className="mb-2">
            <span className="font-bold ">
              {advisor.name}
            </span>
            , {advisor.university}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Committee;
