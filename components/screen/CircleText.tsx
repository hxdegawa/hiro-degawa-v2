import styled from '@emotion/styled'
import { Viewport } from '.'
import Tilt from 'react-parallax-tilt'

const CircleText = () => {
  return (
    <Viewport interactive>
      <Tilt gyroscope>
        <Wrapper>
          <Svg viewBox="0 0 500 500" width="500" height="500">
            <defs>
              <path
                id="circle"
                d="
              M 250, 250
              m -125, 0
              a 125,125 0 1,1 250,0
              a 125,125 0 1,1 -250,0"
              />
            </defs>
            <text fontSize="23.8" fontWeight="500" fill="#fff">
              <textPath href="#circle">
                {'SINGER -> TRANSLATOR -> FRONTEND DEVELOPER -> DESIGNER ->'}
              </textPath>
            </text>
          </Svg>
        </Wrapper>
      </Tilt>
    </Viewport>
  )
}

export default CircleText

const Wrapper = styled.div`
  position: relative;
  display: block;
  height: 100vh;
  width: 100vw;
`

const Svg = styled.svg`
  width: 100%;
  height: 100%;
  animation: spin 60s linear infinite;
  z-index: 5;
  user-select: none;

  @keyframes spin {
    from {
      transform: rotateZ(0deg);
    }

    to {
      transform: rotateZ(360deg);
    }
  }
`
