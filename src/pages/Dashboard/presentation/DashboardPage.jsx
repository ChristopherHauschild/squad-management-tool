import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'antd';

import MyTeams from 'components/MyTeams';
import Top5 from 'components/Top5';
import HighlightsPlayers from 'components/HighlightsPlayers';

const DashboardPage = ({ myTeams, loadingMyTeams }) => {
  return (
    <Row gutter={[40, 24]}>
      <Col xs={24} sm={24} md={12}>
        <MyTeams data={myTeams} loading={loadingMyTeams} />
      </Col>
      <Col xs={24} sm={24} md={12}>
        <Row gutter={[0, 24]}>
          <Col span={24}>
            <Top5 />
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
