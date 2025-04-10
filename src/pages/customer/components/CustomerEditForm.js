import React, { useState } from 'react';
import Button from '../../../components/common/Button.js';
import FormInput from '../../../components/common/FormInput.js';

const CustomerEditForm = ({ customer, onCancel, onSave }) => {
  const [formData, setFormData] = useState({
    name: customer.name,
    email: customer.email,
    phone: customer.phone,
    status: customer.status
  });
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would validate and call API to update
    onSave(formData);
  };
  
  return (
    <div className="customer-edit-form">
      <h3>고객 정보 수정</h3>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>고객명</label>
          <FormInput
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label>이메일</label>
          <FormInput
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label>연락처</label>
          <FormInput
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label>상태</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleInputChange}
          >
            <option value="active">활성</option>
            <option value="inactive">비활성</option>
          </select>
        </div>
        
        <div className="button-group">
          <Button type="submit" variant="primary">
            저장
          </Button>
          <Button type="button" variant="secondary" onClick={onCancel}>
            취소
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CustomerEditForm;