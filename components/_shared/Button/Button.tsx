import { css } from '@emotion/react'
import Link from 'next/link'
import styled from '@emotion/styled'

type Props = { children: React.ReactNode; colorCode?: string } & (
  | {
      mode: 'button'
      onClick: () => void
    }
  | {
      mode: 'link'
      href: string
    }
)

const Button: React.FC<Props> = (props) => {
  const InnerBlocks = (
    <>
      <InnerBlock style={{ backgroundColor: props.colorCode || '#222' }}>
        {props.children}
      </InnerBlock>
      <InnerBlock style={{ backgroundColor: props.colorCode || '#222' }}>
        {props.children}
      </InnerBlock>
      <InnerBlock style={{ backgroundColor: props.colorCode || '#222' }}>
        {props.children}
      </InnerBlock>
    </>
  )

  switch (props.mode) {
    case 'button':
      return <ButtonOuter onClick={props.onClick}>{InnerBlocks}</ButtonOuter>

    case 'link':
      return <LinkOuter href={props.href}>{InnerBlocks}</LinkOuter>
  }
}

export default Button

const buttonStyle = css`
  position: relative;
  display: block;
  border: none;
  background-color: transparent;
  padding: 0;
  height: fit-content;
  width: fit-content;

  & > *:nth-of-type(1) {
    position: relative;
    top: 0;
    left: 0;
    z-index: 5;
  }

  & > *:nth-of-type(2) {
    top: 10px;
    left: -10px;
    z-index: 4;
    pointer-events: none;
  }

  & > *:nth-of-type(3) {
    top: 20px;
    left: -20px;
    z-index: 3;
    pointer-events: none;
  }

  &:hover {
    & > * {
      top: 0 !important;
      left: 0 !important;
    }
  }
`

const InnerBlock = styled.div`
  position: absolute;
  padding: 10px 60px;
  display: block;
  font-size: 16px;
  font-weight: 600;
  border: solid 2px #fff;
  color: #fff;
  letter-spacing: 1px;
  pointer-events: none;
  transition: left 0.2s ease, top 0.2s ease;
`

const ButtonOuter = styled.button(buttonStyle)

const LinkOuter = styled(Link)(buttonStyle)
