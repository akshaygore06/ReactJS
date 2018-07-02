import { createReducer } from 'redux-act';
import actions from '../actions/index';

export default createReducer({
  [actions.updateUserData]: (state, userData) => ({ ...state, userData }),
},
  {
    userData: [],
  }
);