import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import Dashboard from '../pages/Dashboard';

const ProtectedRoute = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <>
      {isAuthenticated ? <Dashboard /> : <Navigate to='/login' />}
    </>
  );
};

export default ProtectedRoute;