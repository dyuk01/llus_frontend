// src/pages/customers/components/CustomerTable.js
import React from 'react';
import PropTypes from 'prop-types';
import { 
  Table, 
  Th, 
  Td, 
  ActionButton, 
  StatusBadge,
  Pagination,
  PageButton
} from '../styles/CustomerStyles';

const CustomerTable = ({ 
  customers, 
  openCustomerDetail,
  currentPage,
  totalPages,
  setCurrentPage
}) => {
  return (
    <>
      <Table>
        <caption className="sr-only">고객 목록</caption>
        <thead>
          <tr>
            <Th>ID</Th>
            <Th>이름</Th>
            <Th>이메일</Th>
            <Th>전화번호</Th>
            <Th>가입일</Th>
            <Th>상태</Th>
            <Th>총 주문</Th>
            <Th>관리</Th>
          </tr>
        </thead>
        <tbody>
          {customers.map(customer => (
            <tr key={customer.id}>
              <Td>{customer.id}</Td>
              <Td>{customer.name}</Td>
              <Td>{customer.email}</Td>
              <Td>{customer.phone}</Td>
              <Td>{customer.joinDate}</Td>
              <Td>
                <StatusBadge status={customer.status}>
                  {customer.status}
                </StatusBadge>
              </Td>
              <Td>{customer.totalOrders}건</Td>
              <Td>
                <ActionButton 
                  variant="text" 
                  size="small" 
                  onClick={() => openCustomerDetail(customer)}
                >
                  상세보기
                </ActionButton>
              </Td>
            </tr>
          ))}
          
          {customers.length === 0 && (
            <tr>
              <Td colSpan="8" style={{ textAlign: 'center', padding: '2rem' }}>
                고객 정보가 없습니다.
              </Td>
            </tr>
          )}
        </tbody>
      </Table>
      
      {totalPages > 1 && (
        <Pagination aria-label="페이지 내비게이션">
          <PageButton 
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            이전
          </PageButton>
          
          {[...Array(totalPages)].map((_, i) => (
            <PageButton
              key={i + 1}
              active={currentPage === i + 1}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </PageButton>
          ))}
          
          <PageButton
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            다음
          </PageButton>
        </Pagination>
      )}
    </>
  );
};

CustomerTable.propTypes = {
  customers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone: PropTypes.string,
      joinDate: PropTypes.string,
      status: PropTypes.string.isRequired,
      totalOrders: PropTypes.number,
    })
  ).isRequired,
  openCustomerDetail: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};

export default CustomerTable;
