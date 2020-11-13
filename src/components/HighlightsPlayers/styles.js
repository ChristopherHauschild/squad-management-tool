import styled, { css } from 'styled-components';
import { Row, Col } from 'antd';

export const Container = styled(Row)`
  align-items: stretch;
  justify-content: center;
`;

export const Column = styled(Col)`
  ${({ theme }) => css`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h2 {
      color: ${theme.colors.white};
      font-size: ${theme.font.sizes.xlarge};
      font-weight: ${theme.font.bold};
      text-align: center;
    }

    > div {
      align-items: flex-start;
      display: flex;
      justify-content: center;
      margin-top: ${theme.spacings.small};
    }
  `}
`;

export const PlayerAvatar = styled.div`
  ${({ theme }) => css`
    align-items: center;
    background: ${theme.colors.white};
    border-radius: 50%;
    display: flex;
    flex-shrink: 0;
    justify-content: center;
    height: 150px;
    width: 150px;

    strong {
      font-size: ${theme.font.sizes.xxxlarge};
    }
  `}
`;

export const PlayerPercentage = styled.div`
  ${({ theme }) => css`
    padding-right: ${theme.spacings.small};
    border-bottom: 2px solid ${theme.colors.lightGray};

    strong {
      color: ${theme.colors.white};
    }
  `}
`;

export const NoData = styled(PlayerAvatar)`
  ${({ theme }) => css`
    background: ${theme.colors.translucidGray};

    span {
      color: ${theme.colors.lightGray};
      font-size: ${theme.font.sizes.large};
      line-height: 1.4;
      text-align: center;
    }
  `}
`;
