import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  background: ${({ theme }) => theme.colors.gray};
  display: flex;
  justify-content: center;
  height: ${({ theme }) => theme.grid.footerHt};
  width: 100%;

  span {
    text-align: center;
  }
`;
