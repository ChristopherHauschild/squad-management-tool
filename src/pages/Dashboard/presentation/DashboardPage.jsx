import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'antd';

import MyTeams from 'components/MyTeams';

const DashboardPage = ({ myTeams, loadingMyTeams }) => {
  return (
    <Row>
      <Col xs={24} sm={24} md={12}>
        <MyTeams data={myTeams} loading={loadingMyTeams} />
      </Col>
    </Row>
  );
};

DashboardPage.propTypes = {
  myTeams: PropTypes.arrayOf(PropTypes.object).isRequired,
  loadingMyTeams: PropTypes.bool.isRequired,
};

export default DashboardPage;
