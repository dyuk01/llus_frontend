// src/pages/orders/OrderShippingPage.js
import React, { useState, useEffect } from 'react';
import Button from '../../components/common/Button';
import { PageContainer, Header, Title, Card } from './styles/OrderStyles';
import OrderSearchFilter from './components/OrderSearchFilter';
import OrderTable from './components/OrderTable';
import OrderDetailModal from './components/OrderDetailModal';
import { orderService } from '../../services/dummy/dummyData';

const OrderShippingPage = () => {
  const [orders, setOrders] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('전체');
  const [dateRange, setDateRange] = useState('전체');
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [activeTab, setActiveTab] = useState('info');
  
  const itemsPerPage = 10;
  
  // 주문 데이터 로드
  useEffect(() => {
    const loadOrders = async () => {
      try {
        const data = await orderService.getOrders();
        setOrders(data);
      } catch (error) {
        console.error('주문 데이터 로드 실패:', error);
      }
    };
    
    loadOrders();
  }, []);
  
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };
  
  const handleStatusFilterChange = (e) => {
    setStatusFilter(e.target.value);
    setCurrentPage(1);
  };
  
  const handleDateRangeChange = (e) => {
    setDateRange(e.target.value);
    setCurrentPage(1);
  };
  
  const openOrderDetail = (order) => {
    setSelectedOrder(order);
    setActiveTab('info');
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  const handleStatusUpdate = async (newStatus) => {
    try {
      await orderService.updateOrderStatus(selectedOrder.id, newStatus);
      
      // 주문 목록 업데이트
      const updatedOrders = orders.map(order => 
        order.id === selectedOrder.id 
          ? { ...order, status: newStatus } 
          : order
      );
      
      setOrders(updatedOrders);
      setSelectedOrder({ ...selectedOrder, status: newStatus });
      
      alert('주문 상태가 업데이트되었습니다.');
    } catch (error) {
      console.error('주문 상태 업데이트 실패:', error);
      alert('주문 상태 업데이트에 실패했습니다.');
    }
  };
  
  const handleShippingInfoUpdate = async (shippingInfo) => {
    try {
      // 실제 구현에서는 API 호출
      // 여기서는 로컬 상태만 업데이트
      const updatedOrders = orders.map(order => 
        order.id === selectedOrder.id 
          ? { 
              ...order, 
              shippingInfo: {
                ...order.shippingInfo,
                ...shippingInfo
              }
            } 
          : order
      );
      
      setOrders(updatedOrders);
      setSelectedOrder({
        ...selectedOrder,
        shippingInfo: {
          ...selectedOrder.shippingInfo,
          ...shippingInfo
        }
      });
      
      alert('배송 정보가 업데이트되었습니다.');
    } catch (error) {
      console.error('배송 정보 업데이트 실패:', error);
      alert('배송 정보 업데이트에 실패했습니다.');
    }
  };
  
  // 필터링된 주문 목록
  const filteredOrders = orders.filter(order => {
    // 상태 필터
    if (statusFilter !== '전체' && order.status !== statusFilter) {
      return false;
    }
    
    // 검색어 필터
    if (searchTerm && !order.id.toLowerCase().includes(searchTerm.toLowerCase()) && 
        !order.customerName.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    
    // 날짜 필터 (실제 구현에서는 날짜 비교 로직 추가)
    if (dateRange !== '전체') {
      // 여기에 날짜 필터링 로직 추가
    }
    
    return true;
  });
  
  // 페이지네이션
  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);
  const currentOrders = filteredOrders.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  
  return (
    <PageContainer>
      <Header>
        <Title>주문/배송 관리</Title>
        <Button variant="outline">주문 내역 엑셀 다운로드</Button>
      </Header>
      
      <Card>
        <OrderSearchFilter 
          searchTerm={searchTerm}
          statusFilter={statusFilter}
          dateRange={dateRange}
          handleSearchChange={handleSearchChange}
          handleStatusFilterChange={handleStatusFilterChange}
          handleDateRangeChange={handleDateRangeChange}
        />
        
        <OrderTable 
          orders={currentOrders}
          openOrderDetail={openOrderDetail}
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      </Card>
      
      <OrderDetailModal 
        isOpen={isModalOpen}
        order={selectedOrder}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onStatusUpdate={handleStatusUpdate}
        onShippingInfoUpdate={handleShippingInfoUpdate}
        closeModal={closeModal}
      />
    </PageContainer>
  );
};

export default OrderShippingPage;
