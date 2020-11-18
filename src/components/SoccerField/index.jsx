import React from 'react';
import PropTypes from 'prop-types';

import { Container, MiddleCircle, MiddleLine } from './styles';

const SoccerField = ({ customHorizontal, children }) => {
  return (
    <Container>
      <MiddleLine customHorizontal={customHorizontal} data-testid="midline" />
      <MiddleCircle />

      {children}
    </Container>
  );
};

SoccerField.propTypes = {
  customHorizontal: PropTypes.bool,
};

SoccerField.defaultProps = {
  customHorizontal: false,
};

export default SoccerField;
