import styled, { css } from 'styled-components';

export const Description = styled.div`
  ${({ theme }) => css`
    align-items: center;
    display: flex;
    justify-content: space-between;

    overflow: hidden;

    > div {
      align-items: center;
      display: flex;
      margin-top: 4px;
    }

    > span {
      white-space: normal;
      word-break: break-word;
      padding-right: ${theme.spacings.xsmall};
    }
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
    align-items: center;
    background: transparent;
    border: none;
    display: flex;
    justify-content: center;
    margin: 0px;
    outline: none;
    padding: 0px;

    cursor: pointer;

    svg {
      color: ${theme.colors.lightGray};
      transition: color 0.2s ease-in-out;
    }

    &:hover {
      svg {
        color: ${theme.colors.primary};
      }
    }

    & + & {
      margin-left: ${theme.spacings.xsmall};
    }
  `}
`;

export const NoDescription = styled.span`
  font-style: italic;
`;
