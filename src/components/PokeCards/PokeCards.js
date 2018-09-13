import React from 'react';
import PropTypes, { array } from 'prop-types';
import { connect } from 'react-redux';

export const PokeCards = pokeTypes => {
  console.log(pokeTypes.pokeTypes);
  return pokeTypes.pokeTypes.map(pokeType => {
    return (
      <div className>
        <h1>hi</h1>
      </div>
    );
  });
};

PokeCards.propTypes = {
  pokeTypes: array.isRequired
};

export default PokeCards;
