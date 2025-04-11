// src/pages/orders/components/ShippingInfoTab.js
import React from 'react';
import { 
  DetailSection, 
  SectionTitle, 
  DetailRow, 
  DetailLabel, 
  DetailValue
} from '../styles/OrderStyles';

const ShippingInfoTab = ({ order }) => {
  return (
    <DetailSection>
      <SectionTitle>배송 정보</SectionTitle>
      <DetailRow>
        <DetailLabel>배송지</DetailLabel>
        <DetailValue>{order.shippingInfo.address}</DetailValue>
      </DetailRow>
      <DetailRow>
        <DetailLabel>연락처</DetailLabel>
        <DetailValue>{order.shippingInfo.contact}</DetailValue>
      </DetailRow>
      <DetailRow>
        <DetailLabel>택배사</DetailLabel>
        <DetailValue>{order.shippingInfo.courier || '-'}</DetailValue>
      </DetailRow>
      <DetailRow>
        <DetailLabel>운송장번호</DetailLabel>
        <DetailValue>{order.shippingInfo.trackingNumber || '-'}</DetailValue>
      </DetailRow>
    </DetailSection>
  );
};

export default ShippingInfoTab;
