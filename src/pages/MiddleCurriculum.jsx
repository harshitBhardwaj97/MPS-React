import {motion} from 'framer-motion';
import {FaLaptopCode, FaLightbulb} from 'react-icons/fa';

const MiddleSchoolCurriculum = () => {
  return (
    <motion.div
      className="max-w-5xl p-6 mx-auto my-10 bg-white border-2 border-purpleDark rounded-lg shadow-md"
      initial={{opacity: 0}}
      animate={{opacity: 1, transition: {duration: 0.4}}}
      exit={{opacity: 0, transition: {duration: 0.2}}}
    >
      <h1 className="mb-6 text-3xl font-bold text-center text-purpleDark">Middle School Curriculum</h1>

      <div className="space-y-6 text-lg text-gray-800 leading-relaxed">
        <div className="flex items-start gap-4">
          <FaLaptopCode className="text-2xl text-purple-600 mt-1" />
          <p>
            For classes <strong className="text-purple-700">VI to VIII</strong>, the curriculum is designed to foster
            <strong> innovation</strong>, particularly through the use of <strong>technology</strong> in education,
            while also nurturing <strong>scientific thinking</strong> and <strong>discipline</strong>.
          </p>
        </div>

        <div className="flex items-start gap-4">
          <FaLightbulb className="text-2xl text-yellow-500 mt-1" />
          <p>
            Emphasis is placed on the <strong className="text-purple-700">‘Design Thinking Approach’</strong>,
            encouraging students to <strong>challenge assumptions</strong>, redefine problems, and seek
            <strong> real-world solutions</strong>. This method promotes <strong>critical thinking</strong>, enabling
            students to brainstorm,
            learn, unlearn, relearn, ideate, and develop <strong>creative solutions</strong>.
          </p>
        </div>
      </div>

      <div className="mt-10 p-4 border-l-4 border-purple-400 bg-purple-50 rounded-md shadow-sm">
        <p className="italic text-purpleDark font-medium">
          “Middle school is where ideas take root, and minds begin to innovate.”
        </p>
      </div>
    </motion.div>
  );
};

export default MiddleSchoolCurriculum;
