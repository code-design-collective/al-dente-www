import axios from 'axios';
import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  // State
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  const isLoggedIn = useMemo(() => !!user, [user]);

  // Methods
  const logIn = async (email, password) => {
    try {
      const response = await axios.post('/users/login/', { email, password });
      const { token, user } = response.data;

      sessionStorage.setItem('token', token);
      setToken(token);

      if (user.id) {
        setUser(user);
        navigate('/dashboard');
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  const logOut = () => {
    sessionStorage.removeItem('token');
    setUser(null);
    setToken(null);
  };

  useEffect(() => {
    const storedToken = sessionStorage.getItem('token');
    if (storedToken) {
      console.log('Token found in session storage');
      console.log(storedToken)
      // Todo verify the token with the backend here
      setToken(storedToken);
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