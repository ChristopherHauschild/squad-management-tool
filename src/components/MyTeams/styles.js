import styled from 'styled-components';
import media from 'styled-media-query';

export const Header = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;

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
