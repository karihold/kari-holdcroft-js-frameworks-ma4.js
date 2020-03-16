import React, { useEffect, useState } from 'react';
import SearchRecipe from './SearchRecipe';
import RecipeItem from './RecipeItem';

function RecipeList() {
  const [filter, setFilter] = useState('');
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/')
      .then(response => response.json())
      .then(json => setRecipes(json.results))
      .catch(error => console.log(error));
  }, []);

  const handleFiltering = event => {
    if (event.keyCode !== 13) return;

    setFilter(event.target.value);
  };
  console.log(recipes);
  return (
    <div>
      <SearchRecipe handleFiltering={handleFiltering} />
      <ul>
        {recipes
          .filter(recipe => {
            if (!filter) return true;

            return recipe.title.toLowerCase().includes(filter.toLowerCase());
          })
          .map(recipe => (
            <RecipeItem name={recipe.title} image={recipe.thumbnail} />
          ))}
      </ul>
    </div>
  );
}

export default RecipeList;
