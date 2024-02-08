import { createGlobalStyle } from 'styled-components';
import { colors } from './colors.ts';

export const GlobalStyle = createGlobalStyle`
  html {
    min-height: 100vh;
    font-family: 'Nunito', sans-serif;
  }
  
  body {
    min-height: 100vh;
    margin: 0;
  }
  
  #root {
    min-height: 100vh;
  }
  
  a {
    color: ${colors.light};
  }
`;
