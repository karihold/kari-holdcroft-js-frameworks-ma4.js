import React from 'react';
import './App.css';
import RecipeList from './components/RecipeList/RecipeList';

const baseUrl = 'https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/';

function App() {
  return <RecipeList baseUrl={baseUrl} />;
}

export default App;
