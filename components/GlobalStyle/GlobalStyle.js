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
    /* background-image: url("/SVG/Vector 7.svg"); */
    background-size: 100%;
    background-repeat: repeat;
    min-height: 667px;
    padding: 3vh 1vh;
    margin-bottom: 5vh;
    /* background-color: #dee3e4;
    background-color: #c6cbd1;
    background-color: #e0ddd8;
    background-color: #D2D6D9;
    background-color: #B4C8D9; */
    background-color: #DBDEE8;
  }`;
