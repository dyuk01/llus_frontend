// src/pages/customers/components/CustomerEditForm.js
import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../../components/common/Button';
import FormInput from '../../../components/common/FormInput';

const CustomerEditForm = ({ 
  formData, 
  handleInputChange, 
  handleSaveChanges, 
  handleCancelEdit 
}) => {
  return (
    <form onSubmit={(e) => { e.preventDefault(); handleSaveChanges(); }}>
      <FormInput
        label="이름"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
      />
      
      <FormInput
        label="이메일"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleInputChange}
      />
      
      <FormInput
        label="전화번호"
        name="phone"
        value={formData.phone}
        onChange={handleInputChange}
      />
      
      <FormInput
        label="주소"
        name="address"
        value={formData.address}
        onChange={handleInputChange}
      />
      
      <FormInput
        label="상태"
        name="status"
        as="select"
        value={formData.status}
        onChange={handleInputChange}
      >
        <option value="활성">활성</option>
        <option value="휴면">휴면</option>
        <option value="탈퇴">탈퇴</option>
      </FormInput>
      
      <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1.5rem' }}>
        <Button 
          type="button"
          variant="primary" 
          onClick={handleSaveChanges}
        >
          저장
        </Button>
        
        <Button 
          type="button"
          variant="outline" 
          onClick={handleCancelEdit}
        >
          취소
        </Button>
      </div>
    </form>
  );
};

CustomerEditForm.propTypes = {
  formData: PropTypes.object.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSaveChanges: PropTypes.func.isRequired,
  handleCancelEdit: PropTypes.func.isRequired,
};

export default CustomerEditForm;
