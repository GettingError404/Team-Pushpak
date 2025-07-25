
import React from 'react';
import type { Technology } from '../types';

interface TechIconProps {
  tech: Technology;
}

const TechIcon: React.FC<TechIconProps> = ({ tech }) => {
  return (
    <div className="flex flex-col items-center p-4 bg-slate-900/50 rounded-lg transition-transform duration-300 transform hover:-translate-y-2">
      {tech.icon}
      <p className="mt-4 text-lg font-semibold text-slate-200">{tech.name}</p>
    </div>
  );
};

export default TechIcon;
