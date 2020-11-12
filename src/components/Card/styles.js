import styled from 'styled-components';
import media from 'styled-media-query';

import { Card } from 'antd';

export const Container = styled(Card)`
  border-radius: ${({ theme }) => theme.border.radius};
  box-shadow: rgba(0, 0, 0, 0.04) 0px 0.4px 2px;
  display: flex;
  flex-direction: column;

  .ant-card-body {
    padding: ${({ theme }) => theme.spacings.small} 0px;
  }
`;

export const Header = styled.header`
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.border.color};
  display: flex;
  justify-content: space-between;
  padding: 0px ${({ theme }) => theme.spacings.small};
  padding-bottom: ${({ theme }) => theme.spacings.xsmall};
  margin-bottom: ${({ theme }) => theme.spacings.small};

  h1 {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: ${({ theme }) => theme.font.sizes.xxlarge};
    font-weight: ${({ theme }) => theme.font.bold};
  }

  ${media.lessThan('576px')`
    h1 {
      font-size: ${({ theme }) => theme.font.sizes.xlarge};
    }
  `}
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0px ${({ theme }) => theme.spacings.small};
`;
