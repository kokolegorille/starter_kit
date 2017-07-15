import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';

import routes from '../routes';

import { Redirect, BrowserRouter as Router } from 'react-router-dom';

// WITH ELECTRON, ITS BETTER TO USE HASH HISTORY!
// AS IT WILL SURVIVE RELOAD!
import { createHashHistory } from 'history';
const history = createHashHistory();

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-redux
// http://stackoverflow.com/questions/35706835/react-router-redirect-after-action-redux
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
const middleware = routerMiddleware(history)

import configureStore from '../configure_store';
const store = configureStore(middleware);

const Root = () => {
  return (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      {routes}
    </ConnectedRouter>
  </Provider>
);}

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root;