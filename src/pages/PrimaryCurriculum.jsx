import {motion} from 'framer-motion';
import {FaBookOpen, FaLightbulb, FaUserGraduate} from 'react-icons/fa';

const PrimaryCurriculum = () => {
  return (
    <motion.div
      className="max-w-5xl p-6 mx-auto my-10 bg-white border-2 border-purpleDark rounded-lg shadow-md"
      initial={{opacity: 0}}
      animate={{opacity: 1, transition: {duration: 0.4}}}
      exit={{opacity: 0, transition: {duration: 0.2}}}
    >
      <h1 className="mb-6 text-3xl font-bold text-center text-purpleDark">
        Primary School Curriculum
      </h1>

      <div className="space-y-6 text-lg text-gray-800 leading-relaxed">
        <div className="flex items-start gap-4">
          <FaBookOpen className="text-2xl text-purple-600 mt-1" />
          <p>
            At <strong className="text-purple-700">Mamta Public School</strong>, our Primary Curriculum is thoughtfully
            designed to provide a strong foundation for young learners. We focus on nurturing not only academic growth
            but also the development of <strong>critical life skills</strong>.
          </p>
        </div>

        <div className="flex items-start gap-4">
          <FaLightbulb className="text-2xl text-yellow-500 mt-1" />
          <p>
            From <strong>Nursery to Class III</strong>, we follow a <strong className="text-purple-700">Thematic
            Teaching-Learning Approach</strong>,
            integrating concepts across subjects into engaging themes. This helps students make
            <strong> meaningful connections</strong> and apply their learning in <strong>real-life contexts</strong>.
          </p>
        </div>

        <div className="flex items-start gap-4">
          <FaLightbulb className="text-2xl text-yellow-500 mt-1" />
          <p>
            For <strong>Classes IV and V</strong>, the curriculum emphasizes <strong>innovation and scientific
            thinking</strong>.
            Students explore the <strong className="text-purple-700">‘Design Thinking Approach’</strong> — encouraging
            creativity,
            curiosity, and real-world problem-solving.
          </p>
        </div>

        <div className="flex items-start gap-4">
          <FaUserGraduate className="text-2xl text-green-600 mt-1" />
          <p>
            <strong>Student portfolios</strong> are maintained to track growth, celebrate achievements, and create a
            compact record of progress in academics and co-scholastic areas.
          </p>
        </div>

        <p>
          Our goal is to develop <strong>confident, inquisitive, and well-rounded learners</strong> who are ready for
          the journey ahead — academically, emotionally, and socially.
        </p>
      </div>

      <div className="mt-10 p-4 border-l-4 border-purple-400 bg-purple-50 rounded-md shadow-sm">
        <p className="italic text-purpleDark font-medium">
          “A strong foundation in the early years lays the path for a lifetime of learning.”
        </p>
      </div>
    </motion.div>
  );
};

export default PrimaryCurriculum;
