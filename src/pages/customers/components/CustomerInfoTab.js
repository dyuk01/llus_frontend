// src/pages/customers/components/CustomerInfoTab.js
import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../../components/common/Button';
import { 
  CustomerDetailSection, 
  SectionTitle, 
  DetailRow, 
  DetailLabel, 
  DetailValue,
  StatusBadge
} from '../styles/CustomerStyles';

const CustomerInfoTab = ({ 
  customer, 
  handleEditClick, 
  handleDeleteCustomer 
}) => {
  return (
    <>
      <CustomerDetailSection aria-labelledby="customer-info-title">
        <SectionTitle id="customer-info-title">고객 정보</SectionTitle>
        <DetailRow>
          <DetailLabel>고객 ID</DetailLabel>
          <DetailValue>{customer.id}</DetailValue>
        </DetailRow>
        <DetailRow>
          <DetailLabel>이름</DetailLabel>
          <DetailValue>{customer.name}</DetailValue>
        </DetailRow>
        <DetailRow>
          <DetailLabel>이메일</DetailLabel>
          <DetailValue>{customer.email}</DetailValue>
        </DetailRow>
        <DetailRow>
          <DetailLabel>전화번호</DetailLabel>
          <DetailValue>{customer.phone}</DetailValue>
        </DetailRow>
        <DetailRow>
          <DetailLabel>주소</DetailLabel>
          <DetailValue>{customer.address}</DetailValue>
        </DetailRow>
        <DetailRow>
          <DetailLabel>가입일</DetailLabel>
          <DetailValue>{customer.joinDate}</DetailValue>
        </DetailRow>
        <DetailRow>
          <DetailLabel>상태</DetailLabel>
          <DetailValue>
            <StatusBadge status={customer.status}>
              {customer.status}
            </StatusBadge>
          </DetailValue>
        </DetailRow>
      </CustomerDetailSection>
      
      <CustomerDetailSection>
        <SectionTitle>구매 통계</SectionTitle>
        <DetailRow>
          <DetailLabel>총 주문 수</DetailLabel>
          <DetailValue>{customer.totalOrders}건</DetailValue>
        </DetailRow>
        <DetailRow>
          <DetailLabel>총 구매액</DetailLabel>
          <DetailValue>{customer.totalSpent.toLocaleString()}원</DetailValue>
        </DetailRow>
      </CustomerDetailSection>
      
      <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1.5rem' }}>
        <Button 
          variant="primary" 
          onClick={handleEditClick}
        >
          정보 수정
        </Button>
        
        {customer.status !== '탈퇴' && (
          <Button 
            variant="outline" 
            onClick={handleDeleteCustomer}
          >
            탈퇴 처리
          </Button>
        )}
      </div>
    </>
  );
};

CustomerInfoTab.propTypes = {
  customer: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string,
    address: PropTypes.string,
    joinDate: PropTypes.string,
    status: PropTypes.string.isRequired,
    totalOrders: PropTypes.number,
    totalSpent: PropTypes.number,
  }).isRequired,
  handleEditClick: PropTypes.func.isRequired,
  handleDeleteCustomer: PropTypes.func.isRequired,
};

export default CustomerInfoTab;
