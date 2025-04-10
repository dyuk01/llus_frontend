// src/services/api/customerService.js
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

const customerService = {
  // Get all customers with optional pagination and filters
  getCustomers: async (params = {}) => {
    try {
      const response = await axios.get(`${API_URL}/customers`, {
        headers: authHeader(),
        params,
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to fetch customers' };
    }
  },

  // Get a single customer by ID
  getCustomerById: async (id) => {
    try {
      const response = await axios.get(`${API_URL}/customers/${id}`, {
        headers: authHeader(),
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to fetch customer details' };
    }
  },

  // Create a new customer
  createCustomer: async (customerData) => {
    try {
      const response = await axios.post(`${API_URL}/customers`, customerData, {
        headers: authHeader(),
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to create customer' };
    }
  },

  // Update an existing customer
  updateCustomer: async (id, customerData) => {
    try {
      const response = await axios.put(`${API_URL}/customers/${id}`, customerData, {
        headers: authHeader(),
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to update customer' };
    }
  },

  // Delete a customer
  deleteCustomer: async (id) => {
    try {
      const response = await axios.delete(`${API_URL}/customers/${id}`, {
        headers: authHeader(),
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to delete customer' };
    }
  },

  // Get customer orders
  getCustomerOrders: async (customerId, params = {}) => {
    try {
      const response = await axios.get(`${API_URL}/customers/${customerId}/orders`, {
        headers: authHeader(),
        params,
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to fetch customer orders' };
    }
  },
};

export default customerService;