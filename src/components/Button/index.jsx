import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styled';

const Button = ({ onClick, children }) => {
  return <Container onClick={onClick}>{children}</Container>;
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
