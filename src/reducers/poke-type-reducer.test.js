import { pokeReducer } from './poke-type-reducer';

describe('poke-type-reducer', () => {
  it('should return the intial state', () => {
    const expected = null;
    const result = pokeReducer(undefined, {});
    expect(result).toEqual(expected);
  });
});
