// src/services/api/statisticsService.js
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Helper to get auth header
const authHeader = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user && user.token) {
    return { Authorization: `Bearer ${user.token}` };
  } else {
    return {};
  }
};

const statisticsService = {
  // Get sales overview
  getSalesOverview: async (params = {}) => {
    try {
      const response = await axios.get(`${API_URL}/statistics/sales/overview`, {
        headers: authHeader(),
        params,
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to fetch sales overview' };
    }
  },

  // Get daily sales
  getDailySales: async (params = {}) => {
    try {
      const response = await axios.get(`${API_URL}/statistics/sales/daily`, {
        headers: authHeader(),
        params,
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to fetch daily sales' };
    }
  },

  // Get product sales
  getProductSales: async (params = {}) => {
    try {
      const response = await axios.get(`${API_URL}/statistics/sales/products`, {
        headers: authHeader(),
        params,
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to fetch product sales' };
    }
  },

  // Get sales chart data
  getSalesChartData: async (params = {}) => {
    try {
      const response = await axios.get(`${API_URL}/statistics/sales/chart`, {
        headers: authHeader(),
        params,
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to fetch sales chart data' };
    }
  },

  // Get customer statistics
  getCustomerStatistics: async (params = {}) => {
    try {
      const response = await axios.get(`${API_URL}/statistics/customers`, {
        headers: authHeader(),
        params,
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to fetch customer statistics' };
    }
  },

  // Get marketplace performance statistics
  getMarketplacePerformance: async (params = {}) => {
    try {
      const response = await axios.get(`${API_URL}/statistics/marketplaces`, {
        headers: authHeader(),
        params,
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to fetch marketplace statistics' };
    }
  },
};

export default statisticsService;