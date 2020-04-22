import React, { Component } from "react";
import styles from "./Dashboard.module.scss";
import recipes from "../../data/recipes";
import CardList from "../../components/CardList/CardList";
import FeedbackPanel from "../../components/FeedbackPanel/FeedbackPanel";

class DashBoard extends Component {
  checkRecipeName = (recipe) => {
    const recipeName = recipe.strMeal.toLowerCase();
    return recipeName.includes(this.props.searchText.toLowerCase());
  };

  toggleFav = (recipe) => {
    recipe.isFav = !recipe.isFav;
  };

  render() {
    const matchingRecipes = recipes.filter(this.checkRecipeName);

    const contentJsx = matchingRecipes.length ? (
      <CardList recipes={matchingRecipes} toggleFav={this.toggleFav} />
    ) : (
      <FeedbackPanel
        header="No matches"
        text="None of our recipes matched that search"
      />
    );

    return <section className={styles.dashboard}>{contentJsx}</section>;
  }
}

export default DashBoard;
