import React from 'react';
import { useTranslation } from 'react-i18next';

import { Column, Container, List, ListItem, NoData } from './styles';

const TopFive = () => {
  const { t } = useTranslation();

  return (
    <Container gutter={[16, 16]}>
      <Column xs={24} sm={24} md={12}>
        <h2>{t('components.topFive.highest')}</h2>
        <List>
          <ListItem>
            <span>Inter Milan</span>
            <strong>31.4</strong>
          </ListItem>
          <ListItem>
            <span>Inter Milan</span>
            <strong>31.4</strong>
          </ListItem>
          <ListItem>
            <span>Inter Milan</span>
            <strong>31.4</strong>
          </ListItem>
        </List>
      </Column>
      <Column xs={24} sm={24} md={12}>
        <h2>{t('components.topFive.lowest')}</h2>
        <List>
          <NoData>
            <span>{t('components.emptyState')}</span>
          </NoData>
        </List>
      </Column>
    </Container>
  );
};

export default TopFive;
