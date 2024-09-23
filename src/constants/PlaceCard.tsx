import React from "react";

interface PlaceCardProps {
  placeName: string;
  location: string;
  imageUrl: string;
  link: string;
}

const PlaceCard: React.FC<PlaceCardProps> = ({
  placeName,
  location,
  imageUrl,
  link,
}) => {
  return (
    <div className="  w-full md:w-1/2 lg:w-1/3 h-auto p-4">
      <div
        className="relative bg-cover bg-center h-52 md:h-72 rounded-3xl shadow-lg transform transition duration-300 hover:scale-105"
        style={{
          backgroundImage: `url('${imageUrl}')`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-white p-2 md:p-4 rounded-3xl">
          <h3 className="text-2xl font-[sans-serif] md:text-3xl lg:text-4xl mb-2">{placeName}</h3>
          <h4 className="text-2xl font-[sans-serif] md:text-3xl lg:text-4xl ">{location}</h4>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 text-red-400 font-normal text-base font-[sans-serif] md:text-lg lg:text-xl border-b-2 border-red-400 hover:text-red-600 hover:border-red-600 transition duration-300"
          >
            View More
          </a>
        </div>
      </div>
    </div>
  );
};

export default PlaceCard;
