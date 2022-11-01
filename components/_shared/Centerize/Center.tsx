import styled from '@emotion/styled'

type Props = {
  children: React.ReactNode
}

const Center: React.FC<Props> = ({ children }) => {
  return <Aligner>{children}</Aligner>
}

export default Center

const Aligner = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
