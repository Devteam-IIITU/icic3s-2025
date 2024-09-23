import AdvisorySection from "../constants/Committee";
import {
  advisorsInternational,
  advisorsNational,
} from "../constants/constants";

const Advisory: React.FC = () => {
  return (
    <div className="container flex flex-col lg:flex-row md:flex-row p-4 lg:p-10 md:p-8 justify-around">
      <AdvisorySection
        title="INTERNATIONAL ADVISORY"
        advisors={advisorsInternational}
      />
      <AdvisorySection title="NATIONAL ADVISORY" advisors={advisorsNational} />
    </div>
  );
};

export default Advisory;
