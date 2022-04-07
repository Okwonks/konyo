import Head from 'next/head';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{`${process.env.NEXT_PUBLIC_SITE_NAME || 'Konyo - Help Desk'}`}</title>
      </Head>
      <h1>TODO</h1>
      <Component {...pageProps} />
    </>
  );
}

export default App;
