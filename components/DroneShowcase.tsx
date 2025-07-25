
import React from 'react';
import { DRONES } from '../constants';
import DroneCard from './DroneCard';

const DroneShowcase: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-4xl font-extrabold text-white sm:text-5xl font-orbitron">
          Our Advanced Fleet
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-400">
          Meet the core of our research and development platforms.
        </p>
      </div>
      <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-x-12">
        {DRONES.map((drone) => (
          <DroneCard key={drone.name} drone={drone} />
        ))}
      </div>
    </div>
  );
};

export default DroneShowcase;
