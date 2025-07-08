import { committees } from '../constants/constants';
import Committee from '../constants/Committee';

const Org = () => {
  return (
    <div className="flex flex-col md:flex-row md:gap-6 p-6">
      <div className="flex-grow ">
        <Committee
          title={committees[0].title}
          advisors={committees[0].members.map(member => ({
            name: member.name,
            university: member.university || '' 
          }))}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-grow md:w-1/2 lg:w-3/5">
        {committees.slice(1).map((committee) => (
            <Committee
              title={committee.title}
              advisors={committee.members.map(member => ({
                name: member.name,
                university: member.university || '' 
              }))}
            />
        ))}
      </div>
    </div>
  );
};

export default Org;
