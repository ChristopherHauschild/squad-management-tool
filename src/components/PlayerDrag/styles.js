import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  ${({ theme }) => css`
    align-items: center;
    border-radius: ${theme.border.radius.small};
    border: 1px dashed ${theme.border.color};
    display: flex;
    margin-bottom: ${theme.spacings.xxsmall};
    padding: ${theme.spacings.xxxsmall};

    cursor: pointer;
  `}
`;

export const Card = styled.div`
  ${({ theme }) => css`
    align-items: flex-start;
    background: ${theme.custom.playerBg};
    border-radius: ${theme.border.radius.small};
    display: flex;
    justify-content: space-between;
    height: 100%;
    padding: ${theme.spacings.xsmall};
    width: 100%;

    ${media.lessThan('576px')`
      flex-direction: column;
    `}
  `}
`;

export const Data = styled.div`
  ${({ theme }) => css`
    strong {
      font-weight: ${theme.font.bold};
    }

    span {
      color: ${theme.colors.primary};
    }
  `}
`;
