import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`;

export const Main = styled.main`
  display: flex;
  height: 100%;
  padding: 0px ${({ theme }) => theme.spacings.small};
  width: 100%;

  > div {
    display: flex;
    flex-direction: column;
    height: 100%;
    margin: 0px auto;
    max-width: ${({ theme }) => theme.grid.container};
    padding: ${({ theme }) => theme.spacings.medium} 0px;
    width: 100%;
  }
`;
