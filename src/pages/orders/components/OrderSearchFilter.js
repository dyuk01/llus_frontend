// src/pages/orders/components/OrderSearchFilter.js
import React from 'react';
import Button from '../../../components/common/Button';
import FormInput from '../../../components/common/FormInput';
import { 
  SearchContainer, 
  SearchInput, 
  FilterItem 
} from '../styles/OrderStyles';

const OrderSearchFilter = ({ 
  searchTerm, 
  statusFilter, 
  dateRange,
  handleSearchChange, 
  handleStatusFilterChange,
  handleDateRangeChange
}) => {
  return (
    <SearchContainer>
      <SearchInput
        placeholder="주문번호 또는 고객명으로 검색"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      
      <FilterItem>
        <FormInput
          as="select"
          value={statusFilter}
          onChange={handleStatusFilterChange}
          label="주문 상태"
        >
          <option value="전체">전체 상태</option>
          <option value="주문접수">주문접수</option>
          <option value="배송준비중">배송준비중</option>
          <option value="배송중">배송중</option>
          <option value="배송완료">배송완료</option>
          <option value="취소">취소</option>
        </FormInput>
      </FilterItem>
      
      <FilterItem>
        <FormInput
          as="select"
          value={dateRange}
          onChange={handleDateRangeChange}
          label="기간"
        >
          <option value="전체">전체 기간</option>
          <option value="오늘">오늘</option>
          <option value="3일">최근 3일</option>
          <option value="7일">최근 7일</option>
          <option value="1개월">최근 1개월</option>
          <option value="3개월">최근 3개월</option>
        </FormInput>
      </FilterItem>
      
      <FilterItem style={{ display: 'flex', alignItems: 'flex-end' }}>
        <Button variant="outline" style={{ height: '38px', marginTop: '1.5rem' }}>검색</Button>
      </FilterItem>
    </SearchContainer>
  );
};

export default OrderSearchFilter;
