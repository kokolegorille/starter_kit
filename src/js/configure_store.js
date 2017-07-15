import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import {createLogger} from 'redux-logger';

import reduxApp from './reducers';
import ipcMiddleware from './middlewares/ipc_middleware';
// import urlChangerMiddleware from './middlewares/url_changer_middleware';

const configureStore = (routerMiddleware) => {
  // const middlewares = [routerMiddleware, reduxThunk, ipcMiddleware, urlChangerMiddleware];
  const middlewares = [routerMiddleware, reduxThunk, ipcMiddleware];
  
  let composeEnhancers;
  
  // Comment for PROD  
  middlewares.push(createLogger());
  
  // composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
  composeEnhancers = compose;
    
  const store = createStore(
    reduxApp,
    composeEnhancers(applyMiddleware(...middlewares))
  )
    
  return store;
}

export default configureStore;
