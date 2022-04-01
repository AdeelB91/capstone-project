import { GlobalStyle } from "../components/GlobalStyle/GlobalStyle";
import { SessionProvider } from "next-auth/react";
import Navigation from "../components/Navigation/Navigation";
import Header from "../components/Header/Header";


function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>

      <SessionProvider session={session}>
        <GlobalStyle />
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}

export default MyApp;
