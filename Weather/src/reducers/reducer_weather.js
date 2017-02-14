import { FETCH_WEATHER } from '../actions/index';

export default function(state= [], action){

switch(action.type){
  case FETCH_WEATHER:
    return[action.payload.data,...state];
    // return state.concat([action.payload.data]); //this statement and above statement
    // are identical. They both are fetching new data adding to it to current array and
    //returning that updated array  
}



  return state;
}
