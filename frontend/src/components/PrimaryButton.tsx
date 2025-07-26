import React from 'react';
import { motion } from 'framer-motion';

interface PrimaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const PrimaryButton = ({ children, onClick, className = '', type = 'button' }: PrimaryButtonProps) => {
  return (
    <motion.button
      onClick={onClick}
      type={type}
      className={`relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-bold text-white rounded-lg group shadow-lg shadow-accent/20 ${className}`}
      whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(0, 255, 255, 0.5)' }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-accent to-highlight opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
      <span className="relative">{children}</span>
    </motion.button>
  );
};

export default PrimaryButton;
