import React from 'react';

interface Advisor {
  name: string;
  university: string;
}

interface AdvisorySectionProps {
  title: string;
  advisors: Advisor[];
}

const AdvisorySection: React.FC<AdvisorySectionProps> = ({ title, advisors }) => {
  return (
    <div className="w-full lg:w-2/5 md:w-2/5 flex flex-col items-center p-2 bg-white rounded-lg shadow-lg mb-8">
      <button type="button" className="btn btn-success mb-4 px-4 py-2 text-green-700 font-bold text-lg lg:text-2xl md:text-xl rounded-md">
        {title}
      </button>
      <div className="overflow-x-auto w-full">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left w-1/2">Advisor Name</th>
              <th className="py-3 px-6 text-left w-1/2">University</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm font-medium">
            {advisors.map((advisor, index) => (
              <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 w-1/2 whitespace-normal">{advisor.name}</td>
                <td className="py-3 px-6 w-1/2 whitespace-normal">{advisor.university}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdvisorySection;
