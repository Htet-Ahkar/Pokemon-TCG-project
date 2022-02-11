import Head from 'next/head'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

// Layout
import { Layout } from '../components'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title> Home | TCG Marketplace</title>
        <link rel="icon" href="/Logo.svg" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
