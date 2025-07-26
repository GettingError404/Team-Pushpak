import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const navLinkClasses = "px-3 py-2 rounded-md text-sm font-medium text-secondary hover:text-white transition-colors relative";
const activeNavLinkClasses = "text-white";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: '/', text: 'Home' },
    { to: '/about', text: 'About' },
    { to: '/projects', text: 'Projects' },
    { to: '/achievements', text: 'Achievements' },
    { to: '/gallery', text: 'Gallery' },
    { to: '/team', text: 'Team' },
    { to: '/contact', text: 'Contact' },
  ];

  const menuVariants = {
    closed: { opacity: 0, height: 0, transition: { duration: 0.3 } },
    open: { opacity: 1, height: 'auto', transition: { duration: 0.3, staggerChildren: 0.05 } },
  };

  const linkVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 },
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="sticky top-0 z-50 bg-glass backdrop-blur-lg border-b border-cyan-300/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <NavLink to="/" className="text-secondary font-bold text-xl flex items-center group">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-2 text-accent group-hover:text-cyan-200 transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.001 2C6.478 2 2.001 6.478 2.001 12C2.001 17.522 6.478 22 12.001 22C17.523 22 22.001 17.522 22.001 12C22.001 6.478 17.523 2 12.001 2ZM17.001 15.586L15.587 17L12.001 13.414L8.415 17L7.001 15.586L10.587 12L7.001 8.414L8.415 7L12.001 10.586L15.587 7L17.001 8.414L13.415 12L17.001 15.586Z" />
              </svg>
              <span className="group-hover:text-white transition-colors">Team Pushpak</span>
            </NavLink>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) => `${navLinkClasses} ${isActive ? activeNavLinkClasses : ''}`}
                >
                  {({ isActive }) => (
                    <>
                      {link.text}
                      {isActive && (
                        <motion.div
                          className="absolute bottom-0 left-2 right-2 h-0.5 bg-accent"
                          layoutId="underline"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="relative z-10 inline-flex items-center justify-center p-2 w-10 h-10 rounded-md text-accent focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              <motion.div animate={isOpen ? "open" : "closed"} className="w-6 h-6 flex flex-col justify-around">
                 <motion.span
                    className="block h-0.5 w-6 bg-current"
                    variants={{ closed: { y: 0, rotate: 0 }, open: { y: 5, rotate: 45 } }}
                    transition={{ duration: 0.3 }}
                  ></motion.span>
                  <motion.span
                    className="block h-0.5 w-6 bg-current"
                    variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }}
                    transition={{ duration: 0.2 }}
                  ></motion.span>
                  <motion.span
                    className="block h-0.5 w-6 bg-current"
                    variants={{ closed: { y: 0, rotate: 0 }, open: { y: -5, rotate: -45 } }}
                    transition={{ duration: 0.3 }}
                  ></motion.span>
              </motion.div>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden"
            id="mobile-menu"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-glass backdrop-blur-lg">
              {navLinks.map((link) => (
                <motion.div key={link.to} variants={linkVariants}>
                  <NavLink
                    to={link.to}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `block text-base ${navLinkClasses} ${isActive ? activeNavLinkClasses : ''}`
                    }
                  >
                    {link.text}
                  </NavLink>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Header;
