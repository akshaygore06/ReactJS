import { createAction } from 'redux-act';

export default {
  updateUserData: createAction("Update the user data"),
  updateAgeRange: createAction("Update the age range"),
  updateGender: createAction("Update the gender constraint")
};