import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import AdminDashboard from '../components/dashboard/AdminDashboard';
import HeadDashboard from '../components/dashboard/HeadDashboard';
import MemberDashboard from '../components/dashboard/MemberDashboard';
import NewBeeDashboard from '../components/dashboard/NewBeeDashboard';

const DashboardPage: React.FC = () => {
  const { user } = useAuth();

  const renderDashboardByRole = () => {
    switch (user?.role) {
      case 'Admin':
        return <AdminDashboard />;
      case 'Head':
        return <HeadDashboard />;
      case 'Member':
        return <MemberDashboard />;
      case 'New Bee':
        return <NewBeeDashboard />;
      default:
        return <div className="text-center p-8">Invalid user role. Please contact an administrator.</div>;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-white font-orbitron mb-2">Dashboard</h1>
        <p className="text-lg text-cyan-400 mb-8">Welcome, {user?.role}!</p>
        <div>
            {renderDashboardByRole()}
        </div>
    </div>
  );
};

export default DashboardPage;
