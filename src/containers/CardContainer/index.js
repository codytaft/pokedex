import React, { Component } from 'react';
import PropTypes, { shape, func, string, array } from 'prop-types';
import { connect } from 'react-redux';
import { addTypes } from '../../actions';
import { PokeCards } from '../../components/PokeCards/PokeCards';

class CardContainer extends Component {
  async fetchPokemonTypes() {
    const response = await fetch('http://localhost:3001/types');
    const pokemonTypes = await response.json();
    this.props.addTypes(pokemonTypes);
    console.log(pokemonTypes);
  }

  // fetchPokemonTypes() {
  //   return fetch('http://localhost:3001/types')
  //     .then(response => response.json())
  //     .then(pokemonTypes => this.props.addTypes(pokemonTypes));
  //   }

  render() {
    return (
      <div>
        {!this.props.pokeTypes ? (
          <button
            onClick={async () => {
              await this.fetchPokemonTypes();
            }}
          >
            Get Pokemon
          </button>
        ) : (
          <PokeCards pokeTypes={this.props.pokeTypes} />
        )}
      </div>
    );
  }
}

CardContainer.propTypes = {
  pokeTypes: array.isRequired,
  addTypes: func.isRequired
};

export const mapStateToProps = state => ({ pokeTypes: state.pokeTypes });
export const mapDispatchToProps = dispatch => ({
  addTypes: pokeTypes => dispatch(addTypes(pokeTypes))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardContainer);
