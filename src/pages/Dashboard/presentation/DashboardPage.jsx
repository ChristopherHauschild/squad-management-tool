import React, { useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Col, Row } from 'antd';
import { FaPlus as PlusIcon } from 'react-icons/fa';

import Card from 'components/Card';
import Button from 'components/Button';
import MyTeams from 'components/MyTeams';
import TopFive from 'components/TopFive';
import HighlightsPlayers from 'components/HighlightsPlayers';

const DashboardPage = ({ myTeams, loadingMyTeams }) => {
  const history = useHistory();

  const addButton = useMemo(
    () => (
      <Button onClick={() => history.push('/management-team')}>
        <PlusIcon />
      </Button>
    ),
    [history]
  );

  return (
    <Row gutter={[40, 24]}>
      <Col xs={24} sm={24} md={12}>
        <Card title="My teams" extraContent={addButton}>
          <MyTeams data={myTeams} loading={loadingMyTeams} />
        </Card>
      </Col>

      <Col xs={24} sm={24} md={12}>
        <Row gutter={[0, 24]}>
          <Col span={24}>
            <Card title="Top 5">
              <TopFive />
            </Card>
          </Col>

          <Col span={24}>
            <HighlightsPlayers />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

DashboardPage.propTypes = {
  myTeams: PropTypes.arrayOf(PropTypes.object).isRequired,
  loadingMyTeams: PropTypes.bool.isRequired,
};

export default DashboardPage;
