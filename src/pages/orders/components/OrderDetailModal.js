// src/pages/orders/components/OrderDetailModal.js
import React from 'react';
import { 
  Modal, 
  ModalContent, 
  ModalHeader, 
  ModalTitle, 
  CloseButton,
  Tabs,
  Tab
} from '../styles/OrderStyles';
import OrderInfoTab from './OrderInfoTab';
import OrderItemsTab from './OrderItemsTab';
import ShippingInfoTab from './ShippingInfoTab';
import OrderStatusUpdate from './OrderStatusUpdate';
import Button from '../../../components/common/Button';

const OrderDetailModal = ({ 
  isOpen,
  order,
  activeTab,
  setActiveTab,
  onStatusUpdate,
  onShippingInfoUpdate,
  closeModal
}) => {
  if (!isOpen || !order) return null;
  
  return (
    <Modal>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>주문 상세 정보</ModalTitle>
          <CloseButton onClick={closeModal}>&times;</CloseButton>
        </ModalHeader>
        
        <Tabs>
          <Tab 
            active={activeTab === 'info'} 
            onClick={() => setActiveTab('info')}
          >
            주문 정보
          </Tab>
          <Tab 
            active={activeTab === 'items'} 
            onClick={() => setActiveTab('items')}
          >
            주문 상품
          </Tab>
          <Tab 
            active={activeTab === 'shipping'} 
            onClick={() => setActiveTab('shipping')}
          >
            배송 정보
          </Tab>
          <Tab 
            active={activeTab === 'status'} 
            onClick={() => setActiveTab('status')}
          >
            상태 관리
          </Tab>
        </Tabs>
        
        {activeTab === 'info' && <OrderInfoTab order={order} />}
        {activeTab === 'items' && <OrderItemsTab order={order} />}
        {activeTab === 'shipping' && <ShippingInfoTab order={order} />}
        {activeTab === 'status' && (
          <OrderStatusUpdate 
            order={order}
            onStatusUpdate={onStatusUpdate}
            onShippingInfoUpdate={onShippingInfoUpdate}
          />
        )}
        
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1.5rem' }}>
          <Button 
            variant="outline" 
            onClick={closeModal}
          >
            닫기
          </Button>
        </div>
      </ModalContent>
    </Modal>
  );
};

export default OrderDetailModal;
