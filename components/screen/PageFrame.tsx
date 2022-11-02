import styled from '@emotion/styled'
import Viewport from './FullWindow'

const Frame: React.FC = () => {
  return (
    <Viewport fixed>
      <WedgeMap>
        <Wedge
          style={{ transform: 'rotateZ(0deg)', gridArea: 'a' }}
          src="/assets/corner_wedge.svg"
          alt="corner"
        />
        <Wedge
          style={{ transform: 'rotateZ(90deg)', gridArea: 'b' }}
          src="/assets/corner_wedge.svg"
          alt="corner"
        />
        <Wedge
          style={{ transform: 'rotateZ(270deg)', gridArea: 'c' }}
          src="/assets/corner_wedge.svg"
          alt="corner"
        />
        <Wedge
          style={{ transform: 'rotateZ(180deg)', gridArea: 'd' }}
          src="/assets/corner_wedge.svg"
          alt="corner"
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
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 30px 1fr 30px;
  grid-template-rows: 30px 1fr 30px;
  grid-template-areas: 'a . b' '. . .' 'c . d';
`

const Wedge = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`
