// src/contexts/AuthContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';
import authService from '../services/api/authService';
import axios from 'axios'; 

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';
const AuthContext = createContext(null) ;

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const token = localStorage.getItem('token');
        if (token) {
          // For testing with dummy token
          if (token === 'dummyToken') {
            setCurrentUser({ name: 'Test User', email: 'example@example.com' });
          } 
          else {
            const user = await authService.getCurrentUser();
            setCurrentUser(user);
          }
        }
      } catch (err) {
        setError(err.message);
        localStorage.removeItem('token');
      } finally {
        setLoading(false);
      }
    };
  
    checkAuthStatus();
  }, []);

  // Fix: Properly define login as a const function inside the component
  const login = async (email, password) => {
    try {
      setLoading(true);
      const response = await axios.post(`${API_URL}/auth/login`, { email, password });
      if (response.data.token) {
        // Store both user data and token
        localStorage.setItem('user', JSON.stringify(response.data.user));
        localStorage.setItem('token', response.data.token);
      }
      setCurrentUser(response.data.user);
      return response.data;
    } catch (error) {
      setError(error.response?.data?.message || 'Login failed');
      throw error.response?.data || { message: 'Login failed' };
    } finally {
      setLoading(false);
    }
  };

  const signup = async (userData) => {
    try {
      setLoading(true);
      const { user, token } = await authService.signup(userData);
      localStorage.setItem('token', token);
      setCurrentUser(user);
      return user;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      await authService.logout();
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      setCurrentUser(null);
    } catch (err) {
      setError(err.message);
    }
  };

  const forgotPassword = async (email) => {
    try {
      setLoading(true);
      await authService.forgotPassword(email);
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const value = {
    currentUser,
    loading,
    error,
    login,
    signup,
    logout,
    forgotPassword,
    setError
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
