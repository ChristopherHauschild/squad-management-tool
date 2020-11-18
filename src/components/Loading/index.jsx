import React from 'react';
import PropTypes from 'prop-types';
import { Spin } from 'antd';

import Conditional from '../Conditional';

import { Container, Description } from './styles';

const Loading = ({ description }) => {
  return (
    <Container>
      <Spin />

      <Conditional when={!!description}>
        <Description>{description}</Description>
      </Conditional>
    </Container>
  );
};

Loading.propTypes = {
  description: PropTypes.string,
};

Loading.defaultProps = {
  description: '',
};

export default Loading;
