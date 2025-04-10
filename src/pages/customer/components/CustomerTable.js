import React from 'react';
import Button from '../../../components/common/Button.js';

const CustomerTable = ({ customers, onCustomerSelect }) => {
  if (!customers || customers.length === 0) {
    return <div className="empty-table">고객 정보가 없습니다.</div>;
  }

  return (
    <div className="table-container">
      <table className="customer-table">
        <thead>
          <tr>
            <th>고객명</th>
            <th>이메일</th>
            <th>연락처</th>
            <th>가입일</th>
            <th>최근 주문일</th>
            <th>총 주문수</th>
            <th>상태</th>
            <th>액션</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>{customer.phone}</td>
              <td>{customer.registeredDate}</td>
              <td>{customer.lastOrderDate}</td>
              <td>{customer.totalOrders}</td>
              <td>
                <span className={`status-badge ${customer.status}`}>
                  {customer.status === 'active' ? '활성' : '비활성'}
                </span>
              </td>
              <td>
                <Button 
                  variant="text" 
                  onClick={() => onCustomerSelect(customer)}
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

export default CustomerTable;