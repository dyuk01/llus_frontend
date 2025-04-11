// src/pages/customers/components/CustomerSearchFilter.js
import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../../components/common/Button';
import FormInput from '../../../components/common/FormInput';
import { SearchContainer, SearchInput } from '../styles/CustomerStyles';

const CustomerSearchFilter = ({ 
  searchTerm, 
  statusFilter, 
  handleSearchChange, 
  handleStatusFilterChange, 
  handleSearch
}) => {
  return (
    <SearchContainer role="search" aria-label="고객 검색 및 필터">
      <SearchInput
        placeholder="이름, 이메일 또는 전화번호로 검색"
        value={searchTerm}
        onChange={handleSearchChange}
        aria-label="검색어 입력"
      />
      
      <FormInput
        as="select"
        value={statusFilter}
        onChange={handleStatusFilterChange}
        style={{ width: '150px' }}
        aria-label="고객 상태 필터"
      >
        <option value="전체">전체 상태</option>
        <option value="활성">활성</option>
        <option value="휴면">휴면</option>
        <option value="탈퇴">탈퇴</option>
      </FormInput>
      
      <Button variant="outline" onClick={handleSearch} aria-label="검색">
        검색
      </Button>
    </SearchContainer>
  );
};

CustomerSearchFilter.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  statusFilter: PropTypes.string.isRequired,
  handleSearchChange: PropTypes.func.isRequired,
  handleStatusFilterChange: PropTypes.func.isRequired,
  handleSearch: PropTypes.func, // Optional: triggers search logic if desired
};

CustomerSearchFilter.defaultProps = {
  handleSearch: () => {},
};

export default CustomerSearchFilter;
