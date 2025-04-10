import React, { useState } from 'react';
import ResponsiveDashboardLayout from '../../components/layout/ResponsiveDashboardLayout';
import CustomerSearchFilter from '../customer/components/CustomerSearchFilter';
import CustomerTable from '../customer/components/CustomerTable';
import CustomerDetailModal from '../customer/components/CustomerDetailModal';

const CustomerManagementPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterOptions, setFilterOptions] = useState({
    status: 'all',
    date: 'all',
  });
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Dummy data - would be replaced with actual API calls
  const customers = [
    {
      id: 1,
      name: '김철수',
      email: 'kimcs@example.com',
      phone: '010-1234-5678',
      registeredDate: '2023-09-15',
      lastOrderDate: '2023-10-22',
      totalOrders: 5,
      status: 'active',
    },
    {
      id: 2,
      name: '이영희',
      email: 'lee.yh@example.com',
      phone: '010-9876-5432',
      registeredDate: '2023-08-30',
      lastOrderDate: '2023-10-18',
      totalOrders: 3,
      status: 'inactive',
    },
    {
      id: 3,
      name: '박지민',
      email: 'jimin.park@example.com',
      phone: '010-5555-7777',
      registeredDate: '2023-07-20',
      lastOrderDate: '2023-10-25',
      totalOrders: 8,
      status: 'active',
    },
  ];

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  const handleFilterChange = (filters) => {
    setFilterOptions(filters);
  };

  const handleCustomerSelect = (customer) => {
    setSelectedCustomer(customer);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <ResponsiveDashboardLayout>
      <div className="customer-management-container">
        <h1 className="page-title">고객 관리</h1>
        
        <CustomerSearchFilter 
          onSearchChange={handleSearchChange} 
          onFilterChange={handleFilterChange} 
        />
        
        <CustomerTable 
          customers={customers} 
          onCustomerSelect={handleCustomerSelect} 
        />
        
        {isModalOpen && (
          <CustomerDetailModal 
            customer={selectedCustomer} 
            onClose={handleCloseModal} 
          />
        )}
      </div>
    </ResponsiveDashboardLayout>
  );
};

export default CustomerManagementPage;