import { createGlobalStyle } from 'styled-components';

const ResponsiveStyles = createGlobalStyle`
  /* 반응형 디자인을 위한 미디어 쿼리 */
  
  /* 모바일 우선 접근법 사용 */
  
  /* 기본 스타일 (모바일) */
  :root {
    --sidebar-width: 0px;
  }
  
  /* 태블릿 (768px 이상) */
  @media (min-width: 768px) {
    :root {
      --sidebar-width: 250px;
    }
    
    .mobile-only {
      display: none !important;
    }
    
    .tablet-hidden {
      display: none !important;
    }
  }
  
  /* 데스크탑 (1024px 이상) */
  @media (min-width: 1024px) {
    .tablet-only {
      display: none !important;
    }
    
    .desktop-hidden {
      display: none !important;
    }
  }
  
  /* 대형 화면 (1440px 이상) */
  @media (min-width: 1440px) {
    .container {
      max-width: 1320px;
      margin: 0 auto;
    }
  }
  
  /* 모바일에서 사이드바 숨김 */
  @media (max-width: 767px) {
    .desktop-sidebar {
      display: none !important;
    }
    
    .mobile-menu-button {
      display: block !important;
    }
    
    .main-content {
      margin-left: 0 !important;
      width: 100% !important;
    }
    
    .card-grid {
      grid-template-columns: 1fr !important;
    }
    
    .filter-container {
      flex-direction: column !important;
    }
    
    .filter-item {
      width: 100% !important;
      margin-bottom: 0.5rem !important;
    }
    
    .table-responsive {
      overflow-x: auto !important;
    }
    
    .hide-on-mobile {
      display: none !important;
    }
    
    .modal-content {
      width: 90% !important;
      max-width: 90% !important;
    }
  }
  
  /* 태블릿에서 레이아웃 조정 */
  @media (min-width: 768px) and (max-width: 1023px) {
    .card-grid {
      grid-template-columns: repeat(2, 1fr) !important;
    }
    
    .hide-on-tablet {
      display: none !important;
    }
  }
`;

export default ResponsiveStyles;
