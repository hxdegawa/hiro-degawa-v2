import { useEffect } from 'react'
import Head from 'next/head'
import styled from '@emotion/styled'
import grained from '~/lib/grained'
import Button from '~/components/_shared/Button/Button'
import { Hero } from '~/components/page_components/top'
import { PageFrame } from '~/components/screen/PageFrame'

export default function Home() {
  useEffect(() => {
    grained('#container')
  })

  return (
    <>
      <PageFrame />
      <main id="container" style={{ backgroundColor: '#0000ff' }}>
        <Head>
          <title>Hiro Degawa</title>
        </Head>
        <TopSection id="main-bg">
          <Hero />
        </TopSection>
        <Entrance id="secondary-bg">
          <Button mode="link" href="/home" colorCode="#fafafa">
            ENTER
          </Button>
        </Entrance>
      </main>
    </>
  )
}

const TopSection = styled.section`
  display: block;
  position: relative;
  background-color: transparent;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Entrance = styled.section`
  display: block;
  position: relative;
  background-color: transparent;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
