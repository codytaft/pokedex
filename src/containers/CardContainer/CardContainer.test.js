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
    const actionToDispatch = addTypes();
  });
});
