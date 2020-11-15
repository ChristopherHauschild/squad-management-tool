import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    align-items: center;
    background: #ffffff;
    display: flex;
    flex-direction: column;
    padding-top: ${theme.spacings.medium};
    height: 100%;
    opacity: 0.5;
    width: 100%;
  `}
`;

export const Description = styled.span`
  ${({ theme }) => css`
    display: flex;
    margin-top: ${theme.spacings.xxsmall};
    text-align: center;
  `}
`;
