import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  html, body {
    height: 100%;
  }

  #root {
    min-height: 100%;
    padding-bottom: 30px;
    box-sizing: border-box;
    overflow: auto;    
  }

  body {
    font-family: 'Roboto', sans-serif;
    background: #f7f7f7;
    font-size: 14px;
  }

  input:focus, button:focus, a:focus {
    outline: none;
  }
`;

export default GlobalStyle;