import Display from "../constants/Display";
import IIITuna from "../assets/images/home_img.jpg";
import SOE from "../assets/images/lab_image.jpeg";
import PlaceCard from "../constants/PlaceCard";
import { about, places, soe } from "../constants/constants";

const About = () => {
  return (
    <div className="w-full mx-auto">
      <Display heading="About IIIT Una" para={about} image={IIITuna} />
      <div className="bg-zinc-300">
        <Display heading="School of Electronics" para={soe} image={SOE} />
      </div>
      <div className="flex justify-center items-center">
        <h2 className="text-green-700 text-4xl lg:text-5xl font-medium mx-auto m-8 p-4 border-4 border-green-600 rounded-lg ">
          Experience the Magic of Himachal
        </h2>
      </div>
      <div className="explore container w-full m-auto mb-10">
        <div className="flex flex-wrap">
          {places.map((place) => (
            <PlaceCard
              placeName={place.placeName}
              location={place.location}
              link={place.link}
              imageUrl={place.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
