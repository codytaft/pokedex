import { mapStateToProps, mapDispatchToProps } from './PokeCards.js';
import { addPokemon } from '../../actions/index';

describe('mapStateToProps', () => {
  it('should return an object with a pokemon array', () => {
    const mockPokemon = [
      {
        name: 'caterpie',
        id: 10,
        type: 7,
        weight: 29,
        sprites: []
      }
    ];

    const mockState = {
      pokemon: mockPokemon
    };

    const expected = {
      pokemon: mockPokemon
    };

    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(expected);
  });
  it('should invoke dispatch when using a function from mapDispatchToProps', () => {
    const mockDispatch = jest.fn();
    const mockPokemon = [
      {
        name: 'caterpie',
        id: 10,
        type: 7,
        weight: 29,
        sprites: []
      }
    ];
    const actionToDispatch = addPokemon(mockPokemon);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.addPokemon(mockPokemon);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});
