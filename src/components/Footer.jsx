import React from "react";
import { IoCall } from "react-icons/io5";
import { GrMail } from "react-icons/gr";
import { AiFillYoutube, AiFillFacebook } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <footer className="flex flex-col items-center justify-center gap-2 p-2 mt-2 text-xl text-white bg-gray-600">
        <div className="footerTop border-b-[1px] text-sm md:text-lg border-t-[1px] border-white w-[80%] mx-auto flex flex-col gap-3 md:flex md:flex-row md:items-center md:justify-between m-3">
          <div className="text-center footerItem">
            <div className="font-bold footerHeading ">ADDRESS</div>
            <div className="footerContent">
              Shaheed Budh Ram Singh Marg, Lahore Apartment <br />
              Vasundhara Enclave, Delhi-110096
            </div>
          </div>
          <div className="text-center footerItem">
            <div className="font-bold footerHeading">CONTACT US</div>
            <div className="footerContent">
              <div className="flex items-center justify-center gap-4 footerContentItem">
                <IoCall size={20} /> 09999026312
              </div>
              <a href="mailto:mamtapublicofficial@gmail.com">
                <div className="flex items-center justify-center gap-2 footerContentItem">
                  <GrMail size={20} /> mamtapublicofficial@gmail.com
                </div>
              </a>
            </div>
          </div>
          <div className="text-center footerItem">
            <div className="font-bold footerHeading">FIND US ON</div>
            <div className="footerContent">
              <div className="flex items-center justify-center gap-2 duration-150 ease-in-out cursor-pointer footerContentItem hover:scale-105 hover:text-red-500">
                <AiFillYoutube size={20} />{" "}
                <a
                  href="https://www.youtube.com/@mpmiddleschool7692"
                  target="_blank"
                >
                  Youtube
                </a>
              </div>
              <div className="flex items-center justify-center gap-2 duration-150 ease-in-out cursor-pointer footerContentItem hover:scale-105 hover:text-blue-600">
                <AiFillFacebook size={20} />{" "}
                <a
                  href="https://www.facebook.com/profile.php?id=61551883315753&mibextid=ZbWKwL"
                  target="_blank"
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footerBottom w-[70%] mx-auto text-center text-sm md:text-lg">
          © 2023 Mamta Public School. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
