import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'antd';

import MyTeams from 'components/MyTeams';
import Top5 from 'components/Top5';

const DashboardPage = ({ myTeams, loadingMyTeams }) => {
  return (
    <Row gutter={[40, 24]}>
      <Col xs={24} sm={24} md={12}>
        <MyTeams data={myTeams} loading={loadingMyTeams} />
      </Col>
      <Col xs={24} sm={24} md={12}>
        <Top5 />
      </Col>
    </Row>
  );
};

DashboardPage.propTypes = {
  myTeams: PropTypes.arrayOf(PropTypes.object).isRequired,
  loadingMyTeams: PropTypes.bool.isRequired,
};

export default DashboardPage;
