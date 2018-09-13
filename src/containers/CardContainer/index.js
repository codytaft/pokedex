import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import { connect } from 'react-redux';
import { addTypes } from '../../actions';

class CardContainer extends Component {
  async fetchPokemonTypes() {
    const response = await fetch('http://localhost:3001/types');
    const pokemonTypes = await response.json();
    this.props.addTypes(pokemonTypes);
    console.log(pokemonTypes);
  }
  render() {
    return (
      <div>
        <button
          onClick={async () => {
            // this.props.getTypes();
            await this.fetchPokemonTypes();
            // alert('POKE');
          }}
        >
          Get Pokemon
        </button>
      </div>
    );
  }
}

CardContainer.propTypes = {
  fake: shape({ fake: string }),
  addTypes: func.isRequired
};

const mapStateToProps = state => ({ pokeTypes: state.pokeTypes });
const mapDispatchToProps = dispatch => ({
  addTypes: pokeTypes => dispatch(addTypes(pokeTypes))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardContainer);
