// src/pages/orders/components/OrderStatusUpdate.js
import React, { useState } from 'react';
import Button from '../../../components/common/Button';
import FormInput from '../../../components/common/FormInput';
import { DetailSection, SectionTitle } from '../styles/OrderStyles';

const OrderStatusUpdate = ({ 
  order, 
  onStatusUpdate,
  onShippingInfoUpdate
}) => {
  const [status, setStatus] = useState(order.status);
  const [courier, setCourier] = useState(order.shippingInfo.courier || '');
  const [trackingNumber, setTrackingNumber] = useState(order.shippingInfo.trackingNumber || '');
  
  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };
  
  const handleCourierChange = (e) => {
    setCourier(e.target.value);
  };
  
  const handleTrackingNumberChange = (e) => {
    setTrackingNumber(e.target.value);
  };
  
  const handleStatusUpdate = () => {
    onStatusUpdate(status);
  };
  
  const handleShippingInfoUpdate = () => {
    onShippingInfoUpdate({
      courier,
      trackingNumber
    });
  };
  
  return (
    <DetailSection>
      <SectionTitle>상태 관리</SectionTitle>
      
      <div style={{ marginBottom: '1rem' }}>
        <FormInput
          label="주문 상태"
          as="select"
          value={status}
          onChange={handleStatusChange}
        >
          <option value="주문접수">주문접수</option>
          <option value="배송준비중">배송준비중</option>
          <option value="배송중">배송중</option>
          <option value="배송완료">배송완료</option>
          <option value="취소">취소</option>
        </FormInput>
        
        <div style={{ marginTop: '0.5rem' }}>
          <Button 
            variant="primary" 
            size="small"
            onClick={handleStatusUpdate}
          >
            상태 변경
          </Button>
        </div>
      </div>
      
      <div style={{ marginTop: '1.5rem' }}>
        <FormInput
          label="택배사"
          value={courier}
          onChange={handleCourierChange}
        />
        
        <FormInput
          label="운송장 번호"
          value={trackingNumber}
          onChange={handleTrackingNumberChange}
          style={{ marginTop: '0.5rem' }}
        />
        
        <div style={{ marginTop: '0.5rem' }}>
          <Button 
            variant="primary" 
            size="small"
            onClick={handleShippingInfoUpdate}
          >
            배송 정보 업데이트
          </Button>
        </div>
      </div>
    </DetailSection>
  );
};

export default OrderStatusUpdate;
