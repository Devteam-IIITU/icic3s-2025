import Committee from "../constants/Committee";
import { advisorsInternational, advisorsNational } from "../constants/constants";

const Advisory: React.FC = () => {
  return (
    <div className="container flex flex-col lg:flex-row md:flex-row p-4 lg:p-10 md:p-10 justify-around">
      <Committee
        width="2/5"
        title="INTERNATIONAL ADVISORY"
        advisors={advisorsInternational}
      />
      <Committee
        width="2/5"
        title="NATIONAL ADVISORY"
        advisors={advisorsNational}
      />
    </div>
  );
};

export default Advisory;
