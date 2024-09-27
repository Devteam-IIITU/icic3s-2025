import { events } from "../constants/constants";

const Timeline = () => {
  return (
    <div className="relative py-10">
      {/* Horizontal Timeline Line */}
      <div className="relative flex items-center justify-center">
        {/* Timeline Line */}
        <div className="absolute w-full h-1 bg-gray-400 top-1/2"></div>

        {/* Timeline Items */}
        {events.map((event, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center w-1/2 sm:w-1/4 lg:w-1/5 mx-2"
          >
            {/* Circle in the center */}
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-600 border-4 border-gray-200">
              <div
                className={`w-4 h-4 rounded-full ${
                  event.isHighlighted ? "bg-yellow-400" : "bg-white"
                }`}
              ></div>
            </div>

            {/* Event Content */}
            <div
              className={`absolute mt-4 ${
                index % 2 === 0 ? "top-full" : "bottom-full"
              } text-center`}
            >
              <p className="text-yellow-400 font-semibold text-xs sm:text-sm md:text-lg">
                {event.date}
              </p>
              <p className="text-white italic text-xs sm:text-sm md:text-base">
                {event.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
