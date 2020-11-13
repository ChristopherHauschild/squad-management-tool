import React from 'react';
import { Container, MiddleCircle, MiddleLine } from './styles';

const SoccerField = ({ children }) => {
  return (
    <Container>
      <MiddleLine />
      <MiddleCircle />

      {children}
    </Container>
  );
};

export default SoccerField;
