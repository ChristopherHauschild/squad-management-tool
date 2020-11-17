import React from 'react';
import PropTypes from 'prop-types';

import { displayFormation } from 'utils/displayFormation';

import PlayerDrop from 'components/PlayerDrop';

import { Container } from './styles';

const TeamFormation = ({ formation }) => {
  return (
    <Container>
      <PlayerDrop span={displayFormation(formation)[0]} />
      <PlayerDrop span={displayFormation(formation)[1]} />
      <PlayerDrop span={displayFormation(formation)[2]} />
      <PlayerDrop span={displayFormation(formation)[3]} />
      <PlayerDrop span={displayFormation(formation)[4]} />
      <PlayerDrop span={displayFormation(formation)[5]} />
      <PlayerDrop span={displayFormation(formation)[6]} />
      <PlayerDrop span={displayFormation(formation)[7]} />
      <PlayerDrop span={displayFormation(formation)[8]} />
      <PlayerDrop span={displayFormation(formation)[9]} />
      <PlayerDrop span={displayFormation(formation)[10]} />
    </Container>
  );
};

TeamFormation.propTypes = {
  formation: PropTypes.string.isRequired,
};

export default TeamFormation;
