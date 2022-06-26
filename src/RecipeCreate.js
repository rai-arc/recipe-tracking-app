import React, { useState } from "react";

function RecipeCreate({newRecipe}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers

  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  }

  const [formData, setFormData] = useState({...initialFormState});
  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    newRecipe(formData);
    event.target.reset();
    setFormData({initialFormState})
  };
  
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
