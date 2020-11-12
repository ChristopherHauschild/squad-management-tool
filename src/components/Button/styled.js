import styled from 'styled-components';

export const Container = styled.button`
  align-items: center;
  background: ${({ theme }) => theme.custom.buttonBg};
  border: none;
  box-shadow: rgba(169, 58, 100, 0.8) 0px 5px 10px -5px;
  border-radius: ${({ theme }) => theme.border.radius};
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.font.bold};
  display: flex;
  justify-content: center;
  padding: ${({ theme }) => theme.custom.buttonPdd};
`;
