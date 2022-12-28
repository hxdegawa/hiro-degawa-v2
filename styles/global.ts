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
    cursor: none;
    text-rendering: geometricPrecision;

    @media screen and (max-width: 960px) {
      cursor: auto;
    }
  }

  @media (prefers-color-scheme: dark) {
    html {
      color-scheme: light;
      font-family: 'Inter', 'Noto Sans JP', sans-serif;
    }

    body {
      color: #0d0d0d;
      background: #fcfcfc;
      cursor: none;
      font-size: 16px;
    }
  }
`
