import { createReducer } from 'redux-act';
import actions from '../actions/index';

export default createReducer({
  [actions.updateGender]: (state, gender) => ({ ...state, gender }),
  [actions.updateAgeRange]: (state, ageRange) => ({ ...state, ageRange })
},
  {
      gender: "any",
      ageRange:{
          min: 18,
          max: 90
      }
});