import React from 'react';
import { Row } from 'antd';

import { displayFormation } from 'utils/displayFormation';

import { Column, Player } from './styles';

const TeamSquad = () => {
  return (
    <Row>
      <Column span={displayFormation('3-4-3').plyr_1}>
        <Player>
          <strong>+</strong>
        </Player>
      </Column>
      <Column span={displayFormation('3-4-3').plyr_2}>
        <Player>
          <strong>+</strong>
        </Player>
      </Column>
      <Column span={displayFormation('3-4-3').plyr_3}>
        <Player>
          <strong>+</strong>
        </Player>
      </Column>
      <Column span={displayFormation('3-4-3').plyr_4}>
        <Player>
          <strong>+</strong>
        </Player>
      </Column>
      <Column span={displayFormation('3-4-3').plyr_5}>
        <Player>
          <strong>+</strong>
        </Player>
      </Column>
      <Column span={displayFormation('3-4-3').plyr_6}>
        <Player>
          <strong>+</strong>
        </Player>
      </Column>
      <Column span={displayFormation('3-4-3').plyr_7}>
        <Player>
          <strong>+</strong>
        </Player>
      </Column>
      <Column span={displayFormation('3-4-3').plyr_8}>
        <Player>
          <strong>+</strong>
        </Player>
      </Column>
      <Column span={displayFormation('3-4-3').plyr_9}>
        <Player>
          <strong>+</strong>
        </Player>
      </Column>
      <Column span={displayFormation('3-4-3').plyr_10}>
        <Player>
          <strong>+</strong>
        </Player>
      </Column>
      <Column span={24}>
        <Player>
          <strong>+</strong>
        </Player>
      </Column>
    </Row>
  );
};

export default TeamSquad;
