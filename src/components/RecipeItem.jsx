import React from 'react';
import PropTypes from 'prop-types';

function RecipeItem(props) {
  return (
    <li>
      <h2>{props.name}</h2>
      <img src={props.image} />
    </li>
  );
}

RecipeItem.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string
};

export default RecipeItem;
