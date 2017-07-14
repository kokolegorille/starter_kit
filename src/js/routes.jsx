import React from 'react'
import { Route, Switch } from 'react-router-dom';

import App from './components/app'
import HomePage from './components/home_page'
import NoMatchPage from './components/no_match_page'
import AboutPage from './components/about_page';

// http://stackoverflow.com/questions/42095600/nested-routes-in-v4

export default (
  <App>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route component={NoMatchPage} />
    </Switch>
  </App>
);