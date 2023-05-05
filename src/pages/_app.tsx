import type {AppProps} from 'next/app'
import React, { useEffect } from "react";
import Head from "next/head";
import '@/styles/globals.css';

// import {CustomThemeProvider} from "@/data/contexts/ThemeContext";

function MyApp({Component, pageProps}: AppProps) {
  useEffect(() => {
    document.querySelector('#jss-server-side')?.remove();
  }, []);

  return (
      <>
        <Head>
          <title>
            Velv Frontend
          </title>
        </Head>
        <main>
            <Component {...pageProps} />
        </main>
      </>
  );
}

const AppProviderContainer: React.FC<AppProps> = (props) => {
  return <MyApp {...props} />;
}

export default AppProviderContainer;