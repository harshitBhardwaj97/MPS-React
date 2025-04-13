import {IoCall} from 'react-icons/io5';
import {GrMail} from 'react-icons/gr';
import {AiFillFacebook, AiFillInstagram, AiFillYoutube} from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className="bg-purpleDark text-white w-full px-4 py-6">
      <div
        className="max-w-7xl mx-auto border-t border-b border-white py-6 flex flex-col md:flex-row gap-8 items-center justify-evenly">
        {/* ADDRESS Section */}
        <div className="text-center md:text-left">
          <h3 className="text-green-100 text-base font-semibold mb-2">ADDRESS</h3>
          <p className="text-sm text-gray-300 leading-snug">
            Shaheed Budh Ram Singh Marg, Lahore Apartment<br />
            Vasundhara Enclave, Delhi-110096
          </p>
        </div>

        {/* CONTACT Section */}
        <div className="text-center md:text-left">
          <h3 className="text-green-100 text-base font-semibold mb-2">CONTACT US</h3>
          <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-gray-200 mb-1">
            <IoCall size={18} className="text-green-100" />
            <p className="text-gray-200">09999026312</p>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-gray-200">
            <GrMail size={18} className="text-green-100" />
            <a
              href="mailto:mamtapublicofficial@gmail.com"
              className="hover:text-yellow-300 transition-colors"
            >
              mamtapublicofficial@gmail.com
            </a>
          </div>
        </div>

        {/* SOCIAL LINKS Section */}
        <div className="text-center md:text-left">
          <h3 className="text-green-100 text-base font-semibold mb-2">FIND US ON</h3>
          <ul className="space-y-1">
            <li
              className="flex items-center justify-center md:justify-start gap-2 text-sm hover:text-yellow-400 transition-all hover:scale-105">
              <AiFillYoutube size={18} className="text-gray-200" />
              <a
                href="https://youtube.com/@mpmiddleschool3394?si=RXLrPEzYp1nwUklZ"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                YouTube
              </a>
            </li>
            <li
              className="flex items-center justify-center md:justify-start gap-2 text-sm hover:text-blue-400 transition-all hover:scale-105">
              <AiFillFacebook size={18} className="text-gray-200" />
              <a
                href="https://www.facebook.com/profile.php?id=61551883315753&mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Facebook
              </a>
            </li>
            <li
              className="flex items-center justify-center md:justify-start gap-2 text-sm hover:text-[#c75d97] transition-all hover:scale-105">
              <AiFillInstagram size={18} className="text-gray-200" />
              <a
                href="https://instagram.com/mamtapublicschool90?igshid=OGQ5ZDc2ODk2ZA=="
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-xs text-gray-400 mt-4">
        © 2025 <span className="text-white font-medium">Mamta Public School</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
