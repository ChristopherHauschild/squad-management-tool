import styled from 'styled-components';
import media from 'styled-media-query';

import { Dropdown } from 'antd';
import { FaUserAlt } from 'react-icons/fa';

export const Container = styled.header`
  background: ${({ theme }) => theme.custom.headerBg};
  display: flex;
  height: ${({ theme }) => theme.grid.headerHt};
  padding: 0px ${({ theme }) => theme.spacings.small};
  width: 100%;

  ${media.lessThan('520px')`
    height: auto;
  `}
`;

export const HeaderContent = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0px auto;
  max-width: ${({ theme }) => theme.grid.container};
  padding: ${({ theme }) => theme.spacings.xxsmall} 0px;
  width: 100%;
`;

export const Logo = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;

  img {
    display: flex;
    height: 100%;
    margin-right: ${({ theme }) => theme.spacings.xsmall};
    max-height: ${({ theme }) => theme.custom.headerMaxSize};
  }

  ${media.lessThan('520px')`
    flex-direction: column;
    margin: 0px auto;

    img {
      margin-right: 0px;
      margin-bottom: ${({ theme }) => theme.spacings.xxxsmall};
    }
  `}
`;

export const Title = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;

  h1 {
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.font.sizes.xlarge};
    line-height: 1.2;
    text-align: center;
  }

  ${media.lessThan('520px')`
    h1 {
      font-size: ${({ theme }) => theme.font.sizes.large};
    }
  `}
`;

export const UserDropdown = styled(Dropdown)`
  align-items: center;
  border-left: 1px solid ${({ theme }) => theme.border.color};
  display: flex;
  justify-content: center;
  margin-left: ${({ theme }) => theme.spacings.xxsmall};
  padding-left: ${({ theme }) => theme.spacings.xxsmall};

  ${media.greaterThan('520px')`
    display: none;
  `}
`;

export const UserIcon = styled(FaUserAlt)`
  color: ${({ theme }) => theme.colors.white};
  height: ${({ theme }) => theme.sizes.small};
  width: ${({ theme }) => theme.sizes.small};
`;
