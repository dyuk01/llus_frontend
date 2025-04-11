// src/pages/orders/components/OrderItemsTab.js
import React from 'react';
import { 
  DetailSection, 
  SectionTitle,
  Table,
  Th,
  Td
} from '../styles/OrderStyles';

const OrderItemsTab = ({ order }) => {
  return (
    <DetailSection>
      <SectionTitle>주문 상품</SectionTitle>
      <Table>
        <thead>
          <tr>
            <Th>상품명</Th>
            <Th>수량</Th>
            <Th>가격</Th>
            <Th>소계</Th>
          </tr>
        </thead>
        <tbody>
          {order.items.map(item => (
            <tr key={item.id}>
              <Td>{item.name}</Td>
              <Td>{item.quantity}개</Td>
              <Td>{item.price.toLocaleString()}원</Td>
              <Td>{(item.quantity * item.price).toLocaleString()}원</Td>
            </tr>
          ))}
          <tr>
            <Td colSpan="3" style={{ textAlign: 'right', fontWeight: 'bold' }}>총계</Td>
            <Td style={{ fontWeight: 'bold' }}>{order.totalAmount.toLocaleString()}원</Td>
          </tr>
        </tbody>
      </Table>
    </DetailSection>
  );
};

export default OrderItemsTab;
