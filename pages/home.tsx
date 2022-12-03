import { useEffect } from 'react'
import Head from 'next/head'
import styled from '@emotion/styled'
import grained from '~/lib/grained'
import Button from '~/components/_shared/Button/Button'
import { Hero } from '~/components/page_components/top'
import Link from 'next/link'

export default function Home() {
  useEffect(() => {
    grained('#main-bg')
  })

  return (
    <>
      <Head>
        <title>Hiro Degawa</title>
      </Head>
      <Screen id="main-bg">
        <Wrapper></Wrapper>
      </Screen>
    </>
  )
}

const Screen = styled.section`
  display: block;
  position: relative;
  background-color: #fff;
  height: 100vh;
`

const Wrapper = styled.div`
  height: 100%;
  max-width: 1280px;
  margin: 0 auto;
`
