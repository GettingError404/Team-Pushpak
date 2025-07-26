import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary border-t border-cyan-300/10 mt-12">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="text-center text-sm text-light-gray">
          &copy; {currentYear} Team Pushpak. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
