// src/hooks/useCustomers.js
import { useState, useEffect } from 'react';
import customerService from '../services/api/customerService';

export const useCustomers = (searchParams = {}) => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        setLoading(true);
        const { data, count } = await customerService.getCustomers(searchParams);
        setCustomers(data);
        setTotalCount(count);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCustomers();
  }, [searchParams]);

  const addCustomer = async (customerData) => {
    try {
      const newCustomer = await customerService.addCustomer(customerData);
      setCustomers((prev) => [...prev, newCustomer]);
      return newCustomer;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const updateCustomer = async (id, customerData) => {
    try {
      const updatedCustomer = await customerService.updateCustomer(id, customerData);
      setCustomers((prev) =>
        prev.map((customer) => (customer.id === id ? updatedCustomer : customer))
      );
      return updatedCustomer;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const deleteCustomer = async (id) => {
    try {
      await customerService.deleteCustomer(id);
      setCustomers((prev) => prev.filter((customer) => customer.id !== id));
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  return {
    customers,
    loading,
    error,
    totalCount,
    addCustomer,
    updateCustomer,
    deleteCustomer,
  };
};