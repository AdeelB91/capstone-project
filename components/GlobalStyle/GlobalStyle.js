import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin:0;
    padding:0;
  }
  body {
    color: #0B2B40;
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif ;
    margin: 0;
    padding: 0;
    
  }
  main {
    background-image: url("/SVG/Vector 7.svg");
    background-repeat: repeat;
    background-size: 800px;
    background-position: 100%;
    padding: 2vh;
    margin-bottom: 5vh;

  }
`;
