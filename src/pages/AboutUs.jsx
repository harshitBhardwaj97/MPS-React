import React from "react";
import About from "../components/About";
import { motion } from "framer-motion";

const AboutUs = () => {
  const aboutData = [
    {
      title: "Quality Education for Kids",
      content: `Our dedicated team of certified teachers is committed to providing
            the highest quality education. We understand the unique needs of
            young learners and tailor our approach to help them thrive
            academically and personally.`,

      bgColor: "bg-purple-400",
      borderColor: "border-purple-600",
    },
    {
      title: "Experienced Faculty",
      content: `Our experienced faculty members are passionate about guiding your
            child's educational journey. They are not just teachers but mentors,
            ensuring a holistic development that extends beyond the classroom.`,

      bgColor: "bg-yellow-400",
      borderColor: "border-yellow-600",
    },
    {
      title: "Technology-Enabled Smart Classrooms",
      content: `Mamta Public School embraces technology in education. Our smart
            classrooms are equipped with the latest educational tools and
            resources, providing an interactive and engaging learning
            experience.`,
      bgColor: "bg-green-400",
      borderColor: "border-green-600",
    },
    {
      title: "Enriching Activities",
      content: `We believe in the importance of a well-rounded education. Our school
            offers a wide range of indoor and outdoor sports activities, art
            programs, and more. We encourage students to explore their interests
            and passions.`,
      bgColor: "bg-red-400",
      borderColor: "border-red-600",
    },
    {
      title: "State-of-the-Art Infrastructure",
      content: `Our campus boasts state-of-the-art infrastructure, providing a safe
            and inspiring learning environment. We prioritize your child's
            comfort, safety, and overall well-being.`,
      bgColor: "bg-cyan-400",
      borderColor: "border-cyan-600",
    },
    {
      title: "Special Offer: First 100 Admissions - Free",
      content: `To celebrate the launch of our 2024 session, we are offering free
            admission to the first 100 students who join our school. Don't miss
            this incredible opportunity!`,
      bgColor: "bg-blue-400",
      borderColor: "border-blue-600",
    },
  ];

  return (
    <motion.div
      className="max-w-6xl p-2 mx-auto aboutpage"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
    >
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3 aboutUsContent">
        {aboutData.map((about) => (
          <About
            key={about.title}
            heading={about.title}
            content={about.content}
            bgColor={about.bgColor}
            borderColor={about.borderColor}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default AboutUs;
