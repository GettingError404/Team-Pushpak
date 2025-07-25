import React from 'react';

const NewBeeDashboard: React.FC = () => {
  return (
    <div className="bg-slate-800 p-8 rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold text-white font-orbitron mb-6">Welcome to Team Pushpak!</h2>
      <p className="text-slate-300 mb-6">We're excited to have you on board. Here are some resources to get you started.</p>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-slate-700/50 p-6 rounded-lg">
            <h3 className="font-bold text-lg text-cyan-400">Onboarding Docs</h3>
            <p className="text-slate-300 mt-2">Review our team structure, goals, and coding standards.</p>
        </div>
        <div className="bg-slate-700/50 p-6 rounded-lg">
            <h3 className="font-bold text-lg text-cyan-400">Meet the Team</h3>
            <p className="text-slate-300 mt-2">Learn more about the leads and members you'll be working with.</p>
        </div>
      </div>
    </div>
  );
};

export default NewBeeDashboard;
