import React, { useState } from 'react';
import FormInput from '../../../components/common/FormInput';
import Button from '../../../components/common/Button';

const OrderSearchFilter = ({ onSearchChange, onFilterChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [dateFilter, setDateFilter] = useState('all');

  const handleSearchInput = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearchChange(value);
  };

  const handleStatusChange = (e) => {
    const value = e.target.value;
    setStatusFilter(value);
    onFilterChange({
      status: value,
      date: dateFilter
    });
  };

  const handleDateChange = (e) => {
    const value = e.target.value;
    setDateFilter(value);
    onFilterChange({
      status: statusFilter,
      date: value
    });
  };

  const handleReset = () => {
    setSearchTerm('');
    setStatusFilter('all');
    setDateFilter('all');
    onSearchChange('');
    onFilterChange({
      status: 'all',
      date: 'all'
    });
  };

  return (
    <div className="search-filter-container">
      <div className="search-box">
        <FormInput
          type="text"
          placeholder="주문번호 또는 고객명으로 검색"
          value={searchTerm}
          onChange={handleSearchInput}
          icon="search"
        />
      </div>
      
      <div className="filter-container">
        <div className="filter-item">
          <label>주문 상태</label>
          <select value={statusFilter} onChange={handleStatusChange}>
            <option value="all">전체</option>
            <option value="pending">결제완료</option>
            <option value="shipping">배송중</option>
            <option value="delivered">배송완료</option>
            <option value="canceled">취소</option>
          </select>
        </div>
        
        <div className="filter-item">
          <label>주문일</label>
          <select value={dateFilter} onChange={handleDateChange}>
            <option value="all">전체 기간</option>
            <option value="today">오늘</option>
            <option value="7days">최근 7일</option>
            <option value="30days">최근 30일</option>
            <option value="custom">직접 입력</option>
          </select>
        </div>
        
        <Button variant="secondary" onClick={handleReset}>
          초기화
        </Button>
      </div>
    </div>
  );
};

export default OrderSearchFilter;