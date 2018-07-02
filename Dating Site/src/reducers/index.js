import { combineReducers } from 'redux';
import UserData from './UserDataReducer';
import SearchControlsReducer from './SearchControlsReducer';

const rootReducer = combineReducers({
  users:UserData,
  filter:SearchControlsReducer
});

export default rootReducer;
