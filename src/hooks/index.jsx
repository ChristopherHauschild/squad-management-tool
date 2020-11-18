import React from 'react';

import { Teams } from './teams';
import { DroppedPlayers } from './droppedPlayers';

const AppProvider = ({ children }) => (
  <Teams>
    <DroppedPlayers>{children}</DroppedPlayers>
  </Teams>
);

export default AppProvider;
