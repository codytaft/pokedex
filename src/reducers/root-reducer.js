import { combineReducers } from 'redux';
import pokeReducer from './poke-type-reducer';
import pokemonReducer from './pokemon-reducer';

const rootReducer = combineReducers({
  pokeTypes: pokeReducer,
  pokemon: pokemonReducer
});

export default rootReducer;
