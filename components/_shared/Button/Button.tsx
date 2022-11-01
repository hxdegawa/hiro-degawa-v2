import styled from '@emotion/styled'

type Props = {
  children: React.ReactNode
}
const Button: React.FC<Props> = ({ children }) => {
  return (
    <ButtonOuter>
      <ButtonInner>{children}</ButtonInner>
      <ButtonInner>{children}</ButtonInner>
      <ButtonInner>{children}</ButtonInner>
    </ButtonOuter>
  )
}

export default Button

const ButtonOuter = styled.div`
  position: relative;
  display: block;
  border: none;
  background-color: transparent;
  padding: 0;

  & > button:nth-child(1) {
    position: relative;
    top: 0;
    left: 0;
    z-index: 5;
  }

  & > button:nth-child(2) {
    top: 10px;
    left: -10px;
    z-index: 4;
    pointer-events: none;
  }

  & > button:nth-child(3) {
    top: 20px;
    left: -20px;
    z-index: 3;
    pointer-events: none;
  }

  &:hover {
    & > button {
      top: 0 !important;
      left: 0 !important;
    }
  }
`

const ButtonInner = styled.button`
  position: absolute;
  padding: 10px 60px;
  font-size: 16px;
  font-weight: 600;
  border: solid 2px #fff;
  color: #fff;
  background-color: #0000ff;
  letter-spacing: 1px;
  transition: left 0.2s ease, top 0.2s ease;
`
