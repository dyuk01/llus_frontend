// src/styles/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    /* Primary Colors */
    --primary-50: #F0F7FF;
    --primary-100: #E0EFFE;
    --primary-200: #BAE0FD;
    --primary-300: #7CC6FB;
    --primary-400: #36ADF8;
    --primary-500: #0D94EC;
    --primary-600: #0270C2;
    --primary-700: #065A9B;
    --primary-800: #0A4876;
    --primary-900: #0D3B62;
    
    /* Neutral Colors */
    --neutral-50: #F8FAFC;
    --neutral-100: #F1F5F9;
    --neutral-200: #E2E8F0;
    --neutral-300: #CBD5E1;
    --neutral-400: #94A3B8;
    --neutral-500: #64748B;
    --neutral-600: #475569;
    --neutral-700: #334155;
    --neutral-800: #1E293B;
    --neutral-900: #0F172A;
    
    /* Error/Success Colors */
    --error-50: #FEF2F2;
    --error-100: #FEE2E2;
    --error-500: #EF4444;
    --error-600: #DC2626;
    --error-700: #B91C1C;
    
    --success-50: #F0FDF4;
    --success-100: #DCFCE7;
    --success-500: #22C55E;
    --success-600: #16A34A;
    --success-700: #15803D;
    
    /* Warning Colors */
    --warning-50: #FFFBEB;
    --warning-100: #FEF3C7;
    --warning-500: #F59E0B;
    --warning-600: #D97706;
    --warning-700: #B45309;
    
    /* Font Sizes */
    --font-size-xs: 0.75rem;    /* 12px */
    --font-size-sm: 0.875rem;   /* 14px */
    --font-size-base: 1rem;     /* 16px */
    --font-size-lg: 1.125rem;   /* 18px */
    --font-size-xl: 1.25rem;    /* 20px */
    --font-size-2xl: 1.5rem;    /* 24px */
    --font-size-3xl: 1.875rem;  /* 30px */
    --font-size-4xl: 2.25rem;   /* 36px */
    
    /* Font Weights */
    --font-weight-light: 300;
    --font-weight-normal: 400;
    --font-weight-medium: 500;
    --font-weight-semibold: 600;
    --font-weight-bold: 700;
    
    /* Spacing */
    --spacing-1: 0.25rem;  /* 4px */
    --spacing-2: 0.5rem;   /* 8px */
    --spacing-3: 0.75rem;  /* 12px */
    --spacing-4: 1rem;     /* 16px */
    --spacing-5: 1.25rem;  /* 20px */
    --spacing-6: 1.5rem;   /* 24px */
    --spacing-8: 2rem;     /* 32px */
    --spacing-10: 2.5rem;  /* 40px */
    --spacing-12: 3rem;    /* 48px */
    --spacing-16: 4rem;    /* 64px */
    
    /* Border Radius */
    --border-radius-sm: 0.125rem;  /* 2px */
    --border-radius-md: 0.25rem;   /* 4px */
    --border-radius-lg: 0.5rem;    /* 8px */
    --border-radius-xl: 0.75rem;   /* 12px */
    --border-radius-2xl: 1rem;     /* 16px */
    --border-radius-full: 9999px;
    
    /* Shadows */
    --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    
    /* Z-index */
    --z-index-dropdown: 1000;
    --z-index-sticky: 1020;
    --z-index-fixed: 1030;
    --z-index-modal-backdrop: 1040;
    --z-index-modal: 1050;
    --z-index-popover: 1060;
    --z-index-tooltip: 1070;
    
    /* Transition */
    --transition-fast: 150ms;
    --transition-normal: 300ms;
    --transition-slow: 500ms;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    font-family: 'Noto Sans KR', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 16px;
    line-height: 1.5;
    color: var(--neutral-800);
    background-color: var(--neutral-50);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: var(--font-weight-semibold);
    line-height: 1.25;
    margin-bottom: var(--spacing-4);
    color: var(--neutral-900);
  }

  h1 {
    font-size: var(--font-size-3xl);
  }

  h2 {
    font-size: var(--font-size-2xl);
  }

  h3 {
    font-size: var(--font-size-xl);
  }

  h4 {
    font-size: var(--font-size-lg);
  }

  p {
    margin-bottom: var(--spacing-4);
  }

  a {
    color: var(--primary-600);
    text-decoration: none;
    transition: color var(--transition-fast);
  }

  a:hover {
    color: var(--primary-700);
  }

  button, input, select, textarea {
    font-family: inherit;
    font-size: 100%;
  }

  button {
    cursor: pointer;
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  th, td {
    padding: var(--spacing-3) var(--spacing-4);
    text-align: left;
    border-bottom: 1px solid var(--neutral-200);
  }

  th {
    font-weight: var(--font-weight-medium);
    background-color: var(--neutral-50);
  }

  tbody tr:hover {
    background-color: var(--neutral-50);
  }

  /* Scrollbar styling */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: var(--neutral-100);
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--neutral-300);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: var(--neutral-400);
  }
`;

export default GlobalStyles;