import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

const Button = ({ onClick, customClassName, children }) => {
  return (
    <Container onClick={onClick} className={customClassName}>
      {children}
    </Container>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  customClassName: PropTypes.string,
};

Button.defaultProps = {
  customClassName: undefined,
};

export default Button;
