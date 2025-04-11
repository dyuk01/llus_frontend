import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ResponsiveSidebar from './ResponsiveSidebar';

const LayoutContainer = styled.div`
  display: flex;
`;

const MainContent = styled.main`
  margin-left: var(--sidebar-width);
  width: calc(100% - var(--sidebar-width));
  min-height: 100vh;
  transition: margin-left 0.3s ease, width 0.3s ease;
  
  @media (max-width: 767px) {
    margin-left: 0;
    width: 100%;
    padding-top: 60px; /* Space for mobile menu button */
  }
`;

const ResponsiveDashboardLayout = ({ children }) => {
  return (
    <LayoutContainer>
      <ResponsiveSidebar />
      <MainContent className="main-content">
        {children}
      </MainContent>
    </LayoutContainer>
  );
};

ResponsiveDashboardLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default ResponsiveDashboardLayout;
