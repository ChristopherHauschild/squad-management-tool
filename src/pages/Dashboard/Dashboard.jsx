import React, { useState, useEffect, useCallback } from 'react';

import api from 'services/api';

import { useTeams } from 'hooks/teams';

import Layout from 'components/Layout';

import DashboardPage from './presentation/DashboardPage';

const Dashboard = () => {
  const { success } = useTeams();

  const [myTeams, setMyTeams] = useState([]);
  const [loadingMyTeams, setLoadingMyTeams] = useState(false);

  const fetch = useCallback(async () => {
    try {
      setLoadingMyTeams(true);

      const response = await api.get('/teams');

      setLoadingMyTeams(false);
      setMyTeams(response.data);
    } catch (error) {
      setLoadingMyTeams(false);
    }
  }, []);

  useEffect(() => {
    fetch();
  }, [fetch]);

  useEffect(() => {
    if (success) fetch();
  }, [success]); // eslint-disable-line

  return (
    <Layout>
      <DashboardPage myTeams={myTeams} loadingMyTeams={loadingMyTeams} />
    </Layout>
  );
};

export default Dashboard;
