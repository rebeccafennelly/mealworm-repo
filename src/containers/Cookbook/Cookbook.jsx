import React, { Component } from "react";
import styles from "./Cookbook.module.scss";
import recipes from "../../data/recipes";
import FeedbackPanel from "../../components/FeedbackPanel/FeedbackPanel";
import CardList from "../../components/CardList/CardList";

class Cookbook extends Component {
  state = {
    favourites: recipes.filter((recipe) => recipe.isFav),
  };

  removeFromFav = (recipe) => {
    recipe.isFav = false;
    this.setState({ favourites: recipes.filter((recipe) => recipe.isFav) });
  };

  render() {
    const contentJsx = this.state.favourites.length ? (
      <CardList
        recipes={this.state.favourites}
        toggleFav={this.removeFromFav}
      />
    ) : (
      <FeedbackPanel
        header="No favourites"
        text="Try returning to dahsboard and searching for your meal of choice"
      />
    );

    return <section className={styles.cookbook}>{contentJsx}</section>;
  }
}

export default Cookbook;
