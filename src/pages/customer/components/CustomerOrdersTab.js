// src/pages/customers/components/CustomerOrdersTab.js
import React from 'react';
import Button from '../../../components/common/Button.js';
import { 
  CustomerDetailSection, 
  SectionTitle,
  OrderHistoryItem,
  OrderHistoryHeader,
  OrderId,
  OrderDate,
  OrderAmount,
  StatusBadge
} from '../styles/CustomerStyles.js';

const CustomerOrdersTab = ({ customer, closeModal }) => {
  return (
    <CustomerDetailSection>
      <SectionTitle>주문 내역</SectionTitle>
      
      {customer.orderHistory.length > 0 ? (
        customer.orderHistory.map(order => (
          <OrderHistoryItem key={order.id}>
            <OrderHistoryHeader>
              <OrderId>{order.id}</OrderId>
              <OrderDate>{order.date}</OrderDate>
            </OrderHistoryHeader>
            <StatusBadge status={
              order.status === '배송완료' ? '활성' : 
              order.status === '취소' ? '탈퇴' : '휴면'
            }>
              {order.status}
            </StatusBadge>
            <OrderAmount>{order.amount.toLocaleString()}원</OrderAmount>
          </OrderHistoryItem>
        ))
      ) : (
        <div style={{ textAlign: 'center', padding: '2rem', color: 'var(--neutral-600)' }}>
          주문 내역이 없습니다.
        </div>
      )}
      
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1.5rem' }}>
        <Button 
          variant="text" 
          onClick={closeModal}
        >
          닫기
        </Button>
      </div>
    </CustomerDetailSection>
  );
};

export default CustomerOrdersTab;
