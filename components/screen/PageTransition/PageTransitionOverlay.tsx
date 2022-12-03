import styled from '@emotion/styled'
import { useState, useEffect, useRef } from 'react'
import { wait } from '~/lib/helper'
import { gsap } from 'gsap'

export const PageTransitionOverlay: React.FC = () => {
  const [bar1, bar2, bar3, bar4, bar5, bar6, bar7] = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ]

  const coverScreen = () => {
    gsap.to(bar1.current, {
      duration: 0.4,
      delay: 0.5,
      x: 0,
    })
    gsap.to(bar2.current, {
      duration: 0.4,
      delay: 0.3,
      x: 0,
    })
    gsap.to(bar3.current, {
      duration: 0.4,
      delay: 0.1,
      x: 0,
    })
    gsap.to(bar4.current, {
      duration: 0.4,
      x: 0,
    })
    gsap.to(bar5.current, {
      duration: 0.4,
      delay: 0.2,
      x: 0,
    })
    gsap.to(bar6.current, {
      duration: 0.4,
      delay: 0.4,
      x: 0,
    })
    gsap.to(bar7.current, {
      duration: 0.4,
      delay: 0.6,
      x: 0,
    })
  }

  const releaseScreen = () => {
    gsap.to(bar1.current, {
      duration: 0.4,
      delay: 0.5,
      x: -1 * window.innerWidth,
    })
    gsap.to(bar2.current, {
      duration: 0.4,
      delay: 0.3,
      x: -1 * window.innerWidth,
    })
    gsap.to(bar3.current, {
      duration: 0.4,
      delay: 0.1,
      x: -1 * window.innerWidth,
    })
    gsap.to(bar4.current, {
      duration: 0.4,
      x: -1 * window.innerWidth,
    })
    gsap.to(bar5.current, {
      duration: 0.4,
      delay: 0.2,
      x: -1 * window.innerWidth,
    })
    gsap.to(bar6.current, {
      duration: 0.4,
      delay: 0.4,
      x: -1 * window.innerWidth,
    })
    gsap.to(bar7.current, {
      duration: 0.4,
      delay: 0.6,
      x: -1 * window.innerWidth,
    })
  }

  const animate = async () => {
    coverScreen()
    await wait(1.5)
    releaseScreen()
  }

  useEffect(() => {
    console.log('rendered!')
    animate()
  }, [])

  return (
    <Container>
      <Bar ref={bar1} />
      <Bar ref={bar2} />
      <Bar ref={bar3} />
      <Bar ref={bar4}>
        <img src="/assets/main_logo.svg" alt="Hiro Degawa logo" />
      </Bar>
      <Bar ref={bar5} />
      <Bar ref={bar6} />
      <Bar ref={bar7} />
    </Container>
  )
}

export default PageTransitionOverlay

const Container = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  left: 0;
  top: 0;
  display: grid;
  grid-template-rows: repeat(7, 1fr);
  grid-template-columns: 1fr;
  pointer-events: none;
  z-index: 49;
`

const Bar = styled.div`
  width: 100%;
  height: 100%;
  transform: translateX(100%);
  position: relative;
  background-color: #000;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    position: relative;
    display: block;
    object-fit: contain;
    height: 80%;
  }
`
