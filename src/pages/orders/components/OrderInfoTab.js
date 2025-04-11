// src/pages/orders/components/OrderInfoTab.js
import React from 'react';
import { 
  DetailSection, 
  SectionTitle, 
  DetailRow, 
  DetailLabel, 
  DetailValue,
  StatusBadge
} from '../styles/OrderStyles';

const OrderInfoTab = ({ order }) => {
  return (
    <>
      <DetailSection>
        <SectionTitle>주문 정보</SectionTitle>
        <DetailRow>
          <DetailLabel>주문번호</DetailLabel>
          <DetailValue>{order.id}</DetailValue>
        </DetailRow>
        <DetailRow>
          <DetailLabel>주문일자</DetailLabel>
          <DetailValue>{order.orderDate}</DetailValue>
        </DetailRow>
        <DetailRow>
          <DetailLabel>고객명</DetailLabel>
          <DetailValue>{order.customerName}</DetailValue>
        </DetailRow>
        <DetailRow>
          <DetailLabel>주문금액</DetailLabel>
          <DetailValue>{order.totalAmount.toLocaleString()}원</DetailValue>
        </DetailRow>
        <DetailRow>
          <DetailLabel>주문상태</DetailLabel>
          <DetailValue>
            <StatusBadge status={order.status}>
              {order.status}
            </StatusBadge>
          </DetailValue>
        </DetailRow>
      </DetailSection>
    </>
  );
};

export default OrderInfoTab;
