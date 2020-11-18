import { createGlobalStyle, css } from 'styled-components';
import media from 'styled-media-query';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0px;
    outline: 0px;
    padding: 0%;
  }

  ${({ theme }) => css`
    body {
      background: ${theme.colors.mainBg};
      color: ${theme.black};
      -webkit-font-smoothing: antialised;
    }

    html,
    body {
      height: 100%;
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

    .ant-table-tbody > tr > td {
      white-space: normal;
    }

    .ant-form {
      align-items: center;
      display: flex;
      justify-content: center;
      padding: 0px ${theme.spacings.xxxlarge};
      width: 100%;

      ${media.lessThan('576px')`
        padding: 0px ${theme.spacings.xxxsmall};
      `}

      .ant-row {
        margin: 0px;
        width: 100%;
      }
    }
  `}
`;
