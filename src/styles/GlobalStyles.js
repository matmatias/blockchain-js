import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
  }

  body {
    font-family: sans-serif;
    background: #181818;
    color: #fff;
  }

  a {
    text-decoration: none;
    color: lightblue;
  }

  ul {
    list-style: none;
  }
`

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
`