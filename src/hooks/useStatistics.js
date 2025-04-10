// src/hooks/useStatistics.js
import { useState, useEffect } from 'react';
import statisticsService from '../services/api/statisticsService';

export const useStatistics = (dateRange = { startDate: null, endDate: null }) => {
  const [salesData, setSalesData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSalesStatistics = async () => {
      try {
        setLoading(true);
        const data = await statisticsService.getSalesStatistics(dateRange);
        setSalesData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSalesStatistics();
  }, [dateRange.startDate, dateRange.endDate]);

  const getDailySales = async (params) => {
    try {
      return await statisticsService.getDailySales(params);
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const getProductSales = async (params) => {
    try {
      return await statisticsService.getProductSales(params);
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  return {
    salesData,
    loading,
    error,
    getDailySales,
    getProductSales,
  };
};