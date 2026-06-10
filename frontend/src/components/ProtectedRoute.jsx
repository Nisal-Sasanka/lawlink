import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const ProtectedRoute = ({ role, allowedRoles }) => {
  // In a real app, this would check actual auth state
  const isAuthenticated = !!role;
  const isAuthorized = isAuthenticated && allowedRoles.includes(role);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (!isAuthorized) {
    // Redirect to their respective dashboard if they try to access unauthorized routes
    if (role === 'admin') return <Navigate to="/admin" replace />;
    if (role === 'lawyer') return <Navigate to="/lawyer" replace />;
    if (role === 'user') return <Navigate to="/user" replace />;
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar role={role} />
      <main className="flex-1 flex flex-col">
        <Navbar role={role} />
        <div className="flex-1 p-xl overflow-y-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default ProtectedRoute;
