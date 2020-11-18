import React from 'react';
import { useTranslation } from 'react-i18next';

import SoccerField from '../SoccerField';

import { Column, Container, NoData, PlayerAvatar, PlayerPercentage } from './styles';

const HighlightsPlayers = () => {
  const { t } = useTranslation();

  return (
    <SoccerField>
      <Container gutter={[16, 16]}>
        <Column xs={24} sm={24} md={24} lg={12}>
          <h2>{t('components.highlightsPlayers.mostPicked')}</h2>

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
          <h2>{t('components.highlightsPlayers.lessPicked')}</h2>

          <div>
            <NoData>
              <span>{t('components.emptyState')}</span>
            </NoData>
          </div>
        </Column>
      </Container>
    </SoccerField>
  );
};

export default HighlightsPlayers;
