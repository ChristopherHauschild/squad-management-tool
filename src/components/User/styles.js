import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  ${({ theme }) => css`
    align-items: center;
    display: flex;
    justify-content: center;

    span {
      color: ${(props) => (props.customHeader ? '#FAFAFA' : '#090223')};
      font-size: ${theme.font.sizes.medium};
    }

    div {
      align-items: center;
      background: ${theme.colors.white};
      border: 1px solid ${theme.colors.gray};
      border-radius: 50%;
      display: flex;
      height: ${theme.custom.headerMaxSize};
      justify-content: center;
      margin-left: ${theme.spacings.xxsmall};
      width: ${theme.custom.headerMaxSize};

      strong {
        font-size: ${theme.font.sizes.large};
        font-weight: ${theme.font.bold};
      }
    }

    ${media.lessThan('576px')`
      display: ${(props) => (props.customHeader ? 'none' : 'flex')};
    `}
  `}
`;
