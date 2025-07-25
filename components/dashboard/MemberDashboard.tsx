import React from 'react';

const MemberDashboard: React.FC = () => {
  return (
    <div className="bg-slate-800 p-8 rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold text-white font-orbitron mb-6">Member Dashboard</h2>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-slate-700/50 p-6 rounded-lg">
            <h3 className="font-bold text-lg text-cyan-400">Current Projects</h3>
            <p className="text-slate-300 mt-2">View the projects you are contributing to and their current status.</p>
        </div>
        <div className="bg-slate-700/50 p-6 rounded-lg">
            <h3 className="font-bold text-lg text-cyan-400">Latest Notices</h3>
            <p className="text-slate-300 mt-2">Catch up on the latest announcements from team leadership.</p>
        </div>
      </div>
    </div>
  );
};

export default MemberDashboard;
