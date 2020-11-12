import React from 'react';

import Card from 'components/Card';
import { Column, Container, List, ListItem, NoData } from './styles';

const Top5 = () => {
  return (
    <Card title="Top 5">
      <Container gutter={[16, 16]}>
        <Column xs={24} sm={24} md={12}>
          <h2>Highest avg age</h2>
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
          <h2>Lowest avg age</h2>
          <List>
            <NoData>
              <span>No data available.</span>
            </NoData>
          </List>
        </Column>
      </Container>
    </Card>
  );
};

export default Top5;
