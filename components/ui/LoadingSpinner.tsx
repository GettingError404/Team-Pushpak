import React from 'react';

const LoadingSpinner: React.FC<{ size?: 'sm' | 'md' | 'lg'}> = ({ size = 'md' }) => {
  const sizeClasses = {
      sm: 'w-8 h-8',
      md: 'w-12 h-12',
      lg: 'w-16 h-16',
  }
  return (
    <div className="flex justify-center items-center p-8">
      <div className={`border-4 border-dashed rounded-full animate-spin border-cyan-400 ${sizeClasses[size]}`}></div>
    </div>
  );
};

export default LoadingSpinner;
