import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import NoticeManagementPage from './pages/dashboard/NoticeManagementPage';
import ProjectManagementPage from './pages/dashboard/ProjectManagementPage';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 overflow-hidden flex flex-col">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute allowedRoles={['Admin', 'Head', 'Member', 'New Bee']}>
                <DashboardPage />
              </ProtectedRoute>
            } 
          />
           <Route 
            path="/dashboard/notices" 
            element={
              <ProtectedRoute allowedRoles={['Admin']}>
                <NoticeManagementPage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/dashboard/projects" 
            element={
              <ProtectedRoute allowedRoles={['Admin', 'Head']}>
                <ProjectManagementPage />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;