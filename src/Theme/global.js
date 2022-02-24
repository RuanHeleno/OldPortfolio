import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body, html {
    box-sizing: border-box;
    width: 100vw;
    height: 100%;
    max-width: 100vw !important;
    margin: 0 !important;
    padding: 0 !important;
  }

  body {
    overflow-x: hidden;
    background: #082032;
    color: white;
    font-family: Tahoma, Arial, sans-serif;
    transition: all 0.25s linear;
    animation-duration: 2s;
  }

  * {
    box-sizing: inherit;
  }
`;

export default GlobalStyle;