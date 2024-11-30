import React, { createContext, useContext, useState, useEffect } from 'react';
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token') || null);

  const logIn = (token) => {
    try {
      const decodedToken = jwtDecode(token);

      setUser({
        id: decodedToken.userId,
        email: decodedToken.email,
      });
      setToken(token);
      setLoggedIn(true);
      localStorage.setItem('token', token);
    } catch (error) {
      console.error('Error decoding token:', error);
    }
  };

  const logOut = () => {
    localStorage.removeItem('token');
    setUser(null);
    setLoggedIn(false);
    setToken(null);
  };

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      logIn(storedToken);
    }
  }, []);

  const authContextValue = {
    logIn,
    logOut,
    isLoggedIn,
    user,
    token,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
