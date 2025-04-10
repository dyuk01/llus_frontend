import React from 'react';
import Button from '../../../components/common/Button';

const OrderTable = ({ orders, onOrderSelect }) => {
  const getStatusText = (status) => {
    switch (status) {
      case 'pending': return '결제완료';
      case 'shipping': return '배송중';
      case 'delivered': return '배송완료';
      case 'canceled': return '취소';
      default: return status;
    }
  };

  if (!orders || orders.length === 0) {
    return <div className="empty-table">주문 정보가 없습니다.</div>;
  }

  return (
    <div className="table-container">
      <table className="order-table">
        <thead>
          <tr>
            <th>주문번호</th>
            <th>고객명</th>
            <th>주문일</th>
            <th>결제금액</th>
            <th>결제방법</th>
            <th>상태</th>
            <th>액션</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customerName}</td>
              <td>{order.orderDate}</td>
              <td>{order.totalAmount.toLocaleString()}원</td>
              <td>{order.paymentMethod}</td>
              <td>
                <span className={`status-badge ${order.status}`}>
                  {getStatusText(order.status)}
                </span>
              </td>
              <td>
                <Button 
                  variant="text" 
                  onClick={() => onOrderSelect(order)}
                >
                  상세보기
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;