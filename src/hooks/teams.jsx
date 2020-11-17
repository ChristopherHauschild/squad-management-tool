import React, { createContext, useCallback, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { uuid } from 'uuidv4';
import { message } from 'antd';

import api from 'services/api';

const TeamsContext = createContext([]);

const Teams = ({ children }) => {
  const history = useHistory();

  const [success, setSuccess] = useState(false);

  const createTeam = useCallback(
    async (payload) => {
      try {
        await api.post('/teams', {
          id: uuid(),
          ...payload,
        });

        setSuccess(true);

        history.push('/dashboard');
        message.success('Team successfully created.');
      } catch (error) {
        setSuccess(false);
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

        setSuccess(true);

        history.push('/dashboard');
        message.success('Team successfully updated.');
      } catch (error) {
        setSuccess(false);
        message.error('Could not update the team. Try again.');
      }
    },
    [history]
  );

  const deleteTeam = useCallback(async (id) => {
    try {
      await api.delete(`/teams/${id}`);

      setSuccess(true);
      message.success('Team successfully removed.');
    } catch (error) {
      setSuccess(false);
      message.error('Could not remove the team. Try again.');
    }
  }, []);

  return (
    <TeamsContext.Provider value={{ createTeam, updateTeam, deleteTeam, success }}>
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
