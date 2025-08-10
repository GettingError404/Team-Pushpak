import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const navLinkClasses = "px-3 py-2 rounded-md text-sm font-medium text-neutral hover:bg-primary-dark transition-colors";
const activeNavLinkClasses = "bg-accent text-primary";

const Header: React.FC = () => {
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

  return (
    <nav className="bg-primary shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <NavLink to="/" className="text-neutral font-bold text-xl flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-2 text-accent" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.001 2C6.478 2 2.001 6.478 2.001 12C2.001 17.522 6.478 22 12.001 22C17.523 22 22.001 17.522 22.001 12C22.001 6.478 17.523 2 12.001 2ZM17.001 15.586L15.587 17L12.001 13.414L8.415 17L7.001 15.586L10.587 12L7.001 8.414L8.415 7L12.001 10.586L15.587 7L17.001 8.414L13.415 12L17.001 15.586Z" />
              </svg>
              Team Pushpak
            </NavLink>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `${navLinkClasses} ${isActive ? activeNavLinkClasses : ''}`
                  }
                >
                  {link.text}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-primary inline-flex items-center justify-center p-2 rounded-md text-accent hover:text-neutral hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-primary">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block ${navLinkClasses} ${isActive ? activeNavLinkClasses : ''}`
                }
              >
                {link.text}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;