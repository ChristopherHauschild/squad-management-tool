import styled from 'styled-components';
import { Row, Col } from 'antd';

export const Container = styled(Row)``;

export const Column = styled(Col)`
  display: flex;
  flex-direction: column;

  h2 {
    font-size: ${({ theme }) => theme.font.sizes.large};
    font-weight: ${({ theme }) => theme.font.bold};
  }
`;

export const List = styled.div`
  background: ${({ theme }) => theme.colors.mainBg};
  border-radius: ${({ theme }) => theme.border.radius};
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-top: ${({ theme }) => theme.spacings.xsmall};
  padding: ${({ theme }) => theme.spacings.xxsmall};
  width: 100%;
`;

export const ListItem = styled.div`
  align-items: center;
  background: #ffffff;
  border-radius: ${({ theme }) => theme.border.radius};
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacings.xsmall};
  width: 100%;

  & + & {
    margin-top: ${({ theme }) => theme.spacings.xxxsmall};
  }
`;

export const NoData = styled(ListItem)`
  justify-content: center;

  span {
    color: ${({ theme }) => theme.colors.lightGray};
  }
`;
