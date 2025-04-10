// src/services/api/productService.js
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

const productService = {
  // Get all products with optional pagination and filters
  getProducts: async (params = {}) => {
    try {
      const response = await axios.get(`${API_URL}/products`, {
        headers: authHeader(),
        params,
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to fetch products' };
    }
  },

  // Get a single product by ID
  getProductById: async (id) => {
    try {
      const response = await axios.get(`${API_URL}/products/${id}`, {
        headers: authHeader(),
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to fetch product details' };
    }
  },

  // Create a new product
  createProduct: async (productData) => {
    try {
      // Handle form data for file uploads
      const formData = new FormData();
      
      // Append text fields
      Object.keys(productData).forEach(key => {
        if (key !== 'images' && productData[key] !== undefined) {
          formData.append(key, productData[key]);
        }
      });
      
      // Append images if any
      if (productData.images && productData.images.length) {
        productData.images.forEach(image => {
          formData.append('images', image);
        });
      }
      
      const response = await axios.post(`${API_URL}/products`, formData, {
        headers: {
          ...authHeader(),
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to create product' };
    }
  },

  // Update an existing product
  updateProduct: async (id, productData) => {
    try {
      // Handle form data for file uploads
      const formData = new FormData();
      
      // Append text fields
      Object.keys(productData).forEach(key => {
        if (key !== 'images' && productData[key] !== undefined) {
          formData.append(key, productData[key]);
        }
      });
      
      // Append images if any
      if (productData.images && productData.images.length) {
        productData.images.forEach(image => {
          formData.append('images', image);
        });
      }
      
      const response = await axios.put(`${API_URL}/products/${id}`, formData, {
        headers: {
          ...authHeader(),
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to update product' };
    }
  },

  // Delete a product
  deleteProduct: async (id) => {
    try {
      const response = await axios.delete(`${API_URL}/products/${id}`, {
        headers: authHeader(),
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to delete product' };
    }
  },

  // Post product to marketplace
  postToMarketplace: async (productId, marketplaceId) => {
    try {
      const response = await axios.post(`${API_URL}/products/${productId}/post`, { marketplaceId }, {
        headers: authHeader(),
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to post product to marketplace' };
    }
  },
};

export default productService;