import { committees } from '../constants/constants';

const Org = () => {
  return (
    <div className="flex flex-col md:flex-row md:gap-6 p-6">
      <div className="flex-grow mb-6 md:mb-0 bg-white rounded-lg shadow-lg p-4">
        <h2 className="text-2xl font-bold mb-4">{committees[0].title}</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">Name</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 text-sm font-medium">
              {committees[0].members.map((member, idx) => (
                <tr key={idx} className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-3 px-6">{member.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-grow">
        {committees.slice(1).map((committee, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-4">
            <h2 className="text-xl font-bold mb-2">{committee.title}</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto border-collapse">
                <thead>
                  <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                    <th className="py-3 px-3 text-left">Name</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 text-sm font-medium">
                  {committee.members.map((member, idx) => (
                    <tr key={idx} className="border-b border-gray-200 hover:bg-gray-100">
                      <td className="py-3 px-3">{member.name}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Org;
