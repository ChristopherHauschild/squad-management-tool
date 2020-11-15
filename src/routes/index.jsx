import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Dashboard } from 'pages/Dashboard';
import { ManagementTeam } from 'pages/ManagementTeam';

const Routes = () => (
  <Switch>
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/management-team" component={ManagementTeam} />

    <Redirect to="/dashboard" component={Dashboard} />
  </Switch>
);

export default Routes;
