// import App from "next/app";
import type { AppProps /*, AppContext */ } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'
function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {' '}
      <Head>
        <title>React Avançado - Boilerplate</title>
        <link rel="shortcut icon" href="" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme color" content="#06092B" />
        <meta
          name="description"
          content="A simple project starter to work with Typescript"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
