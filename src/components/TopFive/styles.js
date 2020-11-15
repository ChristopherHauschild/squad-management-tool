import styled, { css } from 'styled-components';
import { Row, Col } from 'antd';

export const Container = styled(Row)``;

export const Column = styled(Col)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    h2 {
      font-size: ${theme.font.sizes.large};
      font-weight: ${theme.font.bold};
    }
  `}
`;

export const List = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.mainBg};
    border-radius: ${theme.border.radius.medium};
    display: flex;
    flex-direction: column;
    height: 100%;
    margin-top: ${theme.spacings.xsmall};
    padding: ${theme.spacings.xxsmall};
    width: 100%;
  `}
`;

export const ListItem = styled.div`
  ${({ theme }) => css`
    align-items: center;
    background: #ffffff;
    border-radius: ${theme.border.radius.medium};
    display: flex;
    justify-content: space-between;
    padding: ${theme.spacings.xsmall};
    width: 100%;

    & + & {
      margin-top: ${theme.spacings.xxxsmall};
    }
  `}
`;

export const NoData = styled(ListItem)`
  ${({ theme }) => css`
    justify-content: center;

    span {
      color: ${theme.colors.lightGray};
      text-align: center;
    }
  `}
`;
