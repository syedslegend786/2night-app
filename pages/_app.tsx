import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
export default function App({ Component, pageProps: { session, ...props } }: AppProps) {
  return (
    <>
      <main>
        <Component {...props} />
      </main>
    </>
  )
}
