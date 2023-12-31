import "@/styles/globals.css";
import Router from "next/router";
import NProgrress from "nprogress";
import Head from "next/head";
import Layout from "../components/Layout";
import { ChakraProvider } from "@chakra-ui/react";
export default function App({ Component, pageProps }) {
  NProgrress.configure({ showSpinner: false });
  Router.events.on("routeChangeStart", () => {
    NProgrress.start();
  });

  Router.events.on("routeChangeComplete", () => {
    NProgrress.done();
  });
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}
