import React from 'react';
import PropTypes from 'prop-types';

const Conditional = ({ when, children }) => <>{when && children}</>;

Conditional.propTypes = {
  when: PropTypes.string.isRequired,
};

export default Conditional;
