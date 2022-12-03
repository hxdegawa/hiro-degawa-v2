import { useEffect } from 'react'
import Head from 'next/head'
import styled from '@emotion/styled'
import grained from '~/lib/grained'
import Button from '~/components/_shared/Button/Button'
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
      <TopSection id="main-bg">
        <Hero />
      </TopSection>
      <Entrance id="secondary-bg">
        <Button mode="link" href="/home" colorCode="#fafafa">
          ENTER
        </Button>
      </Entrance>
    </>
  )
}

const TopSection = styled.section`
  display: block;
  position: relative;
  background-color: #fafafa;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Entrance = styled.section`
  display: block;
  position: relative;
  background-color: #fafafa;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
