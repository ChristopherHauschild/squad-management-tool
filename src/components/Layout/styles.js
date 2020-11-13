import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

export const Main = styled.main`
  ${({ theme }) => css`
    display: flex;
    height: 100%;
    min-height: calc(100vh - (${theme.grid.headerHt} + ${theme.grid.footerHt}));
    padding: 0px ${theme.spacings.small};
    width: 100%;

    > div {
      display: flex;
      flex-direction: column;
      height: 100%;
      margin: 0px auto;
      max-width: ${theme.grid.container};
      padding: ${theme.spacings.medium} 0px;
      width: 100%;
    }
  `}
`;
