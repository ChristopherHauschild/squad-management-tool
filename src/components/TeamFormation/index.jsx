/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';

import { displayFormation } from 'utils/displayFormation';

import PlayerDrop from 'components/PlayerDrop';

import { Container } from './styles';

const TeamFormation = ({ formation }) => {
  const squad = Array(11).fill(0);

  return (
    <Container>
      {squad.map((_, index) => (
        <PlayerDrop key={index} span={displayFormation(formation)[index]} />
      ))}
    </Container>
  );
};

TeamFormation.propTypes = {
  formation: PropTypes.string.isRequired,
};

export default TeamFormation;
