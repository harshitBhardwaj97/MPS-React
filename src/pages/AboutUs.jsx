import {motion} from 'framer-motion';
import {FaChalkboardTeacher, FaLaptop, FaPaintBrush, FaStar, FaUniversity} from 'react-icons/fa';
import About from '../components/About';
import {Link} from 'react-router-dom';

const AboutUs = () => {
  const aboutData = [
    {
      title: 'Quality Education for Kids',
      content: `Our dedicated team of certified teachers is committed to providing the highest quality education. 
      We understand the unique needs of young learners and tailor our approach to help them thrive academically and personally.`,
      bgColor: 'bg-purple-500',
      borderColor: 'border-purple-600',
      icon: <FaChalkboardTeacher className="text-3xl text-white" />
    },
    {
      title: 'Experienced Faculty',
      content: `Our experienced faculty members are passionate about guiding your child's educational journey. 
      They are not just teachers but mentors, ensuring a holistic development that extends beyond the classroom.`,
      bgColor: 'bg-yellow-500',
      borderColor: 'border-yellow-600',
      icon: <FaUniversity className="text-3xl text-white" />
    },
    {
      title: 'Technology-Enabled Smart Classrooms',
      content: `Mamta Public School embraces technology in education. Our smart classrooms are equipped with the latest educational 
      tools and resources, providing an interactive and engaging learning experience.`,
      bgColor: 'bg-green-500',
      borderColor: 'border-green-600',
      icon: <FaLaptop className="text-3xl text-white" />
    },
    {
      title: 'Enriching Activities',
      content: `We believe in the importance of a well-rounded education. Our school offers a wide range of indoor 
      and outdoor sports activities, art programs, and more. We encourage students to explore their interests and passions.`,
      bgColor: 'bg-red-500',
      borderColor: 'border-red-600',
      icon: <FaPaintBrush className="text-3xl text-white" />
    },
    {
      title: 'State-of-the-Art Infrastructure',
      content: `Our campus boasts state-of-the-art infrastructure, providing a safe and inspiring learning environment. 
      We prioritize your child's comfort, safety, and overall well-being.`,
      bgColor: 'bg-cyan-500',
      borderColor: 'border-cyan-600',
      icon: <FaUniversity className="text-3xl text-white" />
    },
    {
      title: 'Special Offer: First 100 Admissions - Free',
      content: `To celebrate the launch of our 2025 session, we are offering free admission to the first 100 students who 
      join our school. Don't miss this incredible opportunity!`,
      bgColor: 'bg-blue-500',
      borderColor: 'border-blue-600',
      icon: <FaStar className="text-3xl text-white" />
    }
  ];

  return (
    <motion.div
      className="max-w-6xl px-6 py-10 mx-auto bg-white rounded-lg shadow-xl"
      initial={{opacity: 0}}
      animate={{opacity: 1, transition: {duration: 0.5}}}
      exit={{opacity: 0, transition: {duration: 0.2}}}
    >
      {/* About Header Section */}
      <div className="mb-8 text-center">
        <h2 className="text-4xl font-semibold text-purple-800">About Us</h2>
        <p className="mt-4 text-xl text-gray-700">
          Mamta Public School is a co-educational English medium institution established with the noble motto of
          &quot;Education for All.&quot; The school aims to nurture responsible, honest citizens of India by providing a
          well-rounded education that emphasizes moral, intellectual, social, and physical development.
        </p>
        <p className="mt-4 text-lg text-gray-600 italic">
          A school serves as the foundation for a child&apos;s journey to face life&apos;s challenges. At Mamta Public
          School,
          special focus is placed on character building and upholding high ethical standards within the school
          community. We believe that children are like soft, malleable clay, shaped and molded by the careful guidance
          of their teachers.
        </p>
      </div>

      {/* About Content Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {aboutData.map((about, index) => (
          <About
            key={index}
            heading={about.title}
            content={about.content}
            bgColor={about.bgColor}
            borderColor={about.borderColor}
            icon={about.icon}
          />
        ))}
      </div>

      {/* Why Choose Section */}
      <div className="mt-12 p-6 bg-gray-100 rounded-lg text-center shadow-md">
        <h3 className="text-2xl font-semibold text-purple-700">Why Choose Mamta Public School?</h3>
        <p className="mt-4 text-lg text-gray-600">
          At Mamta Public School, we believe in providing a nurturing and inspiring environment that fosters academic
          excellence, personal growth, and holistic development.
        </p>

        {/* Link to Facilities Section */}
        <Link to="/facilities" className="mt-6 inline-block text-xl font-bold text-purple-600
        hover:text-purple-800 ease-in duration-100">
          Explore Our Facilities
        </Link>
      </div>
    </motion.div>
  );
};

export default AboutUs;
