import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard: React.FC = () => {
  return (
    <div className="bg-slate-800 p-8 rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold text-white font-orbitron mb-6">Admin Control Panel</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-slate-700/50 p-6 rounded-lg transition-transform transform hover:scale-105 hover:bg-slate-700">
            <h3 className="font-bold text-lg text-cyan-400">Manage Users</h3>
            <p className="text-slate-300 mt-2">Create, edit, and assign roles to team members.</p>
        </div>
        <Link to="/dashboard/notices" className="block">
            <div className="bg-slate-700/50 p-6 rounded-lg h-full transition-transform transform hover:scale-105 hover:bg-slate-700">
                <h3 className="font-bold text-lg text-cyan-400">Manage Notices</h3>
                <p className="text-slate-300 mt-2">Post, update, or remove announcements from the notice board.</p>
            </div>
        </Link>
        <Link to="/dashboard/projects" className="block">
            <div className="bg-slate-700/50 p-6 rounded-lg h-full transition-transform transform hover:scale-105 hover:bg-slate-700">
                <h3 className="font-bold text-lg text-cyan-400">Manage Projects</h3>
                <p className="text-slate-300 mt-2">Add new projects, update their status, and manage details.</p>
            </div>
        </Link>
      </div>
    </div>
  );
};

export default AdminDashboard;