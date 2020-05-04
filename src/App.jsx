import React, { Component } from "react";
import styles from "./App.module.scss";
import NavBar from "./components/NavBar";
import Routes from "./containers/Routes/Routes";
import firebase, { provider } from "./firebase";

import library from "./data/fa-library";

class App extends Component {
  state = {
    recipes: [],
    user: null,
  };

  componentDidMount() {
    this.getUser();
  }

  cleanRecipe = (recipe) => {
    const cleanedRecipe = {
      id: recipe.idMeal,
      name: recipe.strMeal,
      category: recipe.strCategory,
      area: recipe.strArea,
      instructions: recipe.strInstructions,
      thumbnail: recipe.strMealThumb,
      tags: recipe.strTags,
      ingredients: this.getIngredients(recipe),
      source: recipe.strSource,
      dateCreated: new Date().toUTCString(),
      dateModified: null,
      youtube: recipe.strYoutube,
    };
    return cleanedRecipe;
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

  grabRecipes = (searchTerm) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
      .then((res) => res.json())
      .then((res) => {
        const cleanRecipes = res.meals.map(this.cleanRecipe);
        this.setState({ recipes: cleanRecipes });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  signIn = () => {
    firebase.auth().signInWithRedirect(provider);
  };

  signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.setState({ user: null });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  getUser = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  };

  render() {
    return (
      <>
        <section className={styles.nav}>
          <NavBar
            updateSearchText={this.grabRecipes}
            user={this.state.user}
            signIn={this.signIn}
            signOut={this.signOut}
          />
        </section>
        <section className={styles.content}>
          <Routes recipes={this.state.recipes} />
        </section>
      </>
    );
  }
}

export default App;
