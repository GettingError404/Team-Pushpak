import React from 'react';
import { useNavigate } from 'react-router-dom';
import PrimaryButton from './PrimaryButton';
import { motion } from 'framer-motion';

interface NavLink {
    path: string;
    label: string;
}

interface PageNavigationProps {
  prevLink?: NavLink;
  nextLink?: NavLink;
}

const PageNavigation = ({ prevLink, nextLink }: PageNavigationProps) => {
  const navigate = useNavigate();

  if (!prevLink && !nextLink) {
    return null;
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16 mb-12"
    >
      <div className="flex justify-between items-center w-full border-t border-cyan-300/10 pt-8">
        {prevLink ? (
          <PrimaryButton onClick={() => navigate(prevLink.path)}>
            {prevLink.label}
          </PrimaryButton>
        ) : (
          <div /> // Placeholder to maintain alignment
        )}

        {nextLink ? (
           <PrimaryButton onClick={() => navigate(nextLink.path)}>
            {nextLink.label}
          </PrimaryButton>
        ) : (
          <div /> // Placeholder
        )}
      </div>
    </motion.div>
  );
};

export default PageNavigation;
