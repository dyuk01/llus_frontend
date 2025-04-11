import React from 'react';
import styled from 'styled-components';
import Sidebar from '../../components/layout/Sidebar';

const LayoutContainer = styled.div`
  display: flex;
`;

const MainContent = styled.main`
  margin-left: 250px;
  width: calc(100% - 250px);
  min-height: 100vh;
`;

const DashboardLayout = ({ children }) => {
  return (
    <LayoutContainer>
      <Sidebar />
      <MainContent>
        {children}
      </MainContent>
    </LayoutContainer>
  );
};

export default DashboardLayout;
