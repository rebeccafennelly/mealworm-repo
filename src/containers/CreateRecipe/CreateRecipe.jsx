import React, { Component } from "react";
import styles from "./CreateRecipe.module.scss";

class CreateRecipe extends Component {
  emptyRecipe = {
    name: "",
    id: "",
    instructions: "",
    ingredients: "",
    tags: "",
    source: "",
    youtube: "",
    category: "",
    area: "",
    thumbnail: "",
  };

  state = {
    recipe: this.emptyRecipe,
  };

  handleChange = (e) => {
    const name = e.target.name;
    this.setState({ recipe: { ...this.state.recipe, [name]: e.target.value } });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const cleanedRecipe = this.cleanFormValues(this.state.recipe);
    this.props.addToCookbook(cleanedRecipe);
    alert("Recipe added");
    this.clearForm();
  };

  cleanFormValues = (formValues) => {
    const cleanIngredients = formValues.ingredients.split(",");
    const cleanTags = formValues.tags.split(",");
    formValues.ingredients = cleanIngredients;
    formValues.tags = cleanTags;
    formValues.isFav = true;
    return formValues;
  };

  clearForm = () => {
    this.setState({ recipe: this.emptyRecipe });
  };

  checkFormCompleted = () => {
    let isCompleted = true;
    for (const field in this.state.recipe) {
      if (this.state.recipe[field] === "") isCompleted = false;
    }
    return isCompleted;
  };

  render() {
    const {
      name,
      id,
      area,
      instructions,
      ingredients,
      tags,
      category,
      youtube,
      source,
      thumbnail,
    } = this.state.recipe;

    return (
      <section className={styles.crudForm}>
        <form onSubmit={this.handleSubmit}>
          <div className={styles.formBlock}>
            <input
              type="text"
              name="name"
              placeholder="What's the recipe name?"
              autoFocus={true}
              value={name}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="id"
              placeholder="Give the recipe a unique id"
              value={id}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="category"
              placeholder="What category does the recipe come under e.g. desert, thai ?"
              value={category}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="area"
              placeholder="What region of the world is the recipe from?"
              value={area}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="source"
              placeholder="What's the href for the source of this recipe"
              value={source}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="youtube"
              placeholder="What's the href for the youtube link to this recipe?"
              value={youtube}
              onChange={this.handleChange}
            />
          </div>
          <div className={styles.formBlock}>
            <textarea
              name="instructions"
              rows="5"
              placeholder="What're the instructions for creating the meal?"
              value={instructions}
              onChange={this.handleChange}
            ></textarea>
            <input
              type="text"
              name="thumbnail"
              placeholder="The href for the recipe image"
              value={thumbnail}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="tags"
              placeholder="Tags seperated by commas e.g. comfort food,winter staple"
              value={tags}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="ingredients"
              placeholder="Ingredients seperated by commas e.g. bread,butter,peanut butter"
              value={ingredients}
              onChange={this.handleChange}
            />
            <input
              type="submit"
              value="Submit"
              className={`${styles.submitButton}`}
              onChange={this.handleChange}
              disabled={!this.checkFormCompleted()}
            />
          </div>
        </form>
      </section>
    );
  }
}

export default CreateRecipe;
