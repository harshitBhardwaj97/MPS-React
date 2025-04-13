import {motion} from 'framer-motion';

const AdmissionsCriteria = () => {
  return (
    <motion.div
      className="max-w-6xl min-w-[320px] p-4 mx-auto"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0, transition: {duration: 0.1}}}
    >
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-purple-700">Mamta Public School</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mt-2">Admission Criteria</h2>
      </div>

      <div className="rounded-lg p-6 shadow-md bg-gradient-to-br from-white to-purple-50 border border-l-4 border-purpleDark
      ">
        <div className="mb-6 grid gap-2 md:grid-cols-2 text-xl">
          <p className="font-bold">
            School Code: <span className="font-normal text-purple-700">1002391</span>
          </p>
          <p className="font-bold">
            UDISE Code: <span className="font-normal text-purple-700">07030421408</span>
          </p>
          <p className="font-bold">
            Zone: <span className="font-normal text-purple-700">2</span>
          </p>
          <p className="font-bold">
            District: <span className="font-normal text-purple-700">East</span>
          </p>
        </div>

        <h3 className="text-2xl font-bold text-purple-700 mb-4">
          Admission Criteria for OPEN SEATS (2025-26)
        </h3>

        <div className="overflow-x-auto rounded-md">
          <table className="min-w-full text-lg text-gray-700 border border-purple-200 rounded-md">
            <thead className="bg-purple-100 text-purple-800">
            <tr>
              <th className="py-3 px-6 text-left font-semibold">S.No</th>
              <th className="py-3 px-6 text-left font-semibold">Criteria</th>
              <th className="py-3 px-6 text-left font-semibold">Marks</th>
            </tr>
            </thead>
            <tbody>
            <tr className="bg-white border-t border-gray-200">
              <td className="py-3 px-6">1</td>
              <td className="py-3 px-6">Neighbourhood (0-3 kms)</td>
              <td className="py-3 px-6 font-semibold text-purple-600">70</td>
            </tr>
            <tr className="bg-purple-50 border-t border-gray-200">
              <td className="py-3 px-6">2</td>
              <td className="py-3 px-6">Sibling</td>
              <td className="py-3 px-6 font-semibold text-purple-600">20</td>
            </tr>
            <tr className="bg-white border-t border-gray-200">
              <td className="py-3 px-6">3</td>
              <td className="py-3 px-6">Interstate Transfer Case</td>
              <td className="py-3 px-6 font-semibold text-purple-600">10</td>
            </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 text-xl font-bold text-purple-800 text-right">
          Total Marks: <span className="text-purple-600">100</span>
        </div>
      </div>
    </motion.div>
  );
};

export default AdmissionsCriteria;
