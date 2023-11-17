import React from "react";
import AboutSection from "../components/AboutSection";
import HomePageCarousel from "../components/HomePageCarousel";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <motion.div
        className="homepage"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.1 } }}
      >
        <HomePageCarousel />
        <AboutSection />
      </motion.div>
    </>
  );
};

export default Home;
