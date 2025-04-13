import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';

const AboutSection = () => {
  return (
    <motion.section
      className="max-w-6xl mx-auto mt-12 bg-white p-6 rounded-lg shadow-lg"
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1}}
    >
      {/* Section Heading */}
      <motion.div
        className="text-3xl font-semibold text-center uppercase text-purple-800 mb-6"
        initial={{opacity: 0, x: -100}}
        animate={{opacity: 1, x: 0}}
        transition={{ease: 'easeOut', duration: 1}}
      >
        About Mamta Public School
      </motion.div>

      {/* Section Content */}
      <motion.div
        className="aboutContent border-b-[1px] border-gray-300 pb-4 text-lg text-gray-700 italic"
        initial={{opacity: 0, x: -100}}
        animate={{opacity: 1, x: 0}}
        transition={{ease: 'easeOut', duration: 1}}
      >
        We believe that children are like soft, malleable clay, shaped and molded by the careful guidance of their
        teachers. In the early stages of life, every piece of knowledge imparted by a teacher acts like the masterful
        touch of a skilled potter.
        Just as raw marble reveals its hidden beauty only under the hands of a skilled polisher, education brings out a
        child&apos;s true potential. At Mamta Public School, our teachers are dedicated to shaping students into
        individuals who shine with knowledge, character, and confidence.
      </motion.div>

      {/* Mission and Vision Section */}
      <div className="aboutBottom mt-8">
        <div className="items-center justify-between block mb-4 text-center md:flex">
          <motion.div
            className="p-4 m-3 bg-purple-100 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
            initial={{opacity: 0, x: 100}}
            animate={{opacity: 1, x: 0}}
            transition={{ease: 'easeOut', duration: 1}}
            whileHover={{scale: 1.05}}
          >
            <div className="text-xl font-bold text-purple-800">Mission And Vision</div>
            <div className="text-md italic text-gray-600 mt-2">
              Our mission is to make every child Happy, Successful, and Joyful while building a strong character by
              strengthening values and practicing rituals. We are committed to bringing out every child&apos;s hidden,
              unlimited, inborn talents and potential to the maximum.
            </div>
          </motion.div>

          <motion.div
            className="p-4 m-3 bg-yellow-100 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
            initial={{opacity: 0, x: -100}}
            animate={{opacity: 1, x: 0}}
            transition={{ease: 'easeOut', duration: 1}}
            whileHover={{scale: 1.05}}
          >
            <div className="text-xl font-bold text-yellow-800">Motto</div>
            <div className="text-md italic text-gray-600 mt-2">
              Mamta Public School is a place where students thrive, not only in their academic achievements but also in
              their personal and social growth. It is a nurturing environment that fosters the development of
              well-rounded individuals, encouraging exploration, creativity, and lifelong learning.
            </div>
          </motion.div>
        </div>

        {/* Discover More Button */}
        <Link to="about-us">
          <div
            className="aboutButton w-[40%] mx-auto rounded-full text-center text-white
            bg-purple-600 cursor-pointer hover:bg-purple-400 hover:scale-105 transition ease-linear duration-150 px-6 py-3 mt-8 text-lg">
            Discover More About Us
          </div>
        </Link>
      </div>
    </motion.section>
  );
};

export default AboutSection;
