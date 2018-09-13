import { pokeReducer } from './poke-type-reducer';
import * as actions from '../actions';

describe('poke-type-reducer', () => {
  it('should return the intial state', () => {
    const expected = null;
    const result = pokeReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should return the state with new pokeTypes', () => {
    const pokeTypes = [
      {
        id: 1,
        name: 'normal',
        pokemon: [16, 17, 18]
      }
    ];
    const expected = pokeTypes;
    const result = pokeReducer(undefined, actions.addTypes(pokeTypes));
    expect(result).toEqual(expected);
  });
});
