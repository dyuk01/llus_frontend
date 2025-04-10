import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import ResponsiveSidebar from './ResponsiveSidebar';

// Icons (you can replace these with actual icon components)
const DashboardIcon = () => <span>📊</span>;
const ProductsIcon = () => <span>📦</span>;
const CustomersIcon = () => <span>👥</span>;
const OrdersIcon = () => <span>🛒</span>;
const StatisticsIcon = () => <span>📈</span>;
const SettingsIcon = () => <span>⚙️</span>;
const MenuIcon = () => <span>☰</span>;
const BellIcon = () => <span>🔔</span>;
const UserIcon = () => <span>👤</span>;

const ResponsiveDashboardLayout = ({ children, title }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  
  const navItems = [
    { 
      path: '/dashboard', 
      name: '대시보드', 
      icon: <DashboardIcon /> 
    },
    { 
      path: '/products', 
      name: '상품 관리', 
      icon: <ProductsIcon /> 
    },
    { 
      path: '/customers', 
      name: '고객 관리', 
      icon: <CustomersIcon /> 
    },
    { 
      path: '/orders', 
      name: '주문/배송 관리', 
      icon: <OrdersIcon /> 
    },
    { 
      path: '/statistics', 
      name: '매출 통계', 
      icon: <StatisticsIcon /> 
    },
    { 
      path: '/settings', 
      name: '설정', 
      icon: <SettingsIcon /> 
    }
  ];
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  
  return (
    <LayoutContainer>
      <ResponsiveSidebar 
        isOpen={sidebarOpen} 
        onClose={() => setSidebarOpen(false)}
        navItems={navItems}
        activePath={location.pathname}
      />
      
      <MainContent>
        <Header>
          <HeaderLeft>
            <MenuButton onClick={toggleSidebar}>
              <MenuIcon />
            </MenuButton>
            <PageTitle>{title}</PageTitle>
          </HeaderLeft>
          
          <HeaderRight>
            <HeaderButton>
              <BellIcon />
              <NotificationBadge>3</NotificationBadge>
            </HeaderButton>
            <UserProfile>
              <UserAvatar>
                <UserIcon />
              </UserAvatar>
              <UserName>사용자</UserName>
            </UserProfile>
          </HeaderRight>
        </Header>
        
        <ContentWrapper>
          {children}
        </ContentWrapper>
      </MainContent>
    </LayoutContainer>
  );
};

// Styled components for the dashboard layout
const LayoutContainer = styled.div`
  display: flex;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #F5F5F5;
  min-height: 100vh;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  padding: 0 24px;
  background-color: #FFFFFF;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 100;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;

const MenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-right: 16px;
  
  &:hover {
    background-color: #F5F5F5;
  }
  
  @media (min-width: 1024px) {
    display: none;
  }
`;

const PageTitle = styled.h1`
  font-size: 20px;
  font-weight: 600;
  color: #212121;
  margin: 0;
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-left: 8px;
  position: relative;
  
  &:hover {
    background-color: #F5F5F5;
  }
`;

const NotificationBadge = styled.span`
  position: absolute;
  top: 4px;
  right: 4px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: #F44336;
  color: #FFFFFF;
  font-size: 10px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 16px;
  cursor: pointer;
`;

const UserAvatar = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #E3F2FD;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  
  span {
    font-size: 18px;
  }
`;

const UserName = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #424242;
  
  @media (max-width: 480px) {
    display: none;
  }
`;

const ContentWrapper = styled.div`
  flex: 1;
  overflow: auto;
`;

export default ResponsiveDashboardLayout;