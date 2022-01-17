import { createGlobalStyle } from 'styled-components';
import background from "../Assets/Images/BackgroundHomeNight.jpg";
 
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
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
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
        &:hover {
          background-color: #A9A9A9;
          width: 100%;
          transition: .2s all ease-in-out;
          color: #696969;
      }
    }

    .Quote {
      background: #808080;
      color: white;
    }

    .BackgroundHome {
      background: url(${background}) no-repeat center center fixed;
      background-size: cover;
    }
  }
`;

export default GlobalStyle;