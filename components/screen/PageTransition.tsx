import { css } from '@emotion/react'
import { useState, useEffect } from 'react'

type Props = {
  children: React.ReactNode
}

const PageTransition: React.FC<Props> = ({ children }) => {
  const [displayChildren, setDisplayChildren] = useState(children)
  const [transitionStage, setTransitionStage] = useState('fadeOut')
  useEffect(() => {
    setTransitionStage('fadeIn')
  }, [])

  useEffect(() => {
    if (children !== displayChildren) setTransitionStage('fadeOut')
  }, [children, setDisplayChildren, displayChildren])

  return (
    <div
      onTransitionEnd={() => {
        if (transitionStage === 'fadeOut') {
          console.log('fading out')
          setDisplayChildren(children)
          setTransitionStage('fadeIn')
        }
      }}
    >
      {displayChildren}
    </div>
  )
}

const fadeInStyle = css`
  opacity: 1;
`

export default PageTransition
