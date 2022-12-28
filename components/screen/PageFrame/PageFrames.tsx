import styled from '@emotion/styled'
import { contrastColor } from 'contrast-color'
import { useEffect, useState } from 'react'
import Viewport from '../FullWindow/FullWindow'
import Wedge from './Frame'
import rgbHex from 'rgb-hex'
import { useRouter } from 'next/router'

const Frame: React.FC = () => {
  const { pathname } = useRouter()
  const [frameColor, setFrameColor] = useState('#fff')

  useEffect(() => {
    setFrameColor(
      contrastColor({
        bgColor:
          rgbHex(
            document.querySelector('main')?.style.backgroundColor || '#fff'
          ) || '#fff',
      })
    )
  }, [pathname])

  useEffect(() => {
    console.log(frameColor)
  }, [frameColor])

  return (
    <Viewport fixed>
      <WedgeMap>
        <Wedge
          colorCode={frameColor}
          style={{ transform: 'rotateZ(0deg)', gridArea: 'a' }}
        />
        <Wedge
          colorCode={frameColor}
          style={{ transform: 'rotateZ(90deg)', gridArea: 'b' }}
        />
        <Wedge
          colorCode={frameColor}
          style={{ transform: 'rotateZ(270deg)', gridArea: 'c' }}
        />
        <Wedge
          colorCode={frameColor}
          style={{ transform: 'rotateZ(180deg)', gridArea: 'd' }}
        />
      </WedgeMap>
    </Viewport>
  )
}

export default Frame

const WedgeMap = styled.div`
  position: relative;
  z-index: 50;
  padding: 20px;
  height: 100lvh;
  width: 100%;
  display: grid;
  grid-template-columns: 30px 1fr 30px;
  grid-template-rows: 30px 1fr 30px;
  grid-template-areas: 'a . b' '. . .' 'c . d';
`
