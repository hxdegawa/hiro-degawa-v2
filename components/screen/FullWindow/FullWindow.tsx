import styled from '@emotion/styled'

type Props = {
  children: React.ReactNode
  interactive?: boolean
  fixed?: boolean
}

const Frame: React.FC<Props> = ({ children, interactive, fixed }) => {
  return (
    <>
      {fixed && (
        <FixedViewport
          style={interactive ? { pointerEvents: 'all' } : undefined}
        >
          {children}
        </FixedViewport>
      )}

      {!fixed && (
        <Viewport style={interactive ? { pointerEvents: 'all' } : undefined}>
          {children}
        </Viewport>
      )}
    </>
  )
}

export default Frame

const Viewport = styled.div`
  overflow: hidden;
  pointer-events: none;
  position: absolute;
  left: 0;
  top: 0;
  height: 100lvh;
  width: 100%;
`

const FixedViewport = styled.div`
  overflow: hidden;
  pointer-events: none;
  position: fixed;
  left: 0;
  top: 0;
  height: 100lvh;
  width: 100%;
  z-index: 50;
`
