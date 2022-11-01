import styled from '@emotion/styled'

type Props = {
  children: React.ReactNode
  interactive?: boolean
}

const Frame: React.FC<Props> = ({ children, interactive }) => {
  return (
    <Viewport style={interactive ? { pointerEvents: 'all' } : undefined}>
      {children}
    </Viewport>
  )
}

export default Frame

const Viewport = styled.div`
  overflow: hidden;
  pointer-events: none;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
`
