import { useEffect } from 'react'
import Head from 'next/head'
import styled from '@emotion/styled'
import grained from '~/lib/grained'
import Button from '~/components/_shared/Button/Button'
import { PageFrame } from '~/components/screen'
import { Hero } from '~/components/page_components/top'

export default function Home() {
  useEffect(() => {
    grained('#main-bg')
    grained('#secondary-bg')
  })

  return (
    <>
      <Head>
        <title>Hiro Degawa</title>
      </Head>
      <PageFrame />
      <TopSection id="main-bg">
        <Hero />
      </TopSection>
      <Entrance id="secondary-bg">
        <Button mode="link" href="/" colorCode="#ff0000">
          ENTER
        </Button>
      </Entrance>
    </>
  )
}

const TopSection = styled.section`
  display: block;
  position: relative;
  background-color: #ff0000;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Entrance = styled.section`
  display: block;
  position: relative;
  background-color: #ff0000;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
