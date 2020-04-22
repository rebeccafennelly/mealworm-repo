import React, { Component } from "react";
import styles from "./App.module.scss";
import NavBar from "./components/NavBar";

import library from "./data/fa-library";
import Routes from "./containers/Routes/Routes";

class App extends Component {
  state = {
    recipes: [],
  };

  getIngredients = (recipe) => {
    let ingredients = [];
    Object.keys(recipe).forEach((key) => {
      if (key.includes("Ingr") && recipe[key]) {
        ingredients.push(recipe[key]);
      }
    });
    return ingredients;
  };

  cleanRecipeData = (recipe) => {
    return {
      ...recipe,
      ingredients: this.getIngredients(recipe),
      isFav: false,
    };
  };

  grabRecipes = (searchTerm) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
      .then((res) => res.json())
      .then((res) => {
        const cleanRecipes = res.meals.map(this.cleanRecipeData);

        this.setState({ recipes: cleanRecipes });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <>
        <section className={styles.nav}>
          <NavBar updateSearchText={this.grabRecipes} />
        </section>
        <section className={styles.content}>
          <Routes recipes={this.state.recipes} />
        </section>
      </>
    );
  }
}

export default App;
