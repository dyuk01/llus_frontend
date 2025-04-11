// src/pages/customers/CustomerManagementPage.js
import React, { useState, useMemo } from 'react';
import Button from '../../components/common/Button';
import { PageContainer, Header, Title, Card } from './styles/CustomerStyles';
import CustomerSearchFilter from './components/CustomerSearchFilter';
import CustomerTable from './components/CustomerTable';
import CustomerDetailModal from './components/CustomerDetailModal';
import { customersData } from '../../services/dummy/dummyData';

const CustomerManagementPage = () => {
  const [customers, setCustomers] = useState(customersData);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('전체');
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [activeTab, setActiveTab] = useState('info');
  const [editMode, setEditMode] = useState(false);
  const [editFormData, setEditFormData] = useState({});
  
  const itemsPerPage = 10;
  
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };
  
  const handleStatusFilterChange = (e) => {
    setStatusFilter(e.target.value);
    setCurrentPage(1);
  };
  
  const openCustomerDetail = (customer) => {
    setSelectedCustomer(customer);
    setEditFormData({
      name: customer.name,
      email: customer.email,
      phone: customer.phone,
      address: customer.address,
      status: customer.status
    });
    setActiveTab('info');
    setEditMode(false);
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
    setEditMode(false);
  };
  
  const handleEditClick = () => {
    setEditMode(true);
  };
  
  const handleCancelEdit = () => {
    setEditFormData({
      name: selectedCustomer.name,
      email: selectedCustomer.email,
      phone: selectedCustomer.phone,
      address: selectedCustomer.address,
      status: selectedCustomer.status
    });
    setEditMode(false);
  };
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSaveChanges = () => {
    const updatedCustomers = customers.map(customer => 
      customer.id === selectedCustomer.id 
        ? { ...customer, ...editFormData } 
        : customer
    );
    
    setCustomers(updatedCustomers);
    setSelectedCustomer({ ...selectedCustomer, ...editFormData });
    setEditMode(false);
  };
  
  const handleDeleteCustomer = () => {
    if (window.confirm('정말로 이 고객을 탈퇴 처리하시겠습니까?')) {
      const updatedCustomers = customers.map(customer => 
        customer.id === selectedCustomer.id 
          ? { ...customer, status: '탈퇴' } 
          : customer
      );
      setCustomers(updatedCustomers);
      setSelectedCustomer({ ...selectedCustomer, status: '탈퇴' });
    }
  };
  
  const filteredCustomers = useMemo(() => {
    return customers.filter(customer => {
      // 상태 필터
      if (statusFilter !== '전체' && customer.status !== statusFilter) {
        return false;
      }
      
      // 검색어 필터
      if (searchTerm &&
          !customer.name.toLowerCase().includes(searchTerm.toLowerCase()) && 
          !customer.email.toLowerCase().includes(searchTerm.toLowerCase()) &&
          !customer.phone.includes(searchTerm)) {
        return false;
      }
      
      return true;
    });
  }, [customers, searchTerm, statusFilter]);
  
  const totalPages = Math.ceil(filteredCustomers.length / itemsPerPage);
  const currentCustomers = useMemo(() => {
    return filteredCustomers.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
  }, [filteredCustomers, currentPage, itemsPerPage]);
  
  return (
    <PageContainer role="main">
      <Header>
        <Title>고객 관리</Title>
        <Button variant="primary">+ 신규 고객 등록</Button>
      </Header>
      
      <Card>
        <CustomerSearchFilter 
          searchTerm={searchTerm}
          statusFilter={statusFilter}
          handleSearchChange={handleSearchChange}
          handleStatusFilterChange={handleStatusFilterChange}
        />
        
        <CustomerTable 
          customers={currentCustomers}
          openCustomerDetail={openCustomerDetail}
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      </Card>
      
      <CustomerDetailModal 
        isOpen={isModalOpen}
        customer={selectedCustomer}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        editMode={editMode}
        editFormData={editFormData}
        handleInputChange={handleInputChange}
        handleEditClick={handleEditClick}
        handleCancelEdit={handleCancelEdit}
        handleSaveChanges={handleSaveChanges}
        closeModal={closeModal}
        handleDeleteCustomer={handleDeleteCustomer}
      />
    </PageContainer>
  );
};

export default CustomerManagementPage;
