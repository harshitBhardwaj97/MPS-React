import {motion} from 'framer-motion';
import {FaCloudSun, FaLaptop} from 'react-icons/fa';
import Section from '../components/Section.jsx';

const Facilities = () => {
  return (
    <motion.div
      className="max-w-6xl p-6 mx-auto my-10"
      initial={{opacity: 0}}
      animate={{opacity: 1, transition: {duration: 0.4}}}
      exit={{opacity: 0, transition: {duration: 0.2}}}
    >
      {/* Facilities Header Section */}
      <h1 className="mb-8 text-4xl font-extrabold text-center text-purpleDark">Our Facilities</h1>
      <p className="mb-10 text-lg text-gray-700 text-center">
        Mamta Public School is equipped with state-of-the-art facilities to provide a comfortable and productive
        learning environment for all our students.
      </p>

      {/* Facilities Sections */}
      <Section icon={<FaCloudSun className="text-yellow-500 text-2xl" />}
               title="Smart and Fully Air-Conditioned Classes">
        Our classrooms are equipped with advanced technology and are fully air-conditioned to provide a comfortable
        learning environment. In collaboration with Education Next, we run smart classes that enhance students
        understanding through interactive videos and visual aids. These tools are particularly effective at the primary
        and middle levels.
      </Section>

      <Section icon={<FaLaptop className="text-blue-500 text-2xl" />} title="Computer Lab">
        Students are introduced to computers starting from Class-KG. Our computer labs are outfitted with the latest
        technology, and we incorporate audiovisual tools like educational CDs and interactive software to enhance their
        learning journey. This approach ensures that students develop digital literacy skills from an early age in a
        dynamic and engaging environment.
      </Section>
    </motion.div>
  );
};

export default Facilities;
