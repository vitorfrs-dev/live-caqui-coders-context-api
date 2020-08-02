import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
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