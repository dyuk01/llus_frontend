import React, { useState } from 'react';
import FormInput from '../../../components/common/FormInput.js';
import Button from '../../../components/common/Button.js';

const CustomerSearchFilter = ({ onSearchChange, onFilterChange }) => {
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
          placeholder="고객명 또는 이메일로 검색"
          value={searchTerm}
          onChange={handleSearchInput}
          icon="search"
        />
      </div>
      
      <div className="filter-container">
        <div className="filter-item">
          <label>고객 상태</label>
          <select value={statusFilter} onChange={handleStatusChange}>
            <option value="all">전체</option>
            <option value="active">활성</option>
            <option value="inactive">비활성</option>
          </select>
        </div>
        
        <div className="filter-item">
          <label>가입일</label>
          <select value={dateFilter} onChange={handleDateChange}>
            <option value="all">전체 기간</option>
            <option value="7days">최근 7일</option>
            <option value="30days">최근 30일</option>
            <option value="90days">최근 90일</option>
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

export default CustomerSearchFilter;