import * as actions from '../actions';

describe('actions', () => {
  it('should return type of ADD_TYPES with a pokeType', () => {
    const pokeTypes = [
      {
        id: 1,
        name: 'normal',
        pokemon: [16, 17, 18]
      }
    ];
    const expected = {
      type: 'ADD_TYPES',
      pokeTypes
    };

    const result = actions.addTypes(pokeTypes);

    expect(result).toEqual(expected);
  });
});

it('should return type of ADD_TYPES with a pokeType', () => {
  const pokemon = [
    {
      name: 'caterpie',
      id: 10,
      type: 7,
      weight: 29,
      sprites: []
    }
  ];
  const expected = {
    type: 'ADD_POKEMON',
    pokemon
  };

  const result = actions.addPokemon(pokemon);

  expect(result).toEqual(expected);
});
