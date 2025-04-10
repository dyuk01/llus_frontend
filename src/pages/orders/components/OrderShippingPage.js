import React, { useState } from 'react';
import ResponsiveDashboardLayout from '../../../components/layout/ResponsiveDashboardLayout';
import OrderSearchFilter from './OrderSearchFilter';
import OrderTable from './OrderTable';
import OrderDetailModal from './OrderDetailModal';

const OrderShippingPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterOptions, setFilterOptions] = useState({
    status: 'all',
    date: 'all',
  });
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Dummy data for display purposes
  const orders = [
    {
      id: 'ORD-2023-1001',
      customerName: '김철수',
      orderDate: '2023-10-25',
      totalAmount: 45000,
      paymentMethod: '신용카드',
      status: 'pending',
      items: [
        { id: 1, name: '스마트폰 케이스', price: 15000, quantity: 1 },
        { id: 2, name: '보호필름', price: 10000, quantity: 3 }
      ],
      shipping: {
        address: '서울특별시 강남구 테헤란로 123',
        courier: '대한통운',
        trackingNumber: '',
        estimatedDelivery: ''
      }
    },
    {
      id: 'ORD-2023-1002',
      customerName: '이영희',
      orderDate: '2023-10-24',
      totalAmount: 67000,
      paymentMethod: '무통장입금',
      status: 'shipping',
      items: [
        { id: 3, name: '블루투스 이어폰', price: 67000, quantity: 1 }
      ],
      shipping: {
        address: '경기도 성남시 분당구 판교로 45',
        courier: 'CJ대한통운',
        trackingNumber: '631234567890',
        estimatedDelivery: '2023-10-27'
      }
    },
    {
      id: 'ORD-2023-1003',
      customerName: '박지민',
      orderDate: '2023-10-23',
      totalAmount: 128000,
      paymentMethod: '카카오페이',
      status: 'delivered',
      items: [
        { id: 4, name: '스마트워치', price: 128000, quantity: 1 }
      ],
      shipping: {
        address: '인천광역시 연수구 송도동 123-45',
        courier: '우체국택배',
        trackingNumber: '413143256780',
        estimatedDelivery: '2023-10-25'
      }
    }
  ];

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  const handleFilterChange = (filters) => {
    setFilterOptions(filters);
  };

  const handleOrderSelect = (order) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <ResponsiveDashboardLayout>
      <div className="order-shipping-container">
        <h1 className="page-title">주문/배송 관리</h1>
        
        <OrderSearchFilter 
          onSearchChange={handleSearchChange} 
          onFilterChange={handleFilterChange} 
        />
        
        <OrderTable 
          orders={orders} 
          onOrderSelect={handleOrderSelect} 
        />
        
        {isModalOpen && (
          <OrderDetailModal 
            order={selectedOrder} 
            onClose={handleCloseModal} 
          />
        )}
      </div>
    </ResponsiveDashboardLayout>
  );
};

export default OrderShippingPage;