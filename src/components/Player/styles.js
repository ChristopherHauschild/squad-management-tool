import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  ${({ theme }) => css`
    align-items: flex-start;
    background: ${theme.custom.plyrBg};
    border-radius: ${theme.border.radius.small};
    display: flex;
    justify-content: space-between;
    margin-bottom: ${theme.spacings.small};
    padding: ${theme.spacings.xsmall};

    strong {
      font-weight: ${theme.font.bold};
    }

    span {
      color: ${theme.colors.primary};
    }

    ${media.lessThan('576px')`
      flex-direction: column;
    `}

    & + & {
      margin-top: ${theme.spacings.xsmall};
    }
  `}
`;
