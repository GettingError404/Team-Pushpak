import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-support text-support-light shadow-inner mt-12">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div className="text-center text-sm">
          &copy; {currentYear} Team Pushpak. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
