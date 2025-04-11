// src/pages/orders/styles/OrderStyles.js
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

export const ActionButton = styled(Button)`
  margin-right: 0.5rem;
`;

export const SearchContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
`;

export const SearchInput = styled(FormInput)`
  flex: 1;
  min-width: 200px;
`;

export const FilterItem = styled.div`
  flex: 1;
  min-width: 200px;
`;

export const StatusBadge = styled.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: var(--border-radius-full);
  font-size: var(--font-size-xs);
  font-weight: 500;
  
  ${props => props.status === '배송완료' && `
    background-color: rgba(52, 199, 89, 0.1);
    color: var(--success);
  `}
  
  ${props => props.status === '배송중' && `
    background-color: rgba(0, 122, 255, 0.1);
    color: var(--primary-300);
  `}
  
  ${props => props.status === '배송준비중' && `
    background-color: rgba(255, 149, 0, 0.1);
    color: var(--warning);
  `}
  
  ${props => props.status === '주문접수' && `
    background-color: rgba(142, 142, 147, 0.1);
    color: var(--neutral-600);
  `}
  
  ${props => props.status === '취소' && `
    background-color: rgba(255, 59, 48, 0.1);
    color: var(--error);
  `}
`;

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

export const ModalContent = styled.div`
  background-color: var(--neutral-100);
  border-radius: var(--border-radius-lg);
  padding: 2rem;
  width: 100%;
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

export const ModalTitle = styled.h2`
  font-size: var(--font-size-xl);
  font-weight: 600;
  color: var(--neutral-900);
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--neutral-600);
  
  &:hover {
    color: var(--neutral-900);
  }
`;

export const Tabs = styled.div`
  display: flex;
  border-bottom: 1px solid var(--neutral-300);
  margin-bottom: 1.5rem;
`;

export const Tab = styled.button`
  padding: 0.75rem 1.5rem;
  background: none;
  border: none;
  border-bottom: 2px solid ${props => props.active ? 'var(--primary-300)' : 'transparent'};
  color: ${props => props.active ? 'var(--primary-300)' : 'var(--neutral-700)'};
  font-weight: ${props => props.active ? '600' : '400'};
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    color: var(--primary-300);
  }
`;

export const DetailSection = styled.div`
  margin-bottom: 1.5rem;
`;

export const SectionTitle = styled.h3`
  font-size: var(--font-size-lg);
  font-weight: 600;
  color: var(--neutral-800);
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--neutral-300);
`;

export const DetailRow = styled.div`
  display: flex;
  margin-bottom: 0.75rem;
`;

export const DetailLabel = styled.div`
  width: 120px;
  font-weight: 500;
  color: var(--neutral-700);
`;

export const DetailValue = styled.div`
  flex: 1;
  color: var(--neutral-900);
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
`;

export const PageButton = styled.button`
  padding: 0.5rem 0.75rem;
  margin: 0 0.25rem;
  border-radius: var(--border-radius-md);
  background-color: ${props => props.active ? 'var(--primary-300)' : 'transparent'};
  color: ${props => props.active ? 'white' : 'var(--neutral-700)'};
  border: 1px solid ${props => props.active ? 'var(--primary-300)' : 'var(--neutral-300)'};
  cursor: pointer;
  
  &:hover {
    background-color: ${props => props.active ? 'var(--primary-400)' : 'var(--neutral-200)'};
  }
`;
