import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import Conditional from 'components/Conditional';
import Loading from 'components/Loading';

import { Column, Container, List, ListItem, NoData } from './styles';

const TopFive = ({ highests, lowests, loading }) => {
  const { t } = useTranslation();

  return (
    <Container gutter={[16, 16]}>
      <Column xs={24} sm={24} md={12}>
        <h2>{t('components.topFive.highest')}</h2>

        <List>
          <Conditional when={loading}>
            <Loading description="Loading..." />
          </Conditional>

          <Conditional when={!loading && highests?.length > 0}>
            {highests?.map((hg) => (
              <ListItem key={hg.id} to={`/management-team?id=${hg.id}`}>
                <span>{hg.name}</span>
                <strong>{hg.avgAge}</strong>
              </ListItem>
            ))}
          </Conditional>

          <Conditional when={!loading && !highests?.length > 0}>
            <NoData>
              <span>{t('components.emptyState')}</span>
            </NoData>
          </Conditional>
        </List>
      </Column>

      <Column xs={24} sm={24} md={12}>
        <h2>{t('components.topFive.lowest')}</h2>

        <List>
          <Conditional when={loading}>
            <Loading description="Loading..." />
          </Conditional>

          <Conditional when={!loading && lowests?.length > 0}>
            {lowests?.map((lw) => (
              <ListItem key={lw.id} to={`/management-team?id=${lw.id}`}>
                <span>{lw.name}</span>
                <strong>{lw.avgAge}</strong>
              </ListItem>
            ))}
          </Conditional>

          <Conditional when={!loading && !lowests?.length > 0}>
            <NoData>
              <span>{t('components.emptyState')}</span>
            </NoData>
          </Conditional>
        </List>
      </Column>
    </Container>
  );
};

TopFive.propTypes = {
  highests: PropTypes.arrayOf(PropTypes.any),
  lowests: PropTypes.arrayOf(PropTypes.any),
  loading: PropTypes.bool.isRequired,
};

TopFive.defaultProps = {
  highests: [],
  lowests: [],
};

export default TopFive;
