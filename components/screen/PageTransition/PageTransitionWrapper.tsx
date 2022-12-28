import styled from '@emotion/styled'
import { useState, useEffect } from 'react'
import { wait } from '~/lib/helper'
import PageTransitionOverlay from './PageTransitionOverlay'

type Props = {
  children: React.ReactNode
}

const PageTransitionWrapper: React.FC<Props> = ({ children }) => {
  const [displayChildren, setDisplayChildren] = useState(children)
  const [transitionStage, setTransitionStage] = useState('fadeOut')
  const [isInAnimation, setAnimationState] = useState(false)

  const controlAnimation = async () => {
    setTransitionStage('fadeIn')

    if (children !== displayChildren) {
      setTransitionStage('fadeOut')
      setAnimationState(true)

      await wait(1)
      setDisplayChildren(children)

      await wait(1.5)
      setTransitionStage('fadeIn')

      await wait(1)

      setAnimationState(false)
    }
  }

  useEffect(() => {
    controlAnimation()
  }, [
    children,
    setDisplayChildren,
    displayChildren,
    isInAnimation,
    setAnimationState,
  ])

  return (
    <>
      <TransitionWrapper className={transitionStage}>
        {displayChildren}
      </TransitionWrapper>
      {isInAnimation && <PageTransitionOverlay />}
    </>
  )
}

export default PageTransitionWrapper

const TransitionWrapper = styled.div`
  overflow: hidden;
  transition: filter 1s ease;
  transform-origin: center;

  &.fadeIn {
    filter: blur(0);
  }

  &.fadeOut {
    filter: blur(1);
  }
`
