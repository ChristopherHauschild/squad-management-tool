import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { useDrop } from 'react-dnd';
import { message } from 'antd';
import { FaPlus as PlusIcon } from 'react-icons/fa';

import { useDroppedPlayers } from 'hooks/droppedPlayers';

import Conditional from 'components/Conditional';
import PlayerInfos from 'components/PlayerInfos';

import { Container, Drop } from './styles';

const PlayerDrop = ({ span }) => {
  const { droppedPlayers, onDropPlayer } = useDroppedPlayers();

  const [playerData, setPlayerData] = useState(undefined);

  useEffect(() => {
    setPlayerData(undefined);
  }, [span]);

  const [, drop] = useDrop({
    accept: 'player',
    drop: ({ player }) => {
      if (droppedPlayers.includes(player)) {
        message.warning('This player has already been selected.');
        return;
      }

      onDropPlayer(player);
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
        <Conditional when={!_.isEmpty(playerData)}>
          <PlayerInfos data={playerData} />
        </Conditional>
        <Conditional when={_.isEmpty(playerData)}>
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
