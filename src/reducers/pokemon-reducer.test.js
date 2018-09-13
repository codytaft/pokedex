import { pokemonReducer } from './pokemon-reducer';
import * as actions from '../actions';

describe('pokemonReducer', () => {
  it('should return the intial state', () => {
    const expected = [];

    const result = pokemonReducer(undefined, {});

    expect(result).toEqual(expected);
  });
  it('should reutn the state with new pokemon', () => {
    const pokemon = [
      {
        name: 'spearow',
        id: 21,
        type: 3,
        weight: 20,
        sprites: []
      }
    ];
    const expected = [pokemon];
    const result = pokemonReducer(undefined, actions.addPokemon(pokemon));
    expect(result).toEqual(expected);
  });
});
