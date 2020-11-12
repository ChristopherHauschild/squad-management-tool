import React, { useState, useEffect } from 'react';

import api from 'services/api';

import Layout from 'components/Layout';

import DashboardPage from './presentation/DashboardPage';

const Dashboard = () => {
  const [myTeams, setMyTeams] = useState([]);
  const [loadingMyTeams, setLoadingMyTeams] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      setLoadingMyTeams(true);

      const { data } = await api.get('/teams/league/2');

      setLoadingMyTeams(false);
      setMyTeams(data.api.teams);
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
