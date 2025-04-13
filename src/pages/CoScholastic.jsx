import {motion} from 'framer-motion';
import {FaBrain, FaLeaf, FaRunning, FaTheaterMasks} from 'react-icons/fa';
import Section from '../components/Section.jsx';

const CoScholastic = () => {
  return (
    <motion.div
      className="max-w-6xl p-6 mx-auto my-10"
      initial={{opacity: 0}}
      animate={{opacity: 1, transition: {duration: 0.4}}}
      exit={{opacity: 0, transition: {duration: 0.2}}}
    >
      <h1 className="mb-8 text-4xl font-extrabold text-center text-purpleDark">
        Co-Scholastic Activities
      </h1>

      <p className="mb-10 text-lg text-gray-700 text-center">
        The school offers a broad spectrum of <strong>extra-curricular activities</strong> to encourage{' '}
        <strong>all-around development</strong>. These include{' '}
        <strong>Martial Arts, Mindful Yoga, Abacus, Skating, Dance</strong>, and more — ensuring that every
        student has the opportunity to explore their interests and talents.
      </p>

      <Section icon={<FaLeaf className="text-green-600 text-2xl" />} title="1. Mindful Activities">
        At Mamta Public School, students are introduced to the <strong>transformative power of meditation</strong>,
        practiced after every period to enhance <strong>focus and well-being</strong>. Techniques include:
        <ul className="list-disc ml-6 mt-2">
          <li><strong>Chanting Om</strong></li>
          <li><strong>Body rotation exercises</strong></li>
          <li><strong>Trataka (focused gazing)</strong></li>
          <li><strong>Deep breathing</strong></li>
        </ul>
        <br />
        Students also engage in <strong>environmental awareness projects</strong>, promoting responsibility and care for
        the planet.
      </Section>

      <Section icon={<FaBrain className="text-yellow-500 text-2xl" />} title="2. Multiple Intelligence Club">
        Our clubs nurture a wide range of intelligences:
        <ul className="list-disc ml-6 mt-2">
          <li><strong>Linguistic</strong> & <strong>Logical-Mathematical</strong></li>
          <li><strong>Spatial</strong>, <strong>Musical</strong>, <strong>Bodily-Kinesthetic</strong></li>
          <li><strong>Intrapersonal</strong>, <strong>Interpersonal</strong>, <strong>Naturalistic</strong></li>
        </ul>
        <br />
        These groups allow students to <strong>discover their strengths</strong> and grow based on their natural
        talents.
      </Section>

      <Section icon={<FaTheaterMasks className="text-pink-500 text-2xl" />} title="3. Dance and Drama">
        Mamta Public School uses <strong>dramatic arts and dance</strong> to spark <strong>creativity</strong> and
        enhance
        <strong> multisensory development</strong>. These experiences help students engage emotionally, physically,
        and intellectually, encouraging self-expression and artistic exploration.
      </Section>

      <Section icon={<FaRunning className="text-blue-500 text-2xl" />} title="4. Sports and Activities">
        Our <strong>Physical Education Program</strong> includes:
        <ul className="list-disc ml-6 mt-2">
          <li><strong>Annual sports events</strong> & <strong>inter-branch competitions</strong></li>
          <li><strong>Dedicated cricket practice area</strong> with expert coaching from a <strong>former Ranji Trophy
            player</strong></li>
        </ul>
        <br />
        These initiatives aim to:
        <ul className="list-disc ml-6 mt-2">
          <li>Promote <strong>physical fitness</strong></li>
          <li>Develop <strong>teamwork</strong>, <strong>leadership</strong>, and <strong>resilience</strong></li>
          <li>Foster a <strong>lifelong commitment to health</strong></li>
        </ul>
      </Section>
    </motion.div>
  );
};

export default CoScholastic;
