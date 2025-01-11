import "@/styles/globals.css";
// import Layout from "./layout";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="logo.svg" />
        <title>HACK NOVA 2.0 | NSCC-SRM</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
