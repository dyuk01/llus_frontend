import React from 'react';
import Button from '../../../components/common/Button.js';

const CustomerInfoTab = ({ customer, onEdit }) => {
  return (
    <div className="customer-info-container">
      <div className="info-header">
        <h3>기본 정보</h3>
        <Button variant="secondary" onClick={onEdit}>
          수정
        </Button>
      </div>
      
      <div className="info-grid">
        <div className="info-item">
          <label>고객명</label>
          <p>{customer.name}</p>
        </div>
        
        <div className="info-item">
          <label>이메일</label>
          <p>{customer.email}</p>
        </div>
        
        <div className="info-item">
          <label>연락처</label>
          <p>{customer.phone}</p>
        </div>
        
        <div className="info-item">
          <label>가입일</label>
          <p>{customer.registeredDate}</p>
        </div>
        
        <div className="info-item">
          <label>상태</label>
          <p>
            <span className={`status-badge ${customer.status}`}>
              {customer.status === 'active' ? '활성' : '비활성'}
            </span>
          </p>
        </div>
      </div>
      
      <div className="stats-section">
        <h3>활동 통계</h3>
        
        <div className="stats-grid">
          <div className="stat-card">
            <p className="stat-value">{customer.totalOrders}</p>
            <p className="stat-label">총 주문 수</p>
          </div>
          
          <div className="stat-card">
            <p className="stat-value">{customer.lastOrderDate || '없음'}</p>
            <p className="stat-label">최근 주문일</p>
          </div>
          
          {/* Additional statistics could be added here */}
        </div>
      </div>
    </div>
  );
};

export default CustomerInfoTab;