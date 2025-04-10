// src/hooks/useOrders.js
import { useState, useEffect } from 'react';
import orderService from '../services/api/orderService';

export const useOrders = (searchParams = {}) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setLoading(true);
        const { data, count } = await orderService.getOrders(searchParams);
        setOrders(data);
        setTotalCount(count);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [searchParams]);

  const updateOrderStatus = async (id, status) => {
    try {
      const updatedOrder = await orderService.updateOrderStatus(id, status);
      setOrders((prev) =>
        prev.map((order) => (order.id === id ? updatedOrder : order))
      );
      return updatedOrder;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const getOrderDetails = async (id) => {
    try {
      return await orderService.getOrderDetails(id);
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  return {
    orders,
    loading,
    error,
    totalCount,
    updateOrderStatus,
    getOrderDetails,
  };
};