import {ipcRenderer} from 'electron';

import * as types from '../actions/action_types';

// IPC callbacks
ipcRenderer.on('system:pong', 
  (event, rows) => console.log("got PONG!", rows)
);

const ipcMiddleware = store => {
  return next => action => {
    switch (action.type) {
      // IPC
      case types.SEND_PING:
        ipcRenderer.send('system:ping', null);
        
        console.log("send PING!");
        
        return next(action);
                  
      // DEFAULT
      default:
        return next(action);
    }
  }
}

export default ipcMiddleware;