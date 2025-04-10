import React, { useState } from 'react';
import Button from '../../../components/common/Button.js';
import CustomerInfoTab from '../components/CustomerInfoTab.js';
import CustomerOrdersTab from '../components/CustomerOrdersTab.js';
import CustomerEditForm from '../components/CustomerEditForm.js';

const CustomerDetailModal = ({ customer, onClose }) => {
  const [activeTab, setActiveTab] = useState('info');
  const [isEditing, setIsEditing] = useState(false);
  
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  
  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };
  
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          <h2>고객 상세 정보</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        
        <div className="modal-tabs">
          <button 
            className={`tab-button ${activeTab === 'info' ? 'active' : ''}`}
            onClick={() => handleTabChange('info')}
          >
            고객 정보
          </button>
          <button 
            className={`tab-button ${activeTab === 'orders' ? 'active' : ''}`}
            onClick={() => handleTabChange('orders')}
          >
            주문 내역
          </button>
        </div>
        
        <div className="modal-content">
          {activeTab === 'info' && !isEditing && (
            <CustomerInfoTab customer={customer} onEdit={toggleEdit} />
          )}
          
          {activeTab === 'info' && isEditing && (
            <CustomerEditForm 
              customer={customer} 
              onCancel={toggleEdit}
              onSave={() => {
                // Save logic would go here in a real implementation
                toggleEdit();
              }} 
            />
          )}
          
          {activeTab === 'orders' && (
            <CustomerOrdersTab customerId={customer.id} />
          )}
        </div>
        
        <div className="modal-footer">
          <Button variant="secondary" onClick={onClose}>
            닫기
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CustomerDetailModal;