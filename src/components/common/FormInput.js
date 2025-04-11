import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid var(--neutral-400);
  border-radius: var(--border-radius-md);
  font-size: var(--font-size-md);
  transition: all 0.2s ease-in-out;
  background-color: var(--neutral-100);
  
  &:focus {
    outline: none;
    border-color: var(--primary-300);
    box-shadow: 0 0 0 2px rgba(94, 40, 204, 0.2);
  }
  
  &::placeholder {
    color: var(--neutral-500);
  }
  
  &:disabled {
    background-color: var(--neutral-200);
    cursor: not-allowed;
  }
  
  ${props => props.error && `
    border-color: var(--error);
    
    &:focus {
      box-shadow: 0 0 0 2px rgba(255, 59, 48, 0.2);
    }
  `}
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  width: 100%;
`;

const Label = styled.label`
  font-size: var(--font-size-sm);
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: var(--neutral-800);
`;

const ErrorMessage = styled.span`
  font-size: var(--font-size-xs);
  color: var(--error);
  margin-top: 0.25rem;
`;

const FormInput = ({ 
  label, 
  id, 
  error, 
  ...props 
}) => {
  return (
    <InputWrapper>
      {label && <Label htmlFor={id}>{label}</Label>}
      <Input 
        id={id}
        error={error}
        aria-invalid={error ? true : false}
        aria-describedby={error ? `${id}-error` : undefined}
        {...props}
      />
      {error && <ErrorMessage id={`${id}-error`}>{error}</ErrorMessage>}
    </InputWrapper>
  );
};

export default FormInput;
