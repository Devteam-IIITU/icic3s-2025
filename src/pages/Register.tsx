const RegistrationFees = () => {
  return (
    <div className="flex flex-col w-full p-6 bg-white">
      <div className="mybox w-full overflow-auto">
        <p className="text-center mb-4 text-lg font-semibold">
          The registration fees for National/International Authors/Participants are as follows:
        </p>

        {/* Table for Registration Fees */}
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-4 border border-gray-300 text-left"></th>
                <th className="p-4 border border-gray-300 text-left"></th>
                <th className="p-4 border border-gray-300 text-center">IEEE Member</th>
                <th className="p-4 border border-gray-300 text-center">Non-IEEE Member</th>
                <th className="p-4 border border-gray-300 text-center">IEEE Member</th>
                <th className="p-4 border border-gray-300 text-center">Non-IEEE Member</th>
              </tr>
              <tr className="bg-gray-100">
                <th className="p-4 border border-gray-300">Sr. No.</th>
                <th className="p-4 border border-gray-300">Registration Type</th>
                <th className="p-4 border border-gray-300 text-center">National</th>
                <th className="p-4 border border-gray-300 text-center">National</th>
                <th className="p-4 border border-gray-300 text-center">International</th>
                <th className="p-4 border border-gray-300 text-center">International</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50">
                <td className="p-4 border border-gray-300 text-center">1</td>
                <td className="p-4 border border-gray-300 text-left">Corporate Professionals</td>
                <td className="p-4 border border-gray-300 text-center">₹ 8000</td>
                <td className="p-4 border border-gray-300 text-center">₹ 9600</td>
                <td className="p-4 border border-gray-300 text-center">$ 250</td>
                <td className="p-4 border border-gray-300 text-center">$ 300</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-4 border border-gray-300 text-center">2</td>
                <td className="p-4 border border-gray-300 text-left">Academician</td>
                <td className="p-4 border border-gray-300 text-center">₹ 7000</td>
                <td className="p-4 border border-gray-300 text-center">₹ 8400</td>
                <td className="p-4 border border-gray-300 text-center">$ 200</td>
                <td className="p-4 border border-gray-300 text-center">$ 250</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-4 border border-gray-300 text-center">3</td>
                <td className="p-4 border border-gray-300 text-left">Research Scholars/PG & UG Students</td>
                <td className="p-4 border border-gray-300 text-center">₹ 6000</td>
                <td className="p-4 border border-gray-300 text-center">₹ 7200</td>
                <td className="p-4 border border-gray-300 text-center">$ 150</td>
                <td className="p-4 border border-gray-300 text-center">$ 200</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-4 border border-gray-300 text-center">4</td>
                <td className="p-4 border border-gray-300 text-left">Participant</td>
                <td className="p-4 border border-gray-300 text-center">₹ 2000</td>
                <td className="p-4 border border-gray-300 text-center">₹ 2400</td>
                <td className="p-4 border border-gray-300 text-center">$ 100</td>
                <td className="p-4 border border-gray-300 text-center">$ 150</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Payment Details */}
      <h5 className="text-center font-bold mt-8 mb-4">Payment Details</h5>
      <div className="myBoxCont2 overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <tbody>
            <tr className="hover:bg-gray-50">
              <td className="p-4 border border-gray-300 font-semibold">Beneficiary Name</td>
              <td className="p-4 border border-gray-300">IIIT UNA CONFERENCE</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="p-4 border border-gray-300 font-semibold">Account Number</td>
              <td className="p-4 border border-gray-300">42402734488</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="p-4 border border-gray-300 font-semibold">IFSC Code</td>
              <td className="p-4 border border-gray-300">SBIN0064026</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="p-4 border border-gray-300 font-semibold">MICR Code</td>
              <td className="p-4 border border-gray-300">174002113</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="p-4 border border-gray-300 font-semibold">SWIFT Code</td>
              <td className="p-4 border border-gray-300">SBININBB277</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="p-4 border border-gray-300 font-semibold">Branch</td>
              <td className="p-4 border border-gray-300">IIIT UNA SALOH</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="p-4 border border-gray-300 font-semibold">Bank Name</td>
              <td className="p-4 border border-gray-300">State Bank of India</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RegistrationFees;
