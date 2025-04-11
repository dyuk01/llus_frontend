import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    /* Primary Colors - 보라색 계열 */
    --primary-100: #8A4FFF;
    --primary-200: #7339FF;
    --primary-300: #5E28CC;
    --primary-400: #4A1D99;
    --primary-500: #361466;
    
    /* Secondary Colors - 주황색 계열 */
    --secondary-100: #FFB84D;
    --secondary-200: #FFA01A;
    --secondary-300: #FF8C00;
    
    /* Neutral Colors */
    --neutral-100: #FFFFFF;
    --neutral-200: #F5F5F5;
    --neutral-300: #E0E0E0;
    --neutral-400: #BDBDBD;
    --neutral-500: #9E9E9E;
    --neutral-600: #757575;
    --neutral-700: #616161;
    --neutral-800: #424242;
    --neutral-900: #212121;
    --neutral-1000: #000000;
    
    /* Alert Colors */
    --error: #FF3B30;
    --success: #34C759;
    --warning: #FF9500;
    
    /* Font Sizes */
    --font-size-xs: 0.75rem;    /* 12px */
    --font-size-sm: 0.875rem;   /* 14px */
    --font-size-md: 1rem;       /* 16px */
    --font-size-lg: 1.125rem;   /* 18px */
    --font-size-xl: 1.25rem;    /* 20px */
    --font-size-2xl: 1.5rem;    /* 24px */
    --font-size-3xl: 1.875rem;  /* 30px */
    --font-size-4xl: 2.25rem;   /* 36px */
    
    /* Spacing */
    --spacing-xs: 0.25rem;      /* 4px */
    --spacing-sm: 0.5rem;       /* 8px */
    --spacing-md: 1rem;         /* 16px */
    --spacing-lg: 1.5rem;       /* 24px */
    --spacing-xl: 2rem;         /* 32px */
    --spacing-2xl: 3rem;        /* 48px */
    
    /* Border Radius */
    --border-radius-sm: 0.25rem;  /* 4px */
    --border-radius-md: 0.5rem;   /* 8px */
    --border-radius-lg: 1rem;     /* 16px */
    --border-radius-full: 9999px;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'SUIT', 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: var(--neutral-200);
    color: var(--neutral-900);
    line-height: 1.5;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
  
  button, input, select, textarea {
    font-family: inherit;
    font-size: inherit;
  }
  
  button {
    cursor: pointer;
    border: none;
    background: none;
  }
  
  ul, ol {
    list-style: none;
  }
  
  img {
    max-width: 100%;
    height: auto;
  }
  
  /* 추가 폰트 설정 */
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
  @import url('https://cdn.jsdelivr.net/gh/sunn-us/SUIT/fonts/static/woff2/SUIT.css');
`;

export default GlobalStyles;
