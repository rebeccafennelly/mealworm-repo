import React, { Component } from "react";
import styles from "./Dashboard.module.scss";
import recipes from "../../data/recipes";
import CardList from "../../components/CardList/CardList";
import FeedbackPanel from "../../components/FeedbackPanel/FeedbackPanel";

class DashBoard extends Component {
  toggleFav = (recipe) => {
    recipe.isFav = !recipe.isFav;
  };

  render() {
    const { recipes } = this.props;

    const contentJsx = recipes.length ? (
      <CardList recipes={recipes} toggleFav={this.toggleFav} />
    ) : (
      <FeedbackPanel
        header="No recipes"
        text="Type into the searchbar to find your desired meal"
      />
    );

    return <section className={styles.dashboard}>{contentJsx}</section>;
  }
}

export default DashBoard;
