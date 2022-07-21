import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    overflow: hidden;
    background-color: #FCFCFC;
    font-family: Satoshi-variable, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  @font-face {
    font-family: Satoshi-variable;
    src: url(/public/static/fonts/Satoshi-Variable.ttf);
  }
`;
