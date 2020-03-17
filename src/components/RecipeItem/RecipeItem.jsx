import React from 'react';
import PropTypes from 'prop-types';

function RecipeItem(props) {
  return (
    <li>
      <h2>{props.name}</h2>
      <img src={props.image} alt={`${props.name}.`} />
    </li>
  );
}

RecipeItem.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default RecipeItem;
