import { GlobalStyle } from "../components/GlobalStyle/GlobalStyle";
import Navigation from "../components/Navigation/Navigation";
import Header from "../components/Header/Header";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
      <Navigation />
    </>
  );
}

export default MyApp;
