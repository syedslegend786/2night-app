import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
export default function App({ Component, pageProps: { session, ...props } }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </Head>
      <main>
        <Component {...props} />
      </main>
    </>
  )
}
