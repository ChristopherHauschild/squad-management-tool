import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import { Col } from 'antd';

export const Container = styled(Col)`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100px;
  width: 100px;
`;

export const Drop = styled.div`
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

    ${media.lessThan('700px')`
      height: 70px;
      width: 70px;
    `}

    ${media.lessThan('480px')`
      height: 50px;
      width: 50px;
    `}

    ${media.between('992px', '1150px')`
      height: 75px;
      width: 75px;
    `}
  `}
`;
