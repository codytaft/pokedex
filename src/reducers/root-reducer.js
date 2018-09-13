import { combineReducers } from 'redux';
import pokeReducer from './poke-reducer';

const rootReducer = combineReducers({
  pokeTypes: pokeReducer
});

export default rootReducer;
