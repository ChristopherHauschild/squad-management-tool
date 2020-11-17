import React, { useCallback, useEffect, useState } from 'react';

import api from 'services/api';

import Layout from 'components/Layout';

import ManagementTeamPage from './presentation/ManagementTeamPage';

const ManagementTeam = () => {
  const [players, setPlayers] = useState(undefined);
  const [team, setTeam] = useState(undefined);

  const [search, setSearch] = useState('');

  const [loadingPlayers, setLoadingPlayers] = useState(false);
  const [loadingTeam, setLoadingTeam] = useState(false);

  const fetchPlayers = useCallback(async () => {
    try {
      setLoadingPlayers(true);
      const response = await api.get(`/players?q=${search}`);

      setLoadingPlayers(false);
      setPlayers(response.data);
    } catch (error) {
      setLoadingPlayers(false);
    }
  }, [search]);

  const fetchTeam = useCallback(async (id) => {
    try {
      setLoadingTeam(true);
      const response = await api.get(`/teams/${id}`);

      setLoadingTeam(false);
      setTeam(response.data);
    } catch (error) {
      setLoadingTeam(false);
    }
  }, []);

  useEffect(() => {
    fetchPlayers();
  }, [fetchPlayers, search]);

  return (
    <Layout>
      <ManagementTeamPage
        players={players}
        loadingPlayers={loadingPlayers}
        search={search}
        onSearch={(value) => setSearch(value)}
        fetchTeam={fetchTeam}
        loadingTeam={loadingTeam}
        team={team}
      />
    </Layout>
  );
};

export default ManagementTeam;
