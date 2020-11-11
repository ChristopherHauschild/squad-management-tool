import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

const User = ({ customHeader }) => {
  return (
    <Container customHeader={customHeader}>
      <span>John Doe</span>

      <div>
        <strong>JD</strong>
      </div>
    </Container>
  );
};

User.propTypes = {
  customHeader: PropTypes.bool,
};

User.defaultProps = {
  customHeader: false,
};

export default User;
