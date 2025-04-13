import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import {FaBookOpen, FaLightbulb} from 'react-icons/fa';

const Curriculum = () => {
  return (
    <motion.div
      className="max-w-6xl p-6 mx-auto my-10 bg-white border-2 border-purpleDark rounded-lg shadow-md"
      initial={{opacity: 0}}
      animate={{opacity: 1, transition: {duration: 0.4}}}
      exit={{opacity: 0, transition: {duration: 0.2}}}
    >
      <h1 className="mb-6 text-4xl font-extrabold text-center text-purpleDark">Curriculum</h1>

      <div className="mb-10 space-y-5 text-lg leading-relaxed text-gray-800">
        <p>
          <strong>Mamta Public School’s</strong> curriculum is crafted to support not just{' '}
          <strong>academic growth</strong>, but also students’ <strong>social, emotional, and physical</strong>{' '}
          development. It follows a <strong>holistic approach</strong>, combining <strong>hands-on
          learning</strong> with core academic excellence.
        </p>
        <p>
          Aligned with the <strong>National Education Policy (NEP)</strong>, the school emphasizes{' '}
          <strong>independent thinking</strong>, <strong>problem-solving</strong>, and <strong>reasoning
          skills</strong> to prepare learners for a fast-changing world.
        </p>
        <p>
          We promote a vision of modern education that celebrates <strong>global relevance</strong> while preserving
          <strong> India’s cultural values</strong>, fostering both <strong>progress and heritage</strong>.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Link to="/curriculum/primary-school">
          <motion.div
            whileHover={{scale: 1.03}}
            whileTap={{scale: 0.98}}
            className="p-6 text-center transition-all duration-200 ease-in-out border-2 border-purple-200
            rounded-xl cursor-pointer bg-white hover:shadow-xl hover:bg-purple-50"
          >
            <div className="flex justify-center mb-3">
              <FaBookOpen className="text-purpleDark text-3xl" />
            </div>
            <h2 className="text-xl font-semibold text-purpleDark mb-2">Primary School Curriculum</h2>
            <p className="text-gray-600">
              Focused on <strong>foundational learning</strong> with a blend of <strong>academics, play, and
              values</strong>.
            </p>
          </motion.div>
        </Link>

        <Link to="/curriculum/middle-school">
          <motion.div
            whileHover={{scale: 1.03}}
            whileTap={{scale: 0.98}}
            className="p-6 text-center transition-all duration-200 ease-in-out border-2 border-purple-200
            rounded-xl cursor-pointer bg-white hover:shadow-xl hover:bg-purple-50"
          >
            <div className="flex justify-center mb-3">
              <FaLightbulb className="text-yellow-500 text-3xl" />
            </div>
            <h2 className="text-xl font-semibold text-purpleDark mb-2">Middle School Curriculum</h2>
            <p className="text-gray-600">
              Emphasis on <strong>critical thinking</strong>, <strong>innovation</strong>, and <strong>academic
              excellence</strong>.
            </p>
          </motion.div>
        </Link>
      </div>
    </motion.div>
  );
};

export default Curriculum;
