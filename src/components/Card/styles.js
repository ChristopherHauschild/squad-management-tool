import styled from 'styled-components';

import { Card } from 'antd';

export const Container = styled(Card)`
  border-radius: ${({ theme }) => theme.border.radius};
  box-shadow: rgba(0, 0, 0, 0.04) 0px 0.4px 2px;
  display: flex;
  flex-direction: column;
`;
