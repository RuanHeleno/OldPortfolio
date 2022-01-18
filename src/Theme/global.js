import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    overflow: hidden;
    background: #FAF0E6;
    color: black;
    font-size: 20px;
    height: 100vh;
    width: 100vw;
    margin: 0;
    padding: 0;
    font-family: Tahoma, Arial, sans-serif;
    transition: all 0.25s linear;
  }

  .Menu {
    background: #FFE4C4;
  }

  .black-content {
    background: #1C1C1C;
    color: white;
    
    .Menu {
      background: #363636;
    }

    .Links {
        color: #FFF;

        &:hover {
          transition: .2s all ease-in-out;
          color: darkgray;
      }
    }

    .Quote {
      background: #808080;
      color: white;
    }
  }
`;

export default GlobalStyle;