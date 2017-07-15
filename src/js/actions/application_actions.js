import * as types from './action_types';

const sendDispatch = (dispatch, type, payload) => (dispatch({
  type: type,
  payload: payload
}));

export const appBootup = (bootupTime) => {
  return (dispatch => {
    sendDispatch(dispatch, types.APP_BOOTUP, bootupTime);    
  });
};

export const sendPing = () => {
  return (dispatch => {
    sendDispatch(dispatch, types.SEND_PING, null);    
  });
};