// src/pages/orders/components/OrderTable.js
import React from 'react';
import { 
  Table, 
  Th, 
  Td, 
  ActionButton, 
  StatusBadge,
  Pagination,
  PageButton
} from '../styles/OrderStyles';

const OrderTable = ({ 
  orders, 
  openOrderDetail,
  currentPage,
  totalPages,
  setCurrentPage
}) => {
  return (
    <>
      <Table>
        <thead>
          <tr>
            <Th>주문번호</Th>
            <Th>주문일자</Th>
            <Th>고객명</Th>
            <Th>주문금액</Th>
            <Th>상태</Th>
            <Th>관리</Th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <Td>{order.id}</Td>
              <Td>{order.orderDate}</Td>
              <Td>{order.customerName}</Td>
              <Td>{order.totalAmount.toLocaleString()}원</Td>
              <Td>
                <StatusBadge status={order.status}>
                  {order.status}
                </StatusBadge>
              </Td>
              <Td>
                <ActionButton 
                  variant="text" 
                  size="small" 
                  onClick={() => openOrderDetail(order)}
                >
                  상세보기
                </ActionButton>
              </Td>
            </tr>
          ))}
          
          {orders.length === 0 && (
            <tr>
              <Td colSpan="6" style={{ textAlign: 'center', padding: '2rem' }}>
                주문 정보가 없습니다.
              </Td>
            </tr>
          )}
        </tbody>
      </Table>
      
      {totalPages > 1 && (
        <Pagination>
          <PageButton 
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            이전
          </PageButton>
          
          {[...Array(totalPages)].map((_, i) => (
            <PageButton
              key={i + 1}
              active={currentPage === i + 1}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </PageButton>
          ))}
          
          <PageButton
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            다음
          </PageButton>
        </Pagination>
      )}
    </>
  );
};

export default OrderTable;
