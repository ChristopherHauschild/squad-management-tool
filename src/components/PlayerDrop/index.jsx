import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDrop } from 'react-dnd';
import { FaPlus as PlusIcon } from 'react-icons/fa';

import Conditional from 'components/Conditional';
import PlayerInfos from 'components/PlayerInfos';

import { Container, Drop } from './styles';

const PlayerDrop = ({ span }) => {
  const [playerData, setPlayerData] = useState(undefined);

  const [, drop] = useDrop({
    accept: 'plyr',
    drop: ({ player }) => {
      setPlayerData({ ...player });
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  });

  return (
    <Container span={span}>
      <Drop ref={drop}>
        <Conditional when={playerData}>
          <PlayerInfos data={playerData} />
        </Conditional>
        <Conditional when={!playerData}>
          <PlusIcon color="#FFFFFF" />
        </Conditional>
      </Drop>
    </Container>
  );
};

PlayerDrop.propTypes = {
  span: PropTypes.number.isRequired,
};

export default PlayerDrop;
