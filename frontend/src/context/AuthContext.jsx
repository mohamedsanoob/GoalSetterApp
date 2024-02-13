import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false || sessionStorage.getItem('accessToken')); // null represents the initial loading state
  const [loading, setLoading] = useState(false);
  const [goals,setGoals]=useState('')
  const [user,setUser]=useState('')


  // useEffect(() => {
  //   // Simulate an asynchronous check for authentication
  //   const checkAuthStatus = () => {
  //     const token = localStorage.getItem('token');
  //     setIsAuthenticated(!!token); // Update the authentication status based on the presence of a token
  //   };

  //   checkAuthStatus();
  // }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, loading, setLoading,goals,setGoals, user,setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;