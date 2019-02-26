import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import HomePage from '../components/HomePage';
import Header from '../components/Header';
import Resume from '../components/Resume';
import Stocks from '../components/Stocks';


export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/resume" component={Resume} exact={true} />
        <Route path="/stocks" component={Stocks} exact={true} />
      </Switch>
    </div>
  </Router>
)

export default AppRouter;