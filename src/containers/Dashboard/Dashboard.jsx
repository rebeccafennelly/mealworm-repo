import React, { Component } from "react";
import styles from "./Dashboard.module.scss";
import recipes from "../../data/recipes";
import CardList from "../../components/CardList/CardList";

class DashBoard extends Component {
  render() {
    const matchingRecipes = recipes.filter((recipe) => {
      const recipeName = recipe.strMeal.toLowerCase();
      return recipeName.includes(this.props.searchText.toLowerCase());
    });

    return <CardList recipes={matchingRecipes} />;
  }
}

export default DashBoard;
