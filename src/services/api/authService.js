// src/services/api/authService.js
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const authService = {
  // Login user
  login: async (email, password) => {
    try {
      const response = await axios.post(`${API_URL}/auth/login`, { email, password });
      if (response.data.token) {
        // Store both user data and token
        localStorage.setItem('user', JSON.stringify(response.data.user));
        localStorage.setItem('token', response.data.token);
      }
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Login failed' };
    }
  },
  
  // Register user
  register: async (userData) => {
    try {
      const response = await axios.post(`${API_URL}/auth/register`, userData);
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Registration failed' };
    }
  },

  // Logout user
  logout: () => {
    localStorage.removeItem('user');
  },

  // Get current user
  getCurrentUser: () => {
    const userStr = localStorage.getItem('user');
    if (!userStr) return null;
    return JSON.parse(userStr);
  },

  // Reset password request
  requestPasswordReset: async (email) => {
    try {
      const response = await axios.post(`${API_URL}/auth/reset-password-request`, { email });
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Password reset request failed' };
    }
  },

  // Reset password with token
  resetPassword: async (token, newPassword) => {
    try {
      const response = await axios.post(`${API_URL}/auth/reset-password`, { token, newPassword });
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Password reset failed' };
    }
  },
};

export default authService;