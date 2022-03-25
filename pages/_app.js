import { GlobalStyle } from "../components/GlobalStyle/GlobalStyle";
import Navigation from "../components/Navigation/Navigation";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
      <Navigation />
    </>
  );
}

export default MyApp;
