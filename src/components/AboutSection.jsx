import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <>
      <motion.section
        className="max-w-6xl mx-auto mt-2 about "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <motion.div
          className="text-lg font-bold text-center uppercase md:text-xl aboutHeading"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          About Mamta Public School
        </motion.div>
        <motion.div
          className="aboutContent border-b-[1px] border-gray-500 pb-3 text-sm md:text-lg italic"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          M. P. Middle School, Vasundhara Enclave, East Delhi's mission is to
          provide a support system for our students with Learning Difficulties
          so as to help them cope with the rigours of the curriculum. We
          endeavour to build and restore self esteem and help pupils discover
          their strengths and potentials. The goal of all of this is to turn the
          students into a self-reliant individual with the attributes of a
          global citizen.
        </motion.div>
        <div className="aboutBottom">
          <div className="items-center justify-between block mb-2 text-center md:flex">
            <motion.div
              className="p-3 m-2 vision"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ease: "easeOut", duration: 1 }}
              whileHover={{ opacity: 1, x: 0 }}
            >
              <div className="text-lg font-bold md:text-xl aboutBoxHeading">
                Vision and Mission
              </div>
              <div className="text-sm italic aboutBoxContent md:text-lg">
                Our focus is to impart sound education with knowledge to
                inculcate the habit of co-operation,discipline, self confidence,
                regularity and punctuality, so as to train our students to
                become dutiful and valuable citizens of motherland. Our object
                is to discover and develop respect for Indian culture through
                the development of 3Hs: Head, Heart and Hand.
              </div>
            </motion.div>
          </div>
          <Link to="about-us">
            <div className="aboutButton border-[1px] w-[30%] mx-auto border-black text-center rounded-full hover:bg-blue-900 hover:text-white/70 hover:scale-105 ease-linear duration-150 px-2 py-4 text-sm md:text-lg">
              Discover More About Us
            </div>
          </Link>
        </div>
      </motion.section>
    </>
  );
};

export default AboutSection;
