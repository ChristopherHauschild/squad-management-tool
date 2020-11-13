import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import { Card } from 'antd';

export const Container = styled(Card)`
  ${({ theme }) => css`
    border-radius: ${theme.border.radius};
    background: ${theme.custom.gradientBg};

    min-height: 250px;
    position: relative;
  `}
`;

export const MiddleLine = styled.div`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.translucidGray};
    height: 100%;
    left: 50%;
    position: absolute;
    top: 0%;
    transform: translateX(-50%);

    ${media.lessThan('991px')`
      height: 0px;
      top: 50%;
      transform: translateX(-50%);
      width: 100%;
    `}
  `}
`;

export const MiddleCircle = styled.div`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.translucidGray};
    border-radius: 50%;
    height: 80px;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 80px;
  `}
`;
