import React from 'react';
import PropTypes from 'prop-types';

const Conditional = ({ when, children }) => <>{when && children}</>;

Conditional.propTypes = {
  when: PropTypes.bool,
};

Conditional.defaultProps = {
  when: false,
};

export default Conditional;
