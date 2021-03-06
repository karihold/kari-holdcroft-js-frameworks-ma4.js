import React from 'react';
import PropTypes from 'prop-types';

function SearchRecipe(props) {
  return <input placeholder="Search for a recipe by title" onChange={props.handleFiltering} />;
}

SearchRecipe.propTypes = {
  handleFiltering: PropTypes.func
};

export default SearchRecipe;
