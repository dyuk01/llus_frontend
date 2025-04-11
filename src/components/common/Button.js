import React from 'react';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  border-radius: var(--border-radius-md);
  transition: all 0.2s ease-in-out;
  
  ${props => props.variant === 'primary' && css`
    background-color: var(--primary-300);
    color: white;
    &:hover {
      background-color: var(--primary-400);
    }
    &:active {
      background-color: var(--primary-500);
    }
  `}
  
  ${props => props.variant === 'secondary' && css`
    background-color: var(--secondary-200);
    color: var(--neutral-900);
    &:hover {
      background-color: var(--secondary-300);
    }
    &:active {
      background-color: var(--secondary-100);
    }
  `}
  
  ${props => props.variant === 'outline' && css`
    background-color: transparent;
    color: var(--primary-300);
    border: 1px solid var(--primary-300);
    &:hover {
      background-color: var(--primary-100);
      color: white;
      border-color: var(--primary-100);
    }
    &:active {
      background-color: var(--primary-200);
      border-color: var(--primary-200);
    }
  `}
  
  ${props => props.variant === 'text' && css`
    background-color: transparent;
    color: var(--primary-300);
    padding: 0.5rem 1rem;
    &:hover {
      background-color: rgba(94, 40, 204, 0.1);
    }
    &:active {
      background-color: rgba(94, 40, 204, 0.2);
    }
  `}
  
  ${props => props.fullWidth && css`
    width: 100%;
  `}
  
  ${props => props.size === 'small' && css`
    padding: 0.5rem 1rem;
    font-size: var(--font-size-sm);
  `}
  
  ${props => props.size === 'large' && css`
    padding: 1rem 2rem;
    font-size: var(--font-size-lg);
  `}
  
  ${props => props.disabled && css`
    opacity: 0.6;
    cursor: not-allowed;
    &:hover {
      background-color: ${props.variant === 'primary' ? 'var(--primary-300)' : 
                          props.variant === 'secondary' ? 'var(--secondary-200)' : 
                          'transparent'};
    }
  `}
`;

const Button = React.forwardRef(({ disabled, ...props }, ref) => (
  <StyledButton 
    ref={ref} 
    disabled={disabled} 
    aria-disabled={disabled ? true : undefined}
    {...props} 
  />
));

Button.displayName = 'Button';

Button.defaultProps = {
  variant: 'primary',
  type: 'button',
  size: 'medium',
  fullWidth: false,
  disabled: false
};

export default Button;
