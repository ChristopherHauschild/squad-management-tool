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

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin: 0px;
    }

    // reset antd properties
    .ant-table-column-sorters {
      display: flex;
      justify-content: space-between;
      width: 100%;
      white-space: normal;
    }
  `}
`;
