import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Luckiest Guy', sans-serif;
  }
  section {
    height: 10000px;
    margin-top: 100px;

    text-align: center;
  }
`
