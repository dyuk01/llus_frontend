// src/utils/formatters.js

// Format currency
export const formatCurrency = (amount, locale = 'ko-KR', currency = 'KRW') => {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };
  
  // Format date to YYYY-MM-DD
  export const formatDate = (date) => {
    if (!date) return '-';
    const d = new Date(date);
    return d.toISOString().split('T')[0];
  };
  
  // Format date with time YYYY-MM-DD HH:MM
  export const formatDateTime = (date) => {
    if (!date) return '-';
    const d = new Date(date);
    const dateStr = d.toISOString().split('T')[0];
    const timeStr = d.toTimeString().split(' ')[0].substring(0, 5);
    return `${dateStr} ${timeStr}`;
  };
  
  // Format phone number
  export const formatPhoneNumber = (phone) => {
    if (!phone) return '-';
    // Assuming Korean phone format (010-1234-5678)
    return phone.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
  };
  
  // Truncate text
  export const truncateText = (text, maxLength) => {
    if (!text) return '';
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + '...';
  };
  
  // Format order status
  export const formatOrderStatus = (status) => {
    const statusMap = {
      pending: '처리 중',
      processing: '처리 중',
      shipped: '배송 중',
      delivered: '배송 완료',
      cancelled: '취소됨',
      refunded: '환불됨',
    };
    
    return statusMap[status] || status;
  };
  
  // Get color for order status
  export const getStatusColor = (status) => {
    const colorMap = {
      pending: '#FFC107', // Yellow
      processing: '#2196F3', // Blue
      shipped: '#3F51B5', // Indigo
      delivered: '#4CAF50', // Green
      cancelled: '#F44336', // Red
      refunded: '#9C27B0', // Purple
    };
    
    return colorMap[status] || '#9E9E9E'; // Grey default
  };
  
  // Format number with thousands separator
  export const formatNumber = (num) => {
    if (num === null || num === undefined) return '0';
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };
  
  // Format percentage
  export const formatPercentage = (value, decimals = 1) => {
    if (value === null || value === undefined) return '0%';
    return `${value.toFixed(decimals)}%`;
  };
  
  // Format file size
  export const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };