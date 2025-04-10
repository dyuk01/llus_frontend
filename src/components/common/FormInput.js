import React from 'react';
import styled from 'styled-components';

const FormInput = ({
  label,
  type = 'text',
  name,
  value,
  onChange,
  placeholder,
  error,
  disabled = false,
  required = false,
  ...props
}) => {
  return (
    <InputContainer>
      {label && <InputLabel htmlFor={name}>{label}</InputLabel>}
      <StyledInput
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        $haserror={!!error}
        {...props}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </InputContainer>
  );
};

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
  width: 100%;
`;

const InputLabel = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: #424242;
  margin-bottom: 8px;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 12px 16px;
  font-size: 14px;
  border: 1px solid ${({ $haserror }) => ($haserror ? '#F44336' : '#E0E0E0')};
  border-radius: 8px;
  background-color: #FFFFFF;
  transition: border-color 0.2s ease;
  outline: none;
  
  &:focus {
    border-color: ${({ $haserror }) => ($haserror ? '#F44336' : '#1E88E5')};
    box-shadow: 0 0 0 2px ${({ $haserror }) => ($haserror ? 'rgba(244, 67, 54, 0.1)' : 'rgba(30, 136, 229, 0.1)')};
  }
  
  &::placeholder {
    color: #9E9E9E;
  }
  
  &:disabled {
    background-color: #F5F5F5;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.span`
  font-size: 12px;
  color: #F44336;
  margin-top: 4px;
`;

export default FormInput;
