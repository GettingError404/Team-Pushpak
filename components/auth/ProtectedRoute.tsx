import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { AuthenticatedUser } from '../../types';

interface ProtectedRouteProps {
  children: React.ReactElement;
  allowedRoles: AuthenticatedUser['role'][];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, allowedRoles }) => {
  const { user, loading } = useAuth();

  if (loading) {
    // You can add a loading spinner here while auth state is being checked
    return null; 
  }

  if (!user) {
    // User not authenticated, redirect to login page
    return <Navigate to="/login" replace />;
  }
  
  if (!allowedRoles.includes(user.role)) {
    // User's role is not authorized, redirect them to their default dashboard
    return <Navigate to="/dashboard" replace />;
  }

  // User is authenticated and authorized, render the child route
  return children;
};

export default ProtectedRoute;