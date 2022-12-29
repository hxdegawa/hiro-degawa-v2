import styled from '@emotion/styled'
import { CSSProperties } from 'react'

type Props = {
  children: React.ReactNode
  style?: CSSProperties
}

const GeneralParagraph: React.FC<Props> = ({ children, style }) => {
  return <Text style={style}>{children}</Text>
}

export default GeneralParagraph

const Text = styled.p`
  font-family: 'Noto Sans JP', sans-serif;
  line-height: 2.1rem;
  letter-spacing: 1px;
  font-weight: 500;
  font-size: 1.1rem;
`
