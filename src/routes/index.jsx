import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Dashboard } from 'pages/Dashboard';
import { ManagementTeam } from 'pages/ManagementTeam';

const Routes = () => (
  <Switch>
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/management-team" component={ManagementTeam} />
  </Switch>
);

export default Routes;
