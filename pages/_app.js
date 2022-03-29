import { GlobalStyle } from "../components/GlobalStyle/GlobalStyle";
import Navigation from "../components/Navigation/Navigation";
import styled from "styled-components";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <AppHeader>
        <AppTitle>App-Title</AppTitle>
      </AppHeader>
      <Component {...pageProps} />
      <Navigation />
    </>
  );
}
const AppHeader = styled.header`
  background-color: darkblue;
  height: 100px;
  display: flex;
  align-items: center;
`;

const AppTitle = styled.h1`
  color: white;
`;

export default MyApp;
