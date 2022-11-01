// import Head from 'next/head'
// import Image from 'next/image'

import { useEffect } from 'react'
import styled from '@emotion/styled'
import { CircleText, Frame } from '~/components/screen'
import grained from '~/lib/grained'
import Cursor from '~/components/screen/Cursor'
import Button from '~/components/_shared/Button/Button'

export default function Home() {
  useEffect(() => {
    grained('#main-bg')
    grained('#secondary-bg')
  })

  return (
    <>
      <Cursor />
      <Frame />
      <TopSection id="main-bg">
        <CircleText />
        <Logo src="/assets/main_logo.svg" alt="logo" />
      </TopSection>
      <Entrance id="secondary-bg">
        <Button>ENTER</Button>
      </Entrance>
    </>
  )
}

const TopSection = styled.section`
  display: block;
  position: relative;
  background-color: #0000ff;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Entrance = styled.section`
  display: block;
  position: relative;
  background-color: #0000ff;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Logo = styled.img`
  pointer-events: none;
  object-fit: contain;
  max-width: 50%;
  z-index: 10;
`
