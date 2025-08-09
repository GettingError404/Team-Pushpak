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
              {/* <img src="src\images\logo.png" alt="Icon" className="h-14 w-14 rounded-full mr-3 object-cover group-hover:opacity-80 transition-opacity duration-200"/> */}
              {/* <img src={new URL('../images/logo.png', import.meta.url).href} /> */}
              <img
                src={new URL('../images/logo.png', import.meta.url).href}
                alt="Icon"
                className="h-14 w-14 rounded-full mr-3 object-cover group-hover:opacity-80 transition-opacity duration-200"
              />



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
