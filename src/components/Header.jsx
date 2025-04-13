import {Fragment, useState} from 'react';
import {Link} from 'react-router-dom';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import {motion} from 'framer-motion';
import {Menu, Transition} from '@headlessui/react';
import {ChevronDownIcon} from '@heroicons/react/20/solid';
import tw from 'twin.macro';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Header = () => {
  const [mobileNav, setMobileNav] = useState(false);

  const HeaderWrapper = tw.header`
  flex justify-between items-center p-4 text-white text-2xl min-w-[320px]
`;

  const aboutDropdown = [
    {label: 'About Us', to: '/about-us'},
    {label: 'Chairman\'s Desk', to: '/chairman-desk'},
    {label: 'Principal\'s Desk', to: '/principal-desk'},
    {label: 'Facilities', to: '/facilities'}
  ];

  const admissionsDropdown = [
    {label: 'Admissions Criteria', to: '/admissions-criteria'},
    {label: 'Enquiry Form', to: 'https://forms.gle/bpC8svxCPopQBKWx6', external: true}
  ];

  const staticLinks = [
    {label: 'Contact Us', to: '/contact-us'},
    {label: 'Curriculum', to: '/curriculum'},
    {label: 'Co-Scholastic', to: '/co-scholastic'},
    {label: 'Gallery', to: '/gallery'}
  ];

  const renderDropdown = (label, items) => (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="flex items-center gap-2 mdMenuItem hover:text-purple-400">
          {label}
          <ChevronDownIcon className="w-5 h-5 text-gray-300" />
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
        <Menu.Items
          className="absolute right-0 z-10 w-56 p-2 mt-2 bg-purpleDark text-white rounded-md shadow-lg ring-1
           ring-black ring-opacity-5 focus:outline-none">
          {items.map(({label, to, external}, i) => (
            <Menu.Item key={i}>
              {({active}) =>
                external ? (
                  <a
                    href={to}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classNames(
                      active ? 'bg-white text-purple-600 font-bold rounded-md' : 'text-white',
                      'block px-4 py-2 text-sm transition-all duration-200'
                    )}
                  >
                    {label}
                  </a>
                ) : (
                  <Link
                    to={to}
                    className={classNames(
                      active ? 'bg-white text-purple-600 font-bold rounded-md' : 'text-white',
                      'block px-4 py-2 text-sm transition-all duration-200'
                    )}
                  >
                    {label}
                  </Link>
                )
              }
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );

  return (
    <HeaderWrapper>
      {/* Logo */}
      <Link to="/">
        <img
          src="/newLogo.jpg"
          alt="logo"
          width={60}
          className="cursor-pointer duration-150 ease-linear hover:translate-x-3"
        />
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-6 text-white">
        {renderDropdown('About', aboutDropdown)}
        {staticLinks.map(({label, to}) => (
          <Link key={label} to={to} className="mdMenuItem hover:text-purple-400">
            {label}
          </Link>
        ))}
        {renderDropdown('Admissions', admissionsDropdown)}
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1, transition: {duration: 0.25}}}
        exit={{opacity: 0, transition: {duration: 0.25}}}
        className="block md:hidden cursor-pointer"
        onClick={() => setMobileNav(!mobileNav)}
      >
        <AiOutlineMenu size={40} />
      </motion.div>

      {/* Mobile Nav Slide-in */}
      {mobileNav && (
        <div className="fixed top-0 right-0 z-50 h-full w-[70%] bg-purple-500 text-white p-6">
          <div className="flex justify-end">
            <AiOutlineClose size={30} className="cursor-pointer" onClick={() => setMobileNav(false)} />
          </div>
          <nav className="flex flex-col gap-4 mt-6 text-lg">
            {[...aboutDropdown, ...staticLinks, ...admissionsDropdown].map(({label, to, external}, i) =>
              external ? (
                <a
                  key={i}
                  href={to}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-b border-white pb-2 hover:text-yellow-300 transition-all"
                  onClick={() => setMobileNav(false)}
                >
                  {label}
                </a>
              ) : (
                <Link
                  key={i}
                  to={to}
                  className="border-b border-white pb-2 hover:text-yellow-300 transition-all"
                  onClick={() => setMobileNav(false)}
                >
                  {label}
                </Link>
              )
            )}
          </nav>
        </div>
      )}
    </HeaderWrapper>
  );
};

export default Header;
