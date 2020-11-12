import React, { useState, useEffect } from 'react';

import api from 'services/api';

import Layout from 'components/Layout';

import DashboardPage from './presentation/DashboardPage';

const Dashboard = () => {
  const [myTeams, setMyTeams] = useState([]);
  const [loadingMyTeams, setLoadingMyTeams] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoadingMyTeams(true);

        const response = await api.get('/teams');

        setLoadingMyTeams(false);
        setMyTeams(response.data);
      } catch (error) {
        setLoadingMyTeams(false);
      }
    };

    loadData();
  }, []);

  return (
    <Layout>
      <DashboardPage myTeams={myTeams} loadingMyTeams={loadingMyTeams} />
    </Layout>
  );
};

export default Dashboard;
