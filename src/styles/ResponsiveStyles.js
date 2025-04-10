// src/styles/ResponsiveStyles.js
import { css } from 'styled-components';

export const breakpoints = {
  xs: '320px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1400px',
};

export const devices = {
  xs: `(min-width: ${breakpoints.xs})`,
  sm: `(min-width: ${breakpoints.sm})`,
  md: `(min-width: ${breakpoints.md})`,
  lg: `(min-width: ${breakpoints.lg})`,
  xl: `(min-width: ${breakpoints.xl})`,
  xxl: `(min-width: ${breakpoints.xxl})`,
};

export const media = {
  xs: (...args) => css`
    @media ${devices.xs} {
      ${css(...args)}
    }
  `,
  sm: (...args) => css`
    @media ${devices.sm} {
      ${css(...args)}
    }
  `,
  md: (...args) => css`
    @media ${devices.md} {
      ${css(...args)}
    }
  `,
  lg: (...args) => css`
    @media ${devices.lg} {
      ${css(...args)}
    }
  `,
  xl: (...args) => css`
    @media ${devices.xl} {
      ${css(...args)}
    }
  `,
  xxl: (...args) => css`
    @media ${devices.xxl} {
      ${css(...args)}
    }
  `,
};