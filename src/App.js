import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  //This default use state brings in current recipes
  const [recipes, setRecipes] = useState([...RecipeData]);
  
  //This function takes a new recipe and adds it to the recipe array
  function newRecipe(recipe) {
    setRecipes([...recipes, recipe])
  }
  //This function is used to "delete" a recipe via index and filter
  function deleteRecipe(targetIndex) {
    setRecipes(recipes.filter((_, index) => index  !== targetIndex));
  }
  
  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.

  //I pushed in the current recipes array, delete func, and new recipe func as props
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes = {recipes} deleteRecipe = {deleteRecipe}/>
      <RecipeCreate newRecipe={newRecipe}/>
    </div>
  );
}

export default App;
