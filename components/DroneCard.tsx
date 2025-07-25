
import React from 'react';
import type { Drone } from '../types';

interface DroneCardProps {
  drone: Drone;
}

const DroneCard: React.FC<DroneCardProps> = ({ drone }) => {
  return (
    <div className="bg-slate-800 rounded-lg shadow-xl overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-cyan-500/20">
      <img className="h-64 w-full object-cover" src={drone.imageUrl} alt={drone.name} />
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white font-orbitron">{drone.name} <span className="text-sm font-light text-cyan-400 align-middle">({drone.type})</span></h3>
        <p className="mt-3 text-base text-slate-300">{drone.description}</p>
        <div className="mt-6 border-t border-slate-700 pt-4">
          <h4 className="text-lg font-semibold text-white">Key Specs:</h4>
          <ul className="mt-2 space-y-2 text-slate-400">
            <li className="flex items-center"><span className="font-bold text-slate-200 mr-2">Flight Time:</span> {drone.specs.flightTime}</li>
            <li className="flex items-center"><span className="font-bold text-slate-200 mr-2">Max Payload:</span> {drone.specs.payload}</li>
            <li className="flex items-center"><span className="font-bold text-slate-200 mr-2">Controller:</span> {drone.specs.controller}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DroneCard;
