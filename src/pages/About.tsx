import IIITuna from "../assets/images/home_img.jpg";
import SOE from "../assets/images/lab_image.jpeg";
import PlaceCard from "../constants/PlaceCard";
import { places } from "../constants/constants";

const About = () => {
  return (
    <div className="w-full mx-auto">
      <div id="about" className="about-company py-12 px-12">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between md:space-x-8">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <div className="detail">
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                  About IIIT Una
                </h3>
                <p className="text-justify text-black text-base sm:text-xl lg:text-2xl leading-relaxed pt-4 sm:px-4 lg:px-0">
                  IIIT Una is one of the 20 IIITs being set up, funded, and managed by the MoE, GoI, under the Public-Private Partnership (PPP) model in the year 2014, an Institute of National Importance (INI) by an Act of Parliament, GoI. The partners involved in setting up IIIT Una are the Ministry of Education, Government of India, the Government of Himachal Pradesh, HP Power Corporation Limited, and HP Power Transmission Corporation Limited. Admissions to the undergraduate programs at the Institute are made through the Joint Entrance Examination (JEE) Main.</p>
              </div>
            </div>
            <div className="mt-6 md:mt-0">
              <div className="image">
                <img
                  src={IIITuna}
                  alt="About"
                  className="w-80 sm:w-96 lg:w-[480px] h-auto max-h-full object-cover rounded-lg shadow-lg border-4 border-gray-300" // Added border
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-zinc-300">
        <div id="about" className="about-company py-12 px-12">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between md:space-x-8">
              <div className="md:w-1/2 mb-6 md:mb-0">
                <div className="detail">
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                    School of Electronics
                  </h3>
                  <p className="text-justify text-black text-base sm:text-xl lg:text-2xl leading-relaxed pt-4 sm:px-4 lg:px-0">
                    The School of Electronics, established in 2014, offers UG, PG, and PhD programs in Electronics and Communication Engineering. With expertise in VLSI, Communication, RF, Signal processing, it has various software like Cadence Virtuoso, Xilinx Vivado, MATLAB, CST Studio, alongside PCB design and fabrication facilities, fostering technical sessions and expert talks periodically.</p>
                </div>
              </div>
              <div className="mt-6 md:mt-0">
                <div className="image">
                  <img
                    src={SOE}
                    alt="About"
                    className="w-80 sm:w-96 lg:w-[480px] h-auto max-h-full object-cover rounded-lg shadow-lg border-4 border-gray-300" // Added border
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
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
