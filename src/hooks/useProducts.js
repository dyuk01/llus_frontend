// src/hooks/useProducts.js
import { useState, useEffect } from 'react';
import productService from '../services/api/productService';

export const useProducts = (searchParams = {}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const { data, count } = await productService.getProducts(searchParams);
        setProducts(data);
        setTotalCount(count);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [searchParams]);

  const addProduct = async (productData) => {
    try {
      const newProduct = await productService.addProduct(productData);
      setProducts((prev) => [...prev, newProduct]);
      return newProduct;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const updateProduct = async (id, productData) => {
    try {
      const updatedProduct = await productService.updateProduct(id, productData);
      setProducts((prev) =>
        prev.map((product) => (product.id === id ? updatedProduct : product))
      );
      return updatedProduct;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const deleteProduct = async (id) => {
    try {
      await productService.deleteProduct(id);
      setProducts((prev) => prev.filter((product) => product.id !== id));
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  return {
    products,
    loading,
    error,
    totalCount,
    addProduct,
    updateProduct,
    deleteProduct,
  };
};