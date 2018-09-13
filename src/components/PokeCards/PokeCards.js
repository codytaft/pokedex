import React, { Component } from 'react';
import PropTypes, { array } from 'prop-types';
import { connect } from 'react-redux';
import { addPokemon } from '../../actions';
import './PokeCards.css';

export class PokeCards extends Component {
  constructor() {
    super();
    this.state = {
      isClicked: false,
      currentType: []
    };
  }
  async fetchPokemon(pokemonArray) {
    const pokemonArr = await pokemonArray.map(async pokemonId => {
      if (!this.props.pokemon.find(pokemon => pokemon.id === pokemonId)) {
        const response = await fetch(
          `http://localhost:3001/pokemon/${pokemonId}`
        );
        const unresolvedPokemon = await response.json();
        return unresolvedPokemon;
      }
    });
    const promise = await Promise.all(pokemonArr);
    return promise.forEach(promise => {
      if (promise && !this.state.currentType.includes(promise.id)) {
        this.props.addPokemon(promise);
        this.state.currentType.push(promise);
      }
    });
  }

  render() {
    const { currentType } = this.state;
    return this.props.pokeTypes.map(pokeType => (
      <div
        className="pokeCard "
        onClick={async () => await this.fetchPokemon(pokeType.pokemon)}
      >
        <h1>{pokeType.name}</h1>
        <div>
          {this.state.currentType ? (
            currentType.map(pokemon => (
              <div>
                <p>{pokemon.name}</p>
                <p>{pokemon.type}</p>
                <p>{pokemon.weight}</p>
                <img
                  src={pokemon.sprites.front_default}
                  alt="pokemon front"
                  height="42"
                  width="42"
                />
              </div>
            ))
          ) : (
            <div />
          )}
        </div>
      </div>
    ));
  }
}

export const mapStateToProps = state => ({
  pokemon: state.pokemon,
  pokeTypes: state.pokeTypes
});
export const mapDispatchToProps = dispatch => ({
  addPokemon: pokemon => dispatch(addPokemon(pokemon))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokeCards);

//   <div>
//     {this.props.pokemon ? (
//       <div className="pokemon">
//         {this.props.pokemon.map(pokemon => (
//           <div>
//             <p>{pokemon.name}</p>
//             <p>{pokemon.type}</p>
//             <p>{pokemon.weight}</p>
//             <img
//               src={pokemon.sprites.front_default}
//               alt="pokemon front"
//               height="42"
//               width="42"
//             />
//           </div>
//         ))}
//       </div>
//     ) : (
//       <div />
//     )}
//   </div>
// </div>
