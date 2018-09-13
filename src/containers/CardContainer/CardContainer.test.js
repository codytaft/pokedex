import { CardContainer, mapStateToProps, mapDispatchToProps } from './index.js';
import { addTypes } from '../../actions/index';

describe('mapStateToProps', () => {
  it('should return an object with a pokeTypes array', () => {
    const id = 1;
    const name = 'normal';
    const pokemon = [16, 17, 18, 19, 20];

    const mockState = {
      pokeTypes: [{ id, name, pokemon }]
    };
    const expected = {
      pokeTypes: [{ id, name, pokemon }]
    };

    const mappedProps = mapStateToProps(mockState);

    expect(mappedProps).toEqual(expected);
  });
});

describe('mapDispatchToProps', () => {
  it('should invoke dispatch when using a fucntion from mapDispatchTo Props', () => {
    const mockDispatch = jest.fn();
    const id = 1;
    const name = 'normal';
    const pokemon = [16, 17, 18, 19, 20];

    const mockPokeTypes = [{ id, name, pokemon }];
    const actionToDispatch = addTypes(mockPokeTypes);

    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.addTypes(mockPokeTypes);

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});
