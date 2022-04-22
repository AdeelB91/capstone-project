import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap');  * {

    box-sizing: border-box;
    margin:0;
    padding:0;
  }
  body {
    color: #0B2B40;
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif ;
    margin: 0;
    padding: 0;
    background-color: #f8f7f2
  }

  main {
    background-size: 100%;
    background-repeat: repeat;
    background-color: #F8F7F2;
    padding: 0 0 7vh;
  }

  h1 {
    font-family: 'Josefin Sans', sans-serif;  
  }`;
