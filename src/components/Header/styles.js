import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import { Dropdown } from 'antd';
import { FaUserAlt } from 'react-icons/fa';

export const Container = styled.header`
  ${({ theme }) => css`
    background: ${theme.custom.headerBg};
    display: flex;
    height: ${theme.grid.headerHt};
    padding: 0px ${theme.spacings.small};
    width: 100%;

    ${media.lessThan('576px')`
      height: auto;
    `}
  `}
`;

export const HeaderContent = styled.div`
  ${({ theme }) => css`
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: 0px auto;
    max-width: ${theme.grid.container};
    padding: ${theme.spacings.xxsmall} 0px;
    width: 100%;
  `}
`;

export const Logo = styled.div`
  ${({ theme }) => css`
    align-items: center;
    display: flex;
    justify-content: center;

    img {
      display: flex;
      height: 100%;
      margin-right: ${theme.spacings.xsmall};
      max-height: ${theme.custom.headerMaxSize};
    }

    ${media.lessThan('576px')`
      flex-direction: column;
      margin: 0px auto;

      img {
        margin-right: 0px;
        margin-bottom: ${theme.spacings.xxxsmall};
      }
    `}
  `}
`;

export const Title = styled.div`
  ${({ theme }) => css`
    align-items: center;
    display: flex;
    justify-content: center;

    h1 {
      color: ${theme.colors.white};
      font-size: ${theme.font.sizes.xlarge};
      line-height: 1.2;
      text-align: center;
    }

    ${media.lessThan('576px')`
      h1 {
        font-size: ${theme.font.sizes.large};
      }
    `}
  `}
`;

export const UserDropdown = styled(Dropdown)`
  ${({ theme }) => css`
    align-items: center;
    border-left: 1px solid ${theme.border.color};
    display: flex;
    justify-content: center;
    margin-left: ${theme.spacings.xxsmall};
    padding-left: ${theme.spacings.xxsmall};

    ${media.greaterThan('576px')`
      display: none;
    `}
  `}
`;

export const UserIcon = styled(FaUserAlt)`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    height: ${theme.sizes.small};
    width: ${theme.sizes.small};
  `}
`;
