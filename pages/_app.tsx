import type { AppProps } from 'next/app'
import Cursor from '~/components/screen/Cursor'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Cursor />
      <Component {...pageProps} />
    </>
  )
}
