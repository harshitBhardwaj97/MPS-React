import { React, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import tw from "twin.macro";
import { motion } from "framer-motion";

const Header = () => {
  const Header = tw.header`
  bg-red-700 text-white text-2xl flex justify-between p-2 items-center
  `;
  const [mobileNav, setMobileNav] = useState(false);

  //   console.log(mobileNav);
  return (
    <Header>
      <div className="menu-section logo">
        <Link to="/">
          <img
            src="/newLogo.jpg"
            alt="logo"
            width={60}
            className="duration-150 ease-linear cursor-pointer hover:translate-x-3"
          />
        </Link>
      </div>
      <div className="items-center justify-between hidden gap-4 text-2xl text-white menu-section md:flex">
        <Link to="about-us">
          <div className="duration-150 ease-linear cursor-pointer menu-link hover:text-orange-400 hover:scale-105">
            About us
          </div>
        </Link>
        <Link to="contact-us">
          <div className="duration-150 ease-linear cursor-pointer menu-link hover:text-orange-400 hover:scale-105">
            Contact us
          </div>
        </Link>
        <Link to="gallery">
          <div className="duration-150 ease-linear cursor-pointer menu-link hover:text-orange-400 hover:scale-105">
            Gallery
          </div>
        </Link>
        <Link to="https://educoresystems.in" target={"_blank"}>
          <div className="duration-150 ease-linear cursor-pointer menu-link hover:text-orange-400 hover:scale-105">
            ERP Login
          </div>
        </Link>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.25 } }}
        exit={{ opacity: 0, transition: { duration: 0.25 } }}
        className="relative block text-2xl transition-all duration-200 ease-linear cursor-pointer mobile-menu md:hidden"
        onClick={() => {
          setMobileNav(!mobileNav);
        }}
      >
        <AiOutlineMenu size={40} />
        {mobileNav && (
          <div className="fixed right-0 top-0 h-screen w-[50%] p-3 bg-blue-500 z-40 text-white text-lg ">
            <div className="closeIcon">
              <AiOutlineClose
                size={40}
                onClick={() => {
                  setMobileNav(!mobileNav);
                }}
              />
            </div>
            <div className="flex flex-col gap-4 mobileMenu">
              <Link to="about-us">
                <div className="transition-all duration-200 border-b-2 border-gray-300 cursor-pointer menuItem hover:text-yellow-400 hover:scale-105">
                  About us
                </div>
              </Link>
              <Link to="contact-us">
                <div className="transition-all duration-200 border-b-2 border-gray-300 cursor-pointer menuItem hover:text-yellow-400 hover:scale-105">
                  Contact us
                </div>
              </Link>
              <Link to="gallery">
                <div className="transition-all duration-200 border-b-2 border-gray-300 cursor-pointer menuItem hover:text-yellow-400 hover:scale-105">
                  Gallery
                </div>
              </Link>
              <Link to="https://educoresystems.in" target={"_blank"}>
                <div className="transition-all duration-200 border-b-2 border-gray-300 cursor-pointer menuItem hover:text-yellow-400 hover:scale-105">
                  ERP Login
                </div>
              </Link>
            </div>
          </div>
        )}
      </motion.div>
    </Header>
  );
};

export default Header;
