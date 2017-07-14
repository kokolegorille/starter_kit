// https://github.com/reactjs/react-router-redux
// Keep routing info inside state, to allow time travel
import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import application from './application_reducer';

const reduxApp = combineReducers({
  application,
    
  // System
  router: routerReducer
});

export default reduxApp;