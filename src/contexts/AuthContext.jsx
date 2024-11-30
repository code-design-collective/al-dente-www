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
  const setSession = (token) => {
    sessionStorage.setItem('token', token);
    setToken(token);
  };

  const logIn = async (email, password) => {
    try {
      const response = await axios.post('/users/login/', { email, password });

      console.log('Response:', response);

      if (response.status !== 200) {
        alert('Invalid email or password');
        return;
      }

      const { token, user } = response.data;

      setSession(token);

      if (user.id) {
        setUser(user);
        navigate('/dashboard');
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  const logOut = () => {
    setUser(null);
    setSession(null);
    navigate('/login');
  };

  const signUp = async (email, password) => {
    try {
      const response = await axios.post('/users/signup/', { email, password });

      if (response.data.user.id) {
        alert('Sign up successful. Please log in');
        logOut();
        navigate('/login');
      }
    } catch (error) {
      alert(`Error - ${error.response.data?.email[0]}` || 'An error occurred. Unable to sign up');
    }
  };

  // Effects
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
    signUp,
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