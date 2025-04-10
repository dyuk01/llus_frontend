import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CloseIcon = () => <span>✕</span>;

const ResponsiveSidebar = ({ isOpen, onClose, navItems, activePath }) => {
  return (
    <>
      <SidebarOverlay isOpen={isOpen} onClick={onClose} />
      <SidebarContainer $isOpen={isOpen}>
        <SidebarHeader>
          <Logo>
            <LogoImg src="/logo.png" alt="마켓봇 로고" />
            <LogoText>마켓봇</LogoText>
          </Logo>
          <CloseButton onClick={onClose}>
            <CloseIcon />
          </CloseButton>
        </SidebarHeader>
        
        <NavMenu>
          {navItems.map((item, index) => (
            <NavItem key={index} $isActive={activePath === item.path}>
              <NavLink to={item.path} onClick={onClose}>
                <NavIcon>{item.icon}</NavIcon>
                <NavText>{item.name}</NavText>
              </NavLink>
            </NavItem>
          ))}
        </NavMenu>
        
        <SidebarFooter>
          <VersionInfo>마켓봇 v1.0.0</VersionInfo>
          <SupportLink href="mailto:support@marketbot.com">
            도움이 필요하신가요?
          </SupportLink>
        </SidebarFooter>
      </SidebarContainer>
    </>
  );
};

// Styled components for the sidebar
const SidebarOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 900;
  opacity: ${props => props.$isOpen ? 1 : 0};
  visibility: ${props => props.$isOpen ? 'visible' : 'hidden'};
  transition: opacity 0.3s ease, visibility 0.3s ease;
  
  @media (min-width: 1024px) {
    display: none;
  }
`;

const SidebarContainer = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 280px;
  height: 100%;
  background-color: #FFFFFF;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  transform: ${props => props.$isOpen ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform 0.3s ease;
  
  @media (min-width: 1024px) {
    position: sticky;
    transform: none;
  }
`;

const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid #EEEEEE;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImg = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 8px;
`;

const LogoText = styled.h1`
  font-size: 20px;
  font-weight: 700;
  color: #1E88E5;
  margin: 0;
`;

const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  
  &:hover {
    background-color: #F5F5F5;
  }
  
  @media (min-width: 1024px) {
    display: none;
  }
`;

const NavMenu = styled.ul`
  list-style: none;
  padding: 16px 0;
  margin: 0;
  flex: 1;
  overflow-y: auto;
`;

const NavItem = styled.li`
  margin: 4px 0;
  padding: 0 16px;
`;

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  border-radius: 8px;
  text-decoration: none;
  color: ${props => props.$isActive ? '#1E88E5' : '#616161'};
  background-color: ${props => props.$isActive ? '#E3F2FD' : 'transparent'};
  font-weight: ${props => props.$isActive ? '600' : '500'};
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${props => props.$isActive ? '#E3F2FD' : '#F5F5F5'};
  }
`;

const NavIcon = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
`;

const NavText = styled.span`
  font-size: 14px;
`;

const SidebarFooter = styled.div`
  padding: 16px;
  border-top: 1px solid #EEEEEE;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const VersionInfo = styled.div`
  font-size: 12px;
  color: #9E9E9E;
  margin-bottom: 8px;
`;

const SupportLink = styled.a`
  font-size: 12px;
  color: #1E88E5;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

export default ResponsiveSidebar;