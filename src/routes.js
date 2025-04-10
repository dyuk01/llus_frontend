// src/routes.js
import React from 'react';
import DashboardPage from './pages/dashboard/DashboardPage';
import CustomerManagementPage from './pages/customer/CustomerManagementPage';
import OrderShippingPage from './pages/orders/components/OrderShippingPage';
import ProductManagementPage from './pages/products/ProjectManagementPage';
// import SalesStatisticsPage from './pages/statistics/SalesStatisticsPage';

const routes = [
  {
    path: '/dashboard',
    element: <DashboardPage />,
    name: '대시보드',
    icon: 'dashboard'
  },
  {
    path: '/customers',
    element: <CustomerManagementPage />,
    name: '고객 관리',
    icon: 'people'
  },
  {
    path: '/orders',
    element: <OrderShippingPage />,
    name: '주문/배송 관리',
    icon: 'shopping_cart'
  },
  {
    path: '/products',
    element: <ProductManagementPage />,
    name: '상품 관리',
    icon: 'inventory'
  }
  // {
  //   path: '/statistics',
  //   element: <SalesStatisticsPage />,
  //   name: '매출 통계',
  //   icon: 'bar_chart'
  // }
];

export default routes;