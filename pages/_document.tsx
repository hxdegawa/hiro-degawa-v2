import { Global } from '@emotion/react'
import { Html, Head, Main, NextScript } from 'next/document'
import { GlobalStyle } from '~/styles/global'
import { PageTransition } from '~/components/screen'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Noto+Sans+JP:wght@300;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Global styles={GlobalStyle} />
      <body>
        <PageTransition>
          <Main />
        </PageTransition>
        <NextScript />
      </body>
    </Html>
  )
}
