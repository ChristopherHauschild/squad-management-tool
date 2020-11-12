import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;

  span {
    color: ${(props) => (props.customHeader ? '#FAFAFA' : '#090223')};
    font-size: ${({ theme }) => theme.font.sizes.medium};
  }

  div {
    align-items: center;
    background: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.gray};
    border-radius: 50%;
    display: flex;
    height: ${({ theme }) => theme.custom.headerMaxSize};
    justify-content: center;
    margin-left: ${({ theme }) => theme.spacings.xxsmall};
    width: ${({ theme }) => theme.custom.headerMaxSize};

    strong {
      font-size: ${({ theme }) => theme.font.sizes.large};
      font-weight: ${({ theme }) => theme.font.bold};
    }
  }

  ${media.lessThan('576px')`
    display: ${(props) => (props.customHeader ? 'none' : 'flex')};
  `}
`;
