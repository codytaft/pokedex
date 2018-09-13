import React from 'react';
import PropTypes, { array } from 'prop-types';
import { connect } from 'react-redux';

export const PokeCards = pokeTypes => {
  console.log(pokeTypes.pokeTypes);
  return pokeTypes.pokeTypes.map(pokeType => {
    console.log(pokeType);
    return (
      <div className>
        <h1>{pokeType.name}</h1>
        <div>
          {pokeType.pokemon.map(pokemon => (
            <p> {pokemon} </p>
          ))}
        </div>
      </div>
    );
  });
};

PokeCards.propTypes = {
  pokeTypes: array.isRequired
};

export default PokeCards;
