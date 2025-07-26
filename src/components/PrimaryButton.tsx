import React from 'react';

interface PrimaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ children, onClick, className = '', type = 'button' }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`py-2 px-4 rounded-lg font-semibold text-white bg-primary hover:bg-primary-dark transition-colors shadow-md hover:shadow-lg transform hover:scale-105 ${className}`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
