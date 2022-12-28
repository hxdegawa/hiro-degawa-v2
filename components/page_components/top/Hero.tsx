import styled from '@emotion/styled'
import Tilt from 'react-parallax-tilt'
import { FullWindow } from '~/components/screen/FullWindow'

const Hero = () => {
  return (
    <FullWindow interactive>
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
      <LogoWrapper>
        <Logo src="/assets/main_logo_white.svg" alt="logo" />
      </LogoWrapper>
    </FullWindow>
  )
}

export default Hero

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

const LogoWrapper = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
`

const Logo = styled.img`
  object-fit: contain;
  max-width: 50%;
  z-index: 10;
`
