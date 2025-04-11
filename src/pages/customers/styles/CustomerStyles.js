// src/pages/customers/styles/CustomerStyles.js
import styled from 'styled-components';
import Button from '../../../components/common/Button';
import FormInput from '../../../components/common/FormInput';

export const PageContainer = styled.div`
  padding: 2rem;
  background-color: var(--neutral-200);
  min-height: 100vh;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

export const Title = styled.h1`
  font-size: var(--font-size-2xl);
  font-weight: 600;
  color: var(--neutral-900);
`;

export const Card = styled.div`
  background-color: var(--neutral-100);
  border-radius: var(--border-radius-lg);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  margin-bottom: 1.5rem;
`;

export const ActionButton = styled(Button)`
  margin-right: 0.5rem;
`;

export const SearchContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

export const SearchInput = styled(FormInput)`
  flex: 1;
`;

// Table Styles
export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
`;

export const Th = styled.th`
  text-align: left;
  padding: 1rem;
  border-bottom: 1px solid var(--neutral-300);
  color: var(--neutral-700);
  font-weight: 600;
`;

export const Td = styled.td`
  padding: 1rem;
  border-bottom: 1px solid var(--neutral-300);
  color: var(--neutral-800);
`;

// Modal Styles
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

// Utility style for screen-reader–only content
export const SrOnly = styled.span`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`;

// Additional modal and table component styles can be placed here as needed.
