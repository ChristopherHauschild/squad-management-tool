import styled, { css } from 'styled-components';

export const Container = styled.button`
  ${({ theme }) => css`
    align-items: center;
    background: ${theme.custom.gradientBg};
    border: none;
    box-shadow: rgba(169, 58, 100, 0.8) 0px 5px 10px -5px;
    border-radius: ${theme.border.radius};
    color: ${theme.colors.white};
    font-weight: ${theme.font.bold};
    display: flex;
    justify-content: center;
    padding: ${theme.custom.buttonPdd};
  `}
`;
