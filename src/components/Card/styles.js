import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import { Card } from 'antd';

export const Container = styled(Card)`
  ${({ theme }) => css`
    border-radius: ${theme.border.radius};
    box-shadow: rgba(0, 0, 0, 0.04) 0px 0.4px 2px;
    display: flex;
    flex-direction: column;

    .ant-card-body {
      padding: ${theme.spacings.small} 0px;
    }
  `}
`;

export const Header = styled.header`
  ${({ theme }) => css`
    align-items: center;
    border-bottom: 1px solid ${theme.border.color};
    display: flex;
    justify-content: space-between;
    padding: 0px ${theme.spacings.small};
    padding-bottom: ${theme.spacings.xsmall};
    margin-bottom: ${theme.spacings.small};

    h1 {
      color: ${theme.colors.secondary};
      font-size: ${theme.font.sizes.xxlarge};
      font-weight: ${theme.font.bold};
    }

    ${media.lessThan('576px')`
      h1 {
        font-size: ${theme.font.sizes.xlarge};
      }
    `}
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    padding: 0px ${theme.spacings.small};
  `}
`;
