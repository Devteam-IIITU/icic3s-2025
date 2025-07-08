import Committee from "../constants/Committee";
import { technicalAdvisery } from "../constants/constants";

const Technical: React.FC = () => {
    const half = Math.ceil(technicalAdvisery.length / 2);
    const leftAdvisors = technicalAdvisery.slice(0, half);
    const rightAdvisors = technicalAdvisery.slice(half);

    return (
        <div className="container flex flex-col md:flex-row lg:flex-row p-4 lg:p-10 md:p-10 justify-around gap-6">
            <Committee
                width="full md:w-1/2"
                title="TECHNICAL ADVISORY"
                advisors={leftAdvisors}
            />
            <Committee
                width="full md:w-1/2"
                title="TECHNICAL ADVISORY"
                advisors={rightAdvisors}
            />
        </div>
    );
};

export default Technical;
