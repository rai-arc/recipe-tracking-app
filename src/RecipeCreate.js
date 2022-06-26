import React, { useState } from "react";

function RecipeCreate({newRecipe}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers

  //Set an initial form state for default in form data
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  }

  //Set a useState function using formData and initial form state as a default
  const [formData, setFormData] = useState({...initialFormState});

  //Created a function to track changes in form
  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  //Created a submit handeler to: 1. Use formData in newRecipe func, 2. Reset form to blank, 3. Set FormData back to initial state
  const handleSubmit = (event) => {
    event.preventDefault();
    newRecipe(formData);
    event.target.reset();
    setFormData({initialFormState})
  };
  
  //Inputs and textareas were added to take data, added required so data must be entered, gave them handlers as well, and the form an submit handler
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td><input required name="name" placeholder="Name" onChange={handleChange}></input></td>
            <td><input required name="cuisine" placeholder="Cuisine" onChange={handleChange}></input></td>
            <td><input required name="photo" type="url" placeholder="URL" onChange={handleChange}></input></td>
            <td className="content_td"><textarea required name="ingredients" type="text" placeholder="Ingredients" onChange={handleChange}></textarea></td>
            <td className="content_td"><textarea required name="preparation" type="text" placeholder="Preparation" onChange={handleChange}></textarea></td>
            <td>
              <button type="submit">Create</button>
            </td> 
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
