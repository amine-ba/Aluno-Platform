import React from "react";
import { AppProps } from "next/app";
import { StyledThemeProvider } from "@definitions/styled-components";
import { RootStoreProvider } from "@mobx";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <StyledThemeProvider>
      <RootStoreProvider>
        <Component {...pageProps} />
      </RootStoreProvider>
    </StyledThemeProvider>
  );
}

export default MyApp;
