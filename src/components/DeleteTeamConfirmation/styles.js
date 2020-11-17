import styled, { css } from 'styled-components';
import { Button as ButtonAntd } from 'antd';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;

    > div {
      margin-top: ${theme.spacings.xsmall};
    }
  `}
`;

export const Title = styled.header`
  ${({ theme }) => css`
    span {
      font-size: ${theme.font.sizes.medium};
    }
  `}
`;

export const Button = styled(ButtonAntd)`
  ${({ theme }) => css`
    & + & {
      margin-left: ${theme.spacings.xxsmall};
    }
  `}
`;
