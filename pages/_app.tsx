import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { PageFrame } from '~/components/screen'
import Cursor from '~/components/screen/Cursor'
import { PageTransitionWrapper } from '~/components/screen/PageTransition'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    setTimeout(() => {
      document
        .querySelectorAll('a')
        .forEach((a) => (a.style.pointerEvents = 'all'))
    }, 1000)
  })
  return (
    <>
      <Cursor />
      <PageFrame />
      <PageTransitionWrapper>
        <Component {...pageProps} />
      </PageTransitionWrapper>
    </>
  )
}
