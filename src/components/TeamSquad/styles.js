import styled, { css } from 'styled-components';
import { Col } from 'antd';

export const Column = styled(Col)`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 12px;
`;

export const Player = styled.div`
  ${({ theme }) => css`
    align-items: center;
    background: #ececec94;
    border-radius: 50%;
    display: flex;
    flex-shrink: 0;
    justify-content: center;
    height: 90px;
    width: 90px;

    strong {
      color: ${theme.colors.white};
      font-size: ${theme.font.sizes.large};
    }
  `}
`;
