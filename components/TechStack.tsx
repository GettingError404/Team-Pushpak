
import React from 'react';
import { TECHNOLOGIES } from '../constants';
import TechIcon from './TechIcon';

const TechStack: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-4xl font-extrabold text-white sm:text-5xl font-orbitron">
          Our Technology Stack
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-400">
          The hardware and software powering our intelligent drones.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4 lg:gap-12">
        {TECHNOLOGIES.map((tech) => (
          <TechIcon key={tech.name} tech={tech} />
        ))}
      </div>
    </div>
  );
};

export default TechStack;
