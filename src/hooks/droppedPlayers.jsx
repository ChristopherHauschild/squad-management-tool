import React, { createContext, useCallback, useContext, useState } from 'react';

const DroppedPlayersContext = createContext([]);

const DroppedPlayers = ({ children }) => {
  const [droppedPlayers, setDroppedPlayers] = useState([]);

  const onDropPlayer = useCallback((player) => {
    setDroppedPlayers((oldState) => [...oldState, player]);
  }, []);

  const resetDroppedPlayers = useCallback(() => {
    setDroppedPlayers([]);
  }, []);

  return (
    <DroppedPlayersContext.Provider
      value={{ droppedPlayers, onDropPlayer, resetDroppedPlayers }}
    >
      {children}
    </DroppedPlayersContext.Provider>
  );
};

const useDroppedPlayers = () => {
  const context = useContext(DroppedPlayersContext);

  if (!context) {
    throw new Error('useDroppedPlayers must be used within an DroppedPlayersContext');
  }

  return context;
};

export { DroppedPlayers, useDroppedPlayers };
