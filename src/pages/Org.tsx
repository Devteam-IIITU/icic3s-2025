import { committees } from '../constants/constants';
import Committee from '../constants/Committee';

const Org = () => {
  return (
    <div className="flex flex-col md:flex-row md:gap-6 p-8">
      <div className="flex-grow">
        <Committee
          title={committees[0].title}
          advisors={committees[0].members.map(member => ({
            name: member.name,
            university: member.university || ''
          }))}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-5 flex-grow md:w-2/3 lg:w-2/5">
        {committees.slice(1).map((committee) => (
          <Committee
            key={committee.title}
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
