import { GlobalStyle } from "../components/GlobalStyle/GlobalStyle";
import { SessionProvider } from "next-auth/react";
import { SWRConfig } from "swr";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <SessionProvider session={session}>
        <SWRConfig
          value={{
            fetcher: (resource, init) =>
              fetch(resource, init).then((res) => res.json()),
            refreshInterval: 3000,
          }}
        >
          <GlobalStyle />
          <Component {...pageProps} />
        </SWRConfig>
      </SessionProvider>
    </>
  );
}

export default MyApp;
