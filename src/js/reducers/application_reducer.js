import { combineReducers } from 'redux';
import bootupTime from './application/bootup_time_reducer';
import isLoading from './application/is_loading_reducer';

const application = combineReducers({
  bootupTime,
  isLoading
});

export default application;