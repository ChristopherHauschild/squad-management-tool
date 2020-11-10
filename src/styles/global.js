import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    outline: 0;
    padding: 0%;
  }

  ${({ theme }) => css`
    body {
      background: ${theme.colors.mainBg};
      color: ${theme.black};
      -webkit-font-smoothing: antialised;
    }

    body,
    input,
    button {
      font-family: ${theme.font.family};
      font-size: ${theme.font.size};
    }

    button {
      cursor: pointer;
    }
  `}

`;
