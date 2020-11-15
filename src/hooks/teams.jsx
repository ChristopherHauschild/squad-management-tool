import React, { createContext, useCallback, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { uuid } from 'uuidv4';
import { message } from 'antd';

import api from 'services/api';

const TeamsContext = createContext([]);

const Teams = ({ children }) => {
  const history = useHistory();

  const createTeam = useCallback(
    async (payload) => {
      try {
        const id = uuid();

        await api.post('/teams', {
          id,
          ...payload,
        });

        history.push('/dashboard');
        message.success('Team successfully created.');
      } catch (error) {
        message.error('Could not create the team. Try again.');
      }
    },
    [history]
  );

  const updateTeam = useCallback(
    async (id, payload) => {
      try {
        await api.put(`/teams/${id}`, {
          ...payload,
        });

        history.push('/dashboard');
        message.success('Team successfully updated.');
      } catch (error) {
        message.error('Could not update the team. Try again.');
      }
    },
    [history]
  );

  const removeTeam = useCallback(async (id) => {
    try {
      await api.delete(`/teams/${id}`);

      message.success('Team successfully removed.');
    } catch (error) {
      message.error('Could not remove the team. Try again.');
    }
  }, []);

  return (
    <TeamsContext.Provider value={{ createTeam, updateTeam, removeTeam }}>
      {children}
    </TeamsContext.Provider>
  );
};

const useTeams = () => {
  const context = useContext(TeamsContext);

  if (!context) {
    throw new Error('useTeam must be used within an TeamContext');
  }

  return context;
};

export { Teams, useTeams };
