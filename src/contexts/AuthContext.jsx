import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  const logIn = async (email, password) => {
    try {
      const response = await axios.post('/users/login/', { email, password });
      const { token, user } = response.data;
      console.log('response:', response.data);
      setUser(user);
      setToken(token);
      setLoggedIn(true);
      sessionStorage.setItem('token', token);
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  const logOut = () => {
    sessionStorage.removeItem('token');
    setUser(null);
    setLoggedIn(false);
    setToken(null);
  };

  useEffect(() => {
    const storedToken = sessionStorage.getItem('token');
    if (storedToken) {
      // Todo verify the token with the backend here
      setToken(storedToken);
      setLoggedIn(true);
      // TODO Fetch user data
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

export const useAuth = () => useContext(AuthContext);