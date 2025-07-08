import React from "react";

interface TrackProps {
  title: string;
  topics: string[];
  image: string;
}

const TrackSection: React.FC<TrackProps> = ({ title, topics, image }) => {
  return (
    <div className="container p-10">
      <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        {title}
      </h3>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <h4 className="text-base md:text-xl lg:text-2xl font-semibold text-gray-700 mb-4">
            Topics
          </h4>
          <ul className="list-none pl-4 space-y-2">
            {topics.map((topic, index) => (
              <li
                key={index}
                className="text-base md:text-xl lg:text-2xl text-gray-600 pl-4 list-disc"
              >
                {topic}
              </li>
            ))}
          </ul>
        </div>
        <div className="md:w-1/2 flex justify-center pt-10 md:mt-0">
          <img
            src={image}
            alt={`Track: ${title}`}
            className="w-full h-60 sm:h-64 md:h-60 lg:h-[60vh] object-cover rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default TrackSection;
