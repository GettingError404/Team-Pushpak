import React from 'react';
import { Link } from 'react-router-dom';

const HeadDashboard: React.FC = () => {
  return (
    <div className="bg-slate-800 p-8 rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold text-white font-orbitron mb-6">Domain Head Panel</h2>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link to="/dashboard/projects" className="block">
          <div className="bg-slate-700/50 p-6 rounded-lg h-full transition-transform transform hover:scale-105 hover:bg-slate-700">
              <h3 className="font-bold text-lg text-cyan-400">Manage Projects</h3>
              <p className="text-slate-300 mt-2">Add new projects and update the status of ongoing work.</p>
          </div>
        </Link>
        <div className="bg-slate-700/50 p-6 rounded-lg">
            <h3 className="font-bold text-lg text-cyan-400">View Team Roster</h3>
            <p className="text-slate-300 mt-2">See a list of all members within your domain.</p>
        </div>
      </div>
    </div>
  );
};

export default HeadDashboard;