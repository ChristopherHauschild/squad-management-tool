import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import _ from 'lodash';

import SoccerField from 'components/SoccerField';
import PlayerInfos from 'components/PlayerInfos';

import Conditional from 'components/Conditional';
import Loading from 'components/Loading';

import { Column, Container, NoData, PlayerAvatar, PlayerPercentage } from './styles';

const HighlightsPlayers = ({ mostPicked, leastPicked, loading }) => {
  const { t } = useTranslation();

  return (
    <SoccerField>
      <Container gutter={[16, 16]}>
        <Column xs={24} sm={24} md={24} lg={12}>
          <h2>{t('components.highlightsPlayers.mostPicked')}</h2>

          <div>
            <Conditional when={loading}>
              <Loading description="Loading..." />
            </Conditional>

            <Conditional when={!loading && !_.isEmpty(mostPicked)}>
              <PlayerAvatar>
                <PlayerInfos data={mostPicked} />
              </PlayerAvatar>

              <PlayerPercentage>
                <strong>{mostPicked.rating}%</strong>
              </PlayerPercentage>
            </Conditional>

            <Conditional when={!loading && _.isEmpty(mostPicked)}>
              <NoData>
                <span>{t('components.emptyState')}</span>
              </NoData>
            </Conditional>
          </div>
        </Column>

        <Column xs={24} sm={24} md={24} lg={12}>
          <h2>{t('components.highlightsPlayers.lessPicked')}</h2>

          <div>
            <Conditional when={loading}>
              <Loading description="Loading..." />
            </Conditional>

            <Conditional when={!loading && !_.isEmpty(leastPicked)}>
              <PlayerAvatar>
                <PlayerInfos data={leastPicked} />
              </PlayerAvatar>

              <PlayerPercentage>
                <strong>{leastPicked.rating}%</strong>
              </PlayerPercentage>
            </Conditional>

            <Conditional when={!loading && _.isEmpty(leastPicked)}>
              <NoData>
                <span>{t('components.emptyState')}</span>
              </NoData>
            </Conditional>
          </div>
        </Column>
      </Container>
    </SoccerField>
  );
};

HighlightsPlayers.propTypes = {
  mostPicked: PropTypes.arrayOf(PropTypes.any),
  leastPicked: PropTypes.arrayOf(PropTypes.any),
  loading: PropTypes.bool.isRequired,
};

HighlightsPlayers.defaultProps = {
  mostPicked: {},
  leastPicked: {},
};

export default HighlightsPlayers;
