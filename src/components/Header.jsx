import { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import tw from "twin.macro";
import { motion } from "framer-motion";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => {
  const Header = tw.header`
  bg-blue-900 text-white text-2xl flex justify-between p-2 items-center
  `;

  const [mobileNav, setMobileNav] = useState(false);

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
        {/* <Link to="about-us">
          <div className="mdMenuItem">About us</div>
        </Link> */}
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="flex items-center justify-center gap-2 mdMenuItem">
              About
              <ChevronDownIcon
                className="w-5 h-5 -mr-1 text-gray-400"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 w-56 p-2 mt-2 text-white duration-200 ease-in-out origin-top-right bg-blue-900 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/about-us"
                      className={classNames(
                        active
                          ? "bg-white text-blue-900 font-bold duration-200 ease-in-out rounded-md overflow-hidden"
                          : "text-white",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      About Us
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/chairman-desk"
                      className={classNames(
                        active
                          ? "bg-white text-blue-900 font-bold duration-200 ease-in-out rounded-md overflow-hidden"
                          : "text-white",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      Chairman's Desk
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/principal-desk"
                      className={classNames(
                        active
                          ? "bg-white text-blue-900 font-bold duration-200 ease-in-out rounded-md overflow-hidden"
                          : "text-white",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      Principal's Desk
                    </Link>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
        <Link to="contact-us">
          <div className="mdMenuItem">Contact us</div>
        </Link>
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="flex items-center justify-center gap-2 mdMenuItem">
              Admissions
              <ChevronDownIcon
                className="w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 w-56 p-2 mt-2 text-white duration-200 ease-in-out origin-top-right bg-blue-900 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="https://forms.gle/bpC8svxCPopQBKWx6"
                      className={classNames(
                        active
                          ? "bg-white text-blue-900 font-bold duration-200 ease-in-out rounded-md overflow-hidden"
                          : "text-white",
                        "block px-4 py-2 text-sm"
                      )}
                      target="_blank"
                    >
                      Enquiry Form
                    </Link>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
        <Link to="gallery">
          <div className="mdMenuItem">Gallery</div>
        </Link>
        <Link to="https://educoresystems.in" target={"_blank"}>
          <div className="mdMenuItem">ERP Login</div>
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
              <Link to="chairman-desk">
                <div className="transition-all duration-200 border-b-2 border-gray-300 cursor-pointer menuItem hover:text-yellow-400 hover:scale-105">
                  Chairman's Desk
                </div>
              </Link>
              <Link to="principal-desk">
                <div className="transition-all duration-200 border-b-2 border-gray-300 cursor-pointer menuItem hover:text-yellow-400 hover:scale-105">
                  Principal's Desk
                </div>
              </Link>
              <Link to="https://forms.gle/bpC8svxCPopQBKWx6" target="_blank">
                <div className="transition-all duration-200 border-b-2 border-gray-300 cursor-pointer menuItem hover:text-yellow-400 hover:scale-105">
                  Admission Enquiry Form
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
