import React from "react";

interface CardProps {
  Image: string;
  Name: string;
  Post: string;
}

const Card: React.FC<CardProps> = ({ Image, Name, Post }) => {
  return (
    <div className="lg:w-[400px] md:w-[400px] sm:w-[300px] w-[300px] p-4">
      <div className="bg-neutral-300 shadow-xl rounded-lg overflow-hidden text-center">
        <div className="p-4">
          <img
            src={Image}
            alt={Name}
            className="object-cover rounded-md 
                       lg:w-[368px] lg:h-[368px] 
                       md:w-[368px] md:h-[368px] 
                       sm:w-[268px] sm:h-[268px] 
                       w-[268px] h-[268px] 
                       max-w-full max-h-full"
          />
          <div className="mt-4">
            <h4 className="text-2xl font-semibold">{Name}</h4>
            <p className="text-gray-500 italic text-lg">{Post}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
