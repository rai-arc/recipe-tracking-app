import React from "react";

function PostRecipe ({recipe, handleDelete}){
    return (
            <tr>
            <td><p>{recipe.name}</p></td>
            <td><p>{recipe.cuisine}</p></td>
            <td><img alt="Recipe" src={recipe.photo}/></td>
            <td className="content_td"><p>{recipe.ingredients}</p></td>
            <td className="content_td"><p>{recipe.preparation}</p></td>
            <td><button type="submit"  onClick={handleDelete} name="delete">Delete</button></td>
            </tr>
    )
}

export default PostRecipe