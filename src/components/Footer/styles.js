import styled, { css } from 'styled-components';

export const Container = styled.footer`
  ${({ theme }) => css`
    align-items: center;
    background: ${theme.colors.gray};
    display: flex;
    justify-content: center;
    height: ${theme.grid.footerHt};
    width: 100%;
    padding: ${theme.spacings.small};

    span {
      text-align: center;
    }
  `}
`;
