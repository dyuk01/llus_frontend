// src/services/api/orderService.js
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

const orderService = {
  // Get all orders with optional pagination and filters
  getOrders: async (params = {}) => {
    try {
      const response = await axios.get(`${API_URL}/orders`, {
        headers: authHeader(),
        params,
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to fetch orders' };
    }
  },

  // Get a single order by ID
  getOrderById: async (id) => {
    try {
      const response = await axios.get(`${API_URL}/orders/${id}`, {
        headers: authHeader(),
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to fetch order details' };
    }
  },

  // Create a new order
  createOrder: async (orderData) => {
    try {
      const response = await axios.post(`${API_URL}/orders`, orderData, {
        headers: authHeader(),
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to create order' };
    }
  },

  // Update an existing order
  updateOrder: async (id, orderData) => {
    try {
      const response = await axios.put(`${API_URL}/orders/${id}`, orderData, {
        headers: authHeader(),
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to update order' };
    }
  },

  // Update order status
  updateOrderStatus: async (id, status) => {
    try {
      const response = await axios.patch(`${API_URL}/orders/${id}/status`, { status }, {
        headers: authHeader(),
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to update order status' };
    }
  },

  // Update shipping information
  updateShippingInfo: async (id, shippingInfo) => {
    try {
      const response = await axios.patch(`${API_URL}/orders/${id}/shipping`, shippingInfo, {
        headers: authHeader(),
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to update shipping information' };
    }
  },

  // Delete an order
  deleteOrder: async (id) => {
    try {
      const response = await axios.delete(`${API_URL}/orders/${id}`, {
        headers: authHeader(),
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to delete order' };
    }
  },
};

export default orderService;