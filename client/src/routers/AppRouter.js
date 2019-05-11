import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import HomePage from '../components/HomePage';
import Resume from '../components/Resume';
import KobeStats from '../components/KobeStats/KobeChart';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/resume" component={Resume} exact={true} />
        <Route path="/kobestats" component={KobeStats} exact={true} />
      </Switch>
    </div>
  </Router>
)

export default AppRouter;
