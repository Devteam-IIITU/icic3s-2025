import TrackSection from "../components/TrackSection";
import { callPaper, tracksData } from "../constants/constants";
import Display from "../constants/Display";
import i1 from '../assets/images/ic.jpg';

const PaperCall = () => {
  return (
    <div className="w-full">
        <Display para={callPaper} image={i1}/>
      <div className="bg-zinc-300">
        {tracksData.map((track, index) => (
          <TrackSection
            key={index}
            title={track.title}
            topics={track.topics}
            image={track.image}
          />
        ))}
      </div>
    </div>
  );
};

export default PaperCall;
