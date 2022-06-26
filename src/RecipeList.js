import React from "react";
import PostRecipe from "./PostRecipe"

function RecipeList({recipes, deleteRecipe}) {
  
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

  //Added <th> to match the headers in the provided example
  //Uses .map on our recipes to pass in recipes invidually and our deletehandler as props
  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th className="content_th">Ingredients</th>
            <th className="content_th">Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {recipes.map((recipe, index) => {
         return <PostRecipe key={index} recipe={recipe} handleDelete={() => deleteRecipe(index)} />})}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
