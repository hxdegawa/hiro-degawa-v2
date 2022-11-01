import React, { useEffect, useRef } from 'react'
import styled from '@emotion/styled'
import { gsap } from 'gsap'

const Cursor: React.FC = () => {
  const inner = useRef(null)
  const outer = useRef(null)

  const moveCursor = (e: MouseEvent) => {
    const target = e.target as Element

    if (target.localName === 'a' || target.localName === 'button') {
      gsap.to(inner.current, {
        duration: 0.01,
        x: e.clientX,
        y: e.clientY,
        scale: 1.5,
      })
      gsap.to(outer.current, {
        duration: 0.3,
        x: e.clientX,
        y: e.clientY,
        scale: 3,
      })
    } else {
      gsap.to(inner.current, {
        duration: 0.001,
        x: e.clientX,
        y: e.clientY,
        scale: 1,
      })
      gsap.to(outer.current, {
        duration: 0.3,
        x: e.clientX,
        y: e.clientY,
        scale: 1,
      })
    }
  }

  useEffect(() => {
    document.body.addEventListener('mousemove', (e) => moveCursor(e))
  }, [])

  return (
    <>
      <OuterCursor ref={outer} />
      <InnerCursor ref={inner} />
    </>
  )
}

const OuterCursor = styled.div`
  position: fixed;
  pointer-events: none;
  border: solid 2px #000;
  border-radius: 10px;
  height: 16px;
  width: 16px;
  filter: invert(100%);
  mix-blend-mode: exclusion;
  will-change: filter;
  transform: translate(-50%, -50%);
  z-index: 50;

  @media screen and (max-width: 960px) {
    display: none;
  }
`

const InnerCursor = styled.div`
  position: fixed;
  pointer-events: none;
  background-color: #000;
  border-radius: 3px;
  height: 6px;
  width: 6px;
  transform: translate(-50%, -50%);
  z-index: 50;
  filter: invert(100%);
  mix-blend-mode: exclusion;

  @media screen and (max-width: 960px) {
    display: none;
  }
`

export default Cursor
