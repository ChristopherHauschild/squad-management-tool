import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

const Player = ({ name, nationality, age }) => {
  return (
    <Container>
      <div>
        <div>
          <strong>Name: </strong>
          <span>{name}</span>
        </div>
        <div>
          <strong>Nationality: </strong>
          <span>{nationality}</span>
        </div>
      </div>
      <div>
        <strong>Age: </strong>
        <span>{age}</span>
      </div>
    </Container>
  );
};

Player.propTypes = {
  name: PropTypes.string.isRequired,
  nationality: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};

export default Player;
