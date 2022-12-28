import styled from '@emotion/styled'
import { CSSProperties } from 'react'

type Props = {
  colorCode: string
  style?: CSSProperties
}

const Wedge: React.FC<Props> = ({ colorCode, style }) => {
  return (
    <WedgeVector
      style={style || {}}
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M50 10L50 0L10 -1.74846e-06L0 -2.18557e-06L-4.37114e-07 10L-2.18557e-06 50L10 50L10 10L50 10Z"
        fill={colorCode}
      />
    </WedgeVector>
  )
}

export default Wedge

const WedgeVector = styled.svg`
  height: 100%;
  width: 100%;
  object-fit: contain;
`
