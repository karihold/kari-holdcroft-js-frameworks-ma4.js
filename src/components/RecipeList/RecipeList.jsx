import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import SearchRecipe from '../SearchRecipe/SearchRecipe';
import RecipeItem from '../RecipeItem/RecipeItem';

function RecipeList({ baseUrl }) {
  const [filter, setFilter] = useState('');
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch(baseUrl)
      .then(response => response.json())
      .then(json => setRecipes(json.results))
      .catch(error => console.log(error));
  }, [baseUrl]);

  const handleFiltering = event => setFilter(event.target.value.toLowerCase());

  return (
    <div>
      <SearchRecipe handleFiltering={handleFiltering} />
      <ul>
        {recipes
          .filter(recipe => recipe.title.toLowerCase().includes(filter))
          .map(recipe => (
            <RecipeItem name={recipe.title} image={recipe.thumbnail} />
          ))}
      </ul>
    </div>
  );
}

RecipeList.propTypes = {
  baseUrl: PropTypes.string.isRequired
};

export default RecipeList;
