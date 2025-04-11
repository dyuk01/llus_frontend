import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components';

const SidebarContainer = styled.div`
  width: 250px;
  height: 100vh;
  background-color: var(--primary-500);
  color: white;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.div`
  padding: 1.5rem;
  font-size: var(--font-size-xl);
  font-weight: 600;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const NavMenu = styled.nav`
  padding: 1.5rem 0;
  flex: 1;
`;

const NavItem = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  color: ${props => (props.active ? 'white' : 'rgba(255, 255, 255, 0.7)')};
  text-decoration: none;
  position: relative;
  transition: all 0.2s;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    color: white;
  }
  
  ${props => props.active && css`
    background-color: rgba(255, 255, 255, 0.1);
    
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 4px;
      background-color: var(--secondary-200);
    }
  `}
`;

const NavIcon = styled.span`
  margin-right: 0.75rem;
  font-size: 1.25rem;
`;

const UserSection = styled.div`
  padding: 1rem 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const UserAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--primary-300);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
`;

const UserInfo = styled.div`
  flex: 1;
`;

const UserName = styled.div`
  font-weight: 500;
`;

const UserRole = styled.div`
  font-size: var(--font-size-xs);
  opacity: 0.7;
`;

const LogoutButton = styled.button`
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
  
  &:hover {
    color: white;
  }
`;

const Sidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  
  // Replace with actual icon components if available.
  const renderIcon = (name) => <NavIcon aria-hidden="true">{name}</NavIcon>;
  
  return (
    <SidebarContainer>
      <Logo>
        <span role="img" aria-label="logo">🦁</span> LIKELION
      </Logo>
      
      <NavMenu>
        <NavItem
          to="/dashboard"
          active={currentPath === '/dashboard'}
          aria-current={currentPath === '/dashboard' ? 'page' : undefined}
        >
          {renderIcon('📊')} 대시보드
        </NavItem>
        <NavItem
          to="/products"
          active={currentPath === '/products'}
          aria-current={currentPath === '/products' ? 'page' : undefined}
        >
          {renderIcon('📦')} 상품 관리
        </NavItem>
        <NavItem
          to="/orders"
          active={currentPath === '/orders'}
          aria-current={currentPath === '/orders' ? 'page' : undefined}
        >
          {renderIcon('🚚')} 주문/배송 관리
        </NavItem>
        <NavItem
          to="/customers"
          active={currentPath === '/customers'}
          aria-current={currentPath === '/customers' ? 'page' : undefined}
        >
          {renderIcon('👥')} 고객 관리
        </NavItem>
        <NavItem
          to="/statistics"
          active={currentPath === '/statistics'}
          aria-current={currentPath === '/statistics' ? 'page' : undefined}
        >
          {renderIcon('📈')} 매출 통계
        </NavItem>
      </NavMenu>
      
      <UserSection>
        <UserAvatar>관</UserAvatar>
        <UserInfo>
          <UserName>관리자</UserName>
          <UserRole>프론트엔드 팀장</UserRole>
        </UserInfo>
        <LogoutButton onClick={() => window.location.href = '/'} aria-label="Logout">
          {renderIcon('🚪')}
        </LogoutButton>
      </UserSection>
    </SidebarContainer>
  );
};

export default Sidebar;
