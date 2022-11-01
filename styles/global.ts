import { css } from '@emotion/react'

export const GlobalStyle = css`
  html,
  body {
    padding: 0;
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  @media (prefers-color-scheme: dark) {
    html {
      color-scheme: light;
      font-family: 'Inter', 'Noto Sans JP', sans-serif;
    }

    body {
      color: #000;
      background: #fcfcfc;
    }
  }
`