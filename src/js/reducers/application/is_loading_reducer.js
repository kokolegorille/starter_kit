import * as types from '../../actions/action_types';

import initialState from '../initial_state';

const isLoading = (state = initialState.application.isLoading, action) => {
  if (action.type.match(/_REQUEST$/)) 
    return true;
  else if (action.type.match(/_SUCCESS$/) || action.type.match(/_ERROR$/)) 
    return false;
  return state;
};

export default isLoading;