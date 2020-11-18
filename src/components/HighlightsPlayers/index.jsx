import React from 'react';
import SoccerField from '../SoccerField';

import { Column, Container, NoData, PlayerAvatar, PlayerPercentage } from './styles';

const HighlightsPlayers = () => {
  return (
    <SoccerField>
      <Container gutter={[16, 16]}>
        <Column xs={24} sm={24} md={24} lg={12}>
          <h2>Most picked player</h2>

          <div>
            <PlayerAvatar>
              <strong>JD</strong>
            </PlayerAvatar>

            <PlayerPercentage>
              <strong>75%</strong>
            </PlayerPercentage>
          </div>
        </Column>

        <Column xs={24} sm={24} md={24} lg={12}>
          <h2>Less picked player</h2>

          <div>
            <NoData>
              <span>No data available.</span>
            </NoData>
          </div>
        </Column>
      </Container>
    </SoccerField>
  );
};

export default HighlightsPlayers;
