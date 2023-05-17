import '@/styles/globals.css'
import { Analytics } from '@vercel/analytics/react';
import Head from "next/head"

export default function App({ Component, pageProps }) {
  return (
  <main>
    <Head>
      <link rel="shortcut icon" href="/MJG.png"/>
    </Head>
    <Component {...pageProps} />
    <Analytics />
  </main>
  )
}
