// import Head from 'next/head'
// import Image from 'next/image'

import { useEffect } from 'react'
import styled from '@emotion/styled'
import { CircleText, Frame } from '~/components/screen'
import grained from '~/lib/grained'

export default function Home() {
  useEffect(() => {
    grained('#main-bg')
  })

  return (
    <MainPage id="main-bg">
      <Frame />
      <CircleText />
      <Logo src="/assets/main_logo.svg" alt="logo" />
    </MainPage>
  )
}

const MainPage = styled.div`
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
