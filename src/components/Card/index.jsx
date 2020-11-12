import React from 'react';
import PropTypes from 'prop-types';

import Conditional from 'components/Conditional';

import { Container, Header, Content } from './styles';

const Card = ({ title, button, children }) => {
  return (
    <Container>
      <Header>
        <h1>{title}</h1>

        <Conditional when={button}>{button}</Conditional>
      </Header>

      <Content>{children}</Content>
    </Container>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  button: PropTypes.node,
};

Card.defaultProps = {
  button: null,
};

export default Card;
