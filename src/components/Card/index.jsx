import React from 'react';
import PropTypes from 'prop-types';

import Conditional from 'components/Conditional';

import { Container, Header, Content } from './styles';

const Card = ({ title, extraContent, children }) => {
  return (
    <Container>
      <Header>
        <h1>{title}</h1>

        <Conditional when={extraContent}>{extraContent}</Conditional>
      </Header>

      <Content>{children}</Content>
    </Container>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  extraContent: PropTypes.node,
};

Card.defaultProps = {
  extraContent: null,
};

export default Card;
