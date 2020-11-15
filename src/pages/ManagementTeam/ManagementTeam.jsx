import React, { useEffect, useState } from 'react';

import api from 'services/api';

import Layout from 'components/Layout';

import ManagementTeamPage from './presentation/ManagementTeamPage';

const ManagementTeam = () => {
  const [players, setPlayers] = useState([]);
  const [search, setSearch] = useState('');

  const [loading, setLoading] = useState(false);

  const fetch = async () => {
    try {
      setLoading(true);
      const response = await api.get(`/players?q=${search}`);

      setLoading(false);
      setPlayers(response.data);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetch();
  }, [search]); // eslint-disable-line

  return (
    <Layout>
      <ManagementTeamPage
        players={players}
        loadingPlayers={loading}
        search={search}
        onSearchChange={(value) => setSearch(value)}
      />
    </Layout>
  );
};

export default ManagementTeam;
