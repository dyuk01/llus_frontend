// src/pages/customers/components/CustomerDetailModal.js
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { 
  Modal, 
  ModalContent, 
  ModalHeader, 
  ModalTitle, 
  CloseButton,
  Tabs,
  Tab
} from '../styles/CustomerStyles';
import CustomerInfoTab from './CustomerInfoTab';
import CustomerOrdersTab from './CustomerOrdersTab';
import CustomerEditForm from './CustomerEditForm';

const CustomerDetailModal = ({ 
  isOpen,
  customer,
  activeTab,
  setActiveTab,
  editMode,
  editFormData,
  handleInputChange,
  handleEditClick,
  handleCancelEdit,
  handleSaveChanges,
  closeModal,
  handleDeleteCustomer
}) => {
  const modalRef = useRef(null);

  // Focus trap: Set focus on modal when opened
  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.focus();
    }
  }, [isOpen]);

  if (!isOpen || !customer) return null;
  
  return (
    <Modal
      role="dialog"
      aria-modal="true"
      ref={modalRef}
      tabIndex="-1"
    >
      <ModalContent>
        <ModalHeader>
          <ModalTitle>고객 상세 정보</ModalTitle>
          <CloseButton onClick={closeModal} aria-label="닫기">&times;</CloseButton>
        </ModalHeader>
        
        <Tabs>
          <Tab 
            active={activeTab === 'info'} 
            onClick={() => setActiveTab('info')}
            role="tab"
            aria-selected={activeTab === 'info'}
          >
            기본 정보
          </Tab>
          <Tab 
            active={activeTab === 'orders'} 
            onClick={() => setActiveTab('orders')}
            role="tab"
            aria-selected={activeTab === 'orders'}
          >
            주문 내역
          </Tab>
        </Tabs>
        
        {activeTab === 'info' && (
          <>
            {!editMode ? (
              <CustomerInfoTab 
                customer={customer} 
                handleEditClick={handleEditClick}
                handleDeleteCustomer={handleDeleteCustomer}
              />
            ) : (
              <CustomerEditForm 
                formData={editFormData}
                handleInputChange={handleInputChange}
                handleSaveChanges={handleSaveChanges}
                handleCancelEdit={handleCancelEdit}
              />
            )}
          </>
        )}
        
        {activeTab === 'orders' && (
          <CustomerOrdersTab 
            customer={customer}
            closeModal={closeModal}
          />
        )}
      </ModalContent>
    </Modal>
  );
};

CustomerDetailModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  customer: PropTypes.object,
  activeTab: PropTypes.oneOf(['info', 'orders']).isRequired,
  setActiveTab: PropTypes.func.isRequired,
  editMode: PropTypes.bool.isRequired,
  editFormData: PropTypes.object,
  handleInputChange: PropTypes.func.isRequired,
  handleEditClick: PropTypes.func.isRequired,
  handleCancelEdit: PropTypes.func.isRequired,
  handleSaveChanges: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  handleDeleteCustomer: PropTypes.func.isRequired,
};

export default CustomerDetailModal;
