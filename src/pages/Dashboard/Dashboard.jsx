import React, { useState, useEffect, useCallback } from 'react';

import api from 'services/api';

import { useTeams } from 'hooks/teams';

import Layout from 'components/Layout';

import DashboardPage from './presentation/DashboardPage';

const Dashboard = () => {
  const { success } = useTeams();

  const [teams, setTeams] = useState([]);
  const [loadingTeams, setLoadingTeams] = useState(false);

  const fetch = useCallback(async () => {
    try {
      setLoadingTeams(true);

      const response = await api.get('/teams');

      setLoadingTeams(false);
      setTeams(response.data);
    } catch (error) {
      setLoadingTeams(false);
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
      <DashboardPage teams={teams} loadingTeams={loadingTeams} />
    </Layout>
  );
};

export default Dashboard;
